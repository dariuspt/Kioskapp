import { Api } from "@/common/utils/httpsinterceptor";
import useSWR, { SWRConfiguration } from "swr";

const service = import.meta.env.VITE_ENV_SERVICE;
const route = "/products";

export interface ProductsInterface {
  quantity?: any;
  product?: any;
  id: number;
  name: string;
  producer: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  subcategory: string;
  is_top_product: boolean;
  image?: File;
}

export interface ProductsInterfaceOut
  extends Omit<ProductsInterface, "image" | "category"> {
  image_url?: string | null; // Received from the backend (e.g., fetching products)
  category_name?: string;
}

interface Product {
  getProducts: () => Promise<ProductsInterfaceOut[]>;
  createProducts: (
    data: Omit<ProductsInterface, "id">
  ) => Promise<ProductsInterfaceOut>;
  update: (
    id: number,
    data: ProductsInterface
  ) => Promise<ProductsInterfaceOut>;
  deleteOne: (id: number) => Promise<ProductsInterface>;
}

export const ProductsService: Product = {
  getProducts: () => Api(service).get(route),
  createProducts: (data) => {
    const formData = new FormData();
    for (const key in data) {
      if (data[key] != null && key !== "image_url") {
        if (key === "category_name") {
          // If category_name is an object, extract the name
          const categoryNameValue =
            typeof data[key] === "object" && data[key] !== null
              ? data[key].name // Extract the category name
              : data[key].toString();

          formData.append("category", categoryNameValue);
        } else {
          formData.append(key, data[key].toString());
        }
      }
    }
    if (data.image) {
      formData.append("image", data.image); // Append the image file
    }

    return Api(service).post(route, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  update: (id, data) => {
    const formData = new FormData();
    for (const key in data) {
      if (data[key] != null && key !== "image") {
        formData.append(key, data[key].toString());
      }
    }
    if (data.image) {
      formData.append("image", data.image); // Append the image file
    }

    return Api(service).patch(`${route}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
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
