import { Api } from "@/common/utils/httpsinterceptor";
import useSWR from "swr";

const service = import.meta.env.VITE_ENV_SERVICE;
const route = "/orders";

export interface OrdersOut {
  id: number;
  product_id: string;
  quantity: number;
}

export interface OrdersIn {
  product_id: number;
  quantity: number;
}
interface Orders {
  createOrder: (data: OrdersIn) => Promise<OrdersOut>;
  getOrders: () => Promise<OrdersOut[]>;
  getOne: (id: number) => Promise<OrdersOut>;
  delete: (id: number) => Promise<OrdersOut>;
}

export const OrdersService: Orders = {
  createOrder: (data) =>
    Api(service).post(route, data, { headers: { "Content-Type": "application/json" } }),
  getOne: (id) => Api(service).get(`${route}/${id}`),
  getOrders: () => Api(service).get(route),
  delete: (id) => Api(service).get(`${route}/${id}`),
};

export const useOrders = () => {
  // Use SWR to fetch products from the API
  const { data, error, isLoading } = useSWR(route, OrdersService.getOrders);

  return {
    data,
    isLoading,
    isError: error,
    createOrder: OrdersService.createOrder,
  };
};
