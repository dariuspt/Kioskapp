import React from 'react';
import { Button, TableCell, TableRow } from '@mui/material';
import { Product } from '../types';

interface ProductItemProps {
    product: Product;
    onEdit: (product: Product) => void;
    onDelete: (id: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onEdit, onDelete }) => {
    return (
        <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
                <Button variant="outlined" onClick={() => onEdit(product)}>
                    Edit
                </Button>
                <Button variant="outlined" color="error" onClick={() => onDelete(product.id)}>
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default ProductItem;
