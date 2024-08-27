import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Box,
    Typography,
    IconButton,
    Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ProductForm from './ProductForm';
import { fetchProducts, deleteProduct, createProduct, updateProduct } from '../Api/productService';
import { Product, ProductCreate, ProductUpdate } from '../types';
import { Container } from '@mui/system';

const ProductTable: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [productIdToDelete, setProductIdToDelete] = useState<number | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError('Error fetching products.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    const handleOpen = (product?: Product) => {
        setSelectedProduct(product || null);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedProduct(null);
        setOpen(false);
    };

    const handleDeleteClick = (id: number) => {
        setProductIdToDelete(id);
        setOpenDeleteDialog(true);
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteProduct(id);
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
            setOpenDeleteDialog(false);
        } catch (err) {
            console.error('Error deleting product:', err);
        }
    };

    const handleConfirmDelete = () => {
        if (productIdToDelete !== null) {
            handleDelete(productIdToDelete);
        }
    };

    const handleCancelDelete = () => {
        setOpenDeleteDialog(false);
        setProductIdToDelete(null);
    };

    const handleSubmit = async (product: ProductCreate) => {
        try {
            if (selectedProduct) {
                const productUpdate: ProductUpdate = { ...product };
                await updateProduct(selectedProduct.id, productUpdate);
                setProducts((prevProducts) =>
                    prevProducts.map((p) => (p.id === selectedProduct.id ? { ...p, ...productUpdate } : p))
                );
            } else {
                const createdProduct = await createProduct(product);
                setProducts((prevProducts) => [...prevProducts, createdProduct]);
            }
            handleClose();
        } catch (err) {
            console.error('Error submitting product:', err);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <Container maxWidth="lg">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4">Product Dashboard</Typography>
                <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpen()}>
                    Add Product
                </Button>
            </Box>

            <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.price.toFixed(2)}</TableCell>
                                <TableCell align="right">
                                    <IconButton color="primary" onClick={() => handleOpen(product)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => handleDeleteClick(product.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Dialog for Delete Confirmation */}
            <Dialog open={openDeleteDialog} onClose={handleCancelDelete}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this product?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialog for Add/Edit Product */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{selectedProduct ? 'Edit Product' : 'Add Product'}</DialogTitle>
                <DialogContent>
                    <ProductForm product={selectedProduct ?? undefined} onSubmit={handleSubmit} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default ProductTable;
