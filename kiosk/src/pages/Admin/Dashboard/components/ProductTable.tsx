import React, { useState, useEffect } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Container,
    Box,
    Typography,
    CircularProgress,
    Alert,
    TablePagination,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductForm from './ProductForm';
import { fetchProducts, deleteProduct, createProduct, updateProduct } from '../Api/productService';
import { Product, ProductCreate } from '../types';

interface ProductTableProps {
    searchQuery: string;
}

const ProductTable: React.FC<ProductTableProps> = ({ searchQuery }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // State for delete confirmation dialog
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [productToDelete, setProductToDelete] = useState<number | null>(null); // State for the product to delete

    // Pagination state
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Number of products per page

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

    const handleSubmit = async (productData: ProductCreate) => {
        try {
            if (selectedProduct) {
                await updateProduct(selectedProduct.id, productData);
                setProducts((prevProducts) =>
                    prevProducts.map((p) =>
                        p.id === selectedProduct.id ? { ...p, ...productData } : p
                    )
                );
            } else {
                const createdProduct = await createProduct(productData);
                setProducts((prevProducts) => [...prevProducts, createdProduct]);
            }
            handleClose();
        } catch (err) {
            setError('Error saving product.');
            console.error(err);
        }
    };

    // Open delete confirmation dialog
    const handleDeleteOpen = (productId: number) => {
        setProductToDelete(productId);
        setOpenDeleteDialog(true);
    };

    const handleDeleteClose = () => {
        setProductToDelete(null);
        setOpenDeleteDialog(false);
    };

    const handleDelete = async () => {
        if (productToDelete !== null) {
            try {
                await deleteProduct(productToDelete);
                setProducts(products.filter((p) => p.id !== productToDelete));
            } catch (err) {
                setError('Error deleting product.');
                console.error(err);
            }
            handleDeleteClose();
        }
    };

    // Filter products based on search query from all products
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate total number of filtered products
    const totalFilteredProducts = filteredProducts.length;

    // Calculate the displayed products based on pagination
    const displayedProducts = filteredProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">{error}</Alert>;

    return (
        <Container maxWidth="lg">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4">Product Dashboard</Typography>
                <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpen()}>
                    Add Product
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredProducts.length > 0 ? (
                            displayedProducts.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>{product.price.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleOpen(product)} >
                                            <EditIcon color="info"/>
                                        </IconButton>
                                        <IconButton onClick={() => handleDeleteOpen(product.id)}>
                                            <DeleteIcon color="error"/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    No products found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 15]} // Options for number of rows per page
                component="div"
                count={totalFilteredProducts} // Total number of filtered products
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(_, newPage) => setPage(newPage)} // Handle page change
                onRowsPerPageChange={(event) => {
                    setRowsPerPage(parseInt(event.target.value, 10));
                    setPage(0); // Reset to first page when rows per page changes
                }}
            />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{selectedProduct ? 'Edit Product' : 'Add Product'}</DialogTitle>
                <DialogContent>
                    <ProductForm product={selectedProduct} onSubmit={handleSubmit} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">Cancel</Button>
                </DialogActions>
            </Dialog>

            {/* Confirmation Dialog for Deletion */}
            <Dialog open={openDeleteDialog} onClose={handleDeleteClose}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this product?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose} >Cancel</Button>
                    <Button onClick={handleDelete} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default ProductTable;
