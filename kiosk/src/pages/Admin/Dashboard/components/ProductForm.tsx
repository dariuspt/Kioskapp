import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Product, ProductCreate } from '../types';

interface ProductFormProps {
    product?: Product | null;
    onSubmit: (product: ProductCreate) => Promise<void>;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit }) => {
    const [name, setName] = useState<string>(product?.name || '');
    const [description, setDescription] = useState<string>(product?.description || '');
    const [price, setPrice] = useState<string>(product?.price.toFixed(2) || ''); // Store price as string

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const productData: ProductCreate = {
            name,
            description,
            price: parseFloat(price), // Convert back to number
        };

        await onSubmit(productData);
    };

    useEffect(() => {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price.toFixed(2)); // Format price to 2 decimal places
        }
    }, [product]);

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Price"
                        type="text" // Change type to text to remove arrows
                        value={price}
                        onChange={(e) => {
                            const value = e.target.value;
                            // Allow only digits and one decimal point
                            if (/^\d*\.?\d*$/.test(value)) {
                                setPrice(value);
                            }
                        }} // Allow full deletion and restrict input to numbers and decimal
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        {product ? 'Update Product' : 'Add Product'}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default ProductForm;
