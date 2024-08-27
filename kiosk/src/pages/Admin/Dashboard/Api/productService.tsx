// src/api/productService.ts
import { Product, ProductCreate, ProductUpdate } from '../types';

const BASE_URL = 'http://127.0.0.1:8000/products'; // Update with your API URL

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return await response.json();
};

export const createProduct = async (product: ProductCreate): Promise<Product> => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error('Failed to create product');
    }
    return await response.json();
};

export const updateProduct = async (id: number, product: ProductUpdate): Promise<void> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error('Failed to update product');
    }
};

export const deleteProduct = async (id: number): Promise<void> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete product');
    }
};
