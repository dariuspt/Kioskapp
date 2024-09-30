import { Api } from "@/common/utils/httpsinterceptor";
import useSWR from "swr";

const service = import.meta.env.VITE_ENV_SERVICE;
console.log("HELLO1", service);
const route = "/products";

export interface Products {
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
  getProducts: () => Promise<Products[]>;
}

export const ProductsService: Product = {
  getProducts: () => Api(service).get(route),
};

export const useProducts = () => {
  // Use SWR to fetch products from the API
  const { data, error, isLoading } = useSWR(route, ProductsService.getProducts);

  return {
    products: data, // This will contain the product data once fetched
    isLoading, // This is true while the data is being fetched
    isError: error, // If there is an error, it will be captured here
  };
};
