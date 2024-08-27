export interface ProductBase {
    name: string;
    description: string;
    price: number;
}

export interface ProductCreate extends ProductBase {
    // You can add any additional fields specific to creation here
}

export interface ProductUpdate extends Partial<ProductBase> {
    // Allow for partial updates
}

export interface Product extends ProductBase {
    id: number;
}
