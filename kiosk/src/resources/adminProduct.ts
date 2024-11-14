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

    // Loop through all the keys in the data object
    for (const key in data) {
      if (data[key] != null) {
        // Handle different fields appropriately
        if (key === "image" && data[key] instanceof File) {
          formData.append("image", data[key]); // Append the image file
        } else if (key !== "image") {
          // Append other fields as strings, excluding the image file itself
          formData.append(key, data[key].toString());
        }
      }
    }

    // Make the POST request with FormData
    return Api(service).post(route, formData);
  },
  update: (id, data) => {
    const formData = new FormData();

    // Append all non-file fields to FormData
    for (const key in data) {
      if (data[key] != null && key !== "image") {
        // Handle category specifically if it's an object
        if (
          key === "category_name" &&
          typeof data[key] === "object" &&
          data[key] !== null
        ) {
          formData.append("category", data[key].name); // Assuming backend expects category name
        } else {
          formData.append(key, data[key].toString());
        }
      }
    }

    // Append the image file if it exists
    if (data.image) {
      formData.append("image", data.image); // Append the image file
    }

    // Make the patch request with FormData
    return Api(service).patch(`${route}/${id}`, formData, {
      headers: {
        // Allow FormData to automatically handle content type including boundaries
        // Removing manual setting of "Content-Type" is recommended
        // "Content-Type": "multipart/form-data", // Do NOT set manually
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
