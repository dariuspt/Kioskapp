export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export interface ProductCreate {
    name: string;
    price: number;
  }
  
  export interface ProductUpdate {
    name?: string;
    price?: number;
  }
  