import { Api } from "@/common/utils/httpsinterceptor";
import useSWR, { SWRConfiguration } from "swr";

const service = import.meta.env.VITE_ENV_SERVICE;
console.log("HELLO1", service);
const route = "/products";

export interface ProductsInterface {
  id: number;
  name: string;
  producer: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  subcategory: string;
  image_url: string | null;
}
interface Product {
  getProducts: () => Promise<ProductsInterface[]>;
  createProducts: (data: Omit<ProductsInterface, 'id'>) => Promise<ProductsInterface>;
  update: (id: number, data: ProductsInterface) => Promise<ProductsInterface[]>;
  deleteOne: (id: number) => Promise<ProductsInterface>;
}

export const ProductsService: Product = {
  getProducts: () => Api(service).get(route),
  createProducts: (data) => Api(service).post(route, data),
  update: (id, data) => Api(service).put(`${route}/${id}`, data), // Update the product
  deleteOne: (id) => Api(service).delete(`${route}/${id}`), // Corrected to use DELETE instead of POST
};

const config: SWRConfiguration<ProductsInterface[], any> = {
    fallbackData: [],
  };

export const useProducts = ({ onError = () => {} }) => {
  const { data, mutate, error, isLoading } = useSWR(
    route,
    ProductsService.getProducts,
    {
      onError,
      ...config,
    }
  );

  return {
    products: data ?? [], // This will contain the product data once fetched
    loading: isLoading, // This is true while the data is being fetched
    isError: error, // If there is an error, it will be captured here
    mutate,
    create: ProductsService.createProducts,
    deleteOne: ProductsService.deleteOne,
    update: ProductsService.update,
  };
};
