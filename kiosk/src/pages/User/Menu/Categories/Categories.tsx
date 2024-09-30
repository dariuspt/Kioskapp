import { Box, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import UserSidebar from "../sideBar/UserSidebar";
import GridProducts from "@/components/GridProducts/GridProducts";
import SearchBar from "../SearchBar/SearchBar";
import Cart from "../../Cart/Cart";
import { useState } from "react";
import { Product } from "../Product";

const Categories = () => {
  const { id } = useParams();

  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 } // Increment quantity if it exists
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ display: "flex" }}>
      <Grid container spacing={3}>
        {/* Sidebar */}
        <Grid item xs={1} >
          <UserSidebar />
        </Grid>

        {/* Main Content */}
        <Grid
          item
          xs={8} // Make the main content larger to give more space for products
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: 12, 
          }}
        >
          <Box sx={{ width: "100%" }}>
            <SearchBar addToCart={addToCart} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: "bolder", marginTop: 4, marginBottom: 4, marginLeft: 9, }}>
            {id}
            <span> (260)</span>
          </Typography>

          <Box
            sx={{
              width: "100%",
            }}
          >
            <GridProducts addToCart={addToCart} />
          </Box>
        </Grid>

        {/* Cart */}
        <Grid
          item
          xs={2} // Make the cart slightly smaller to ensure it fits
          sx={{
            borderLeft: "1px solid #e0e0e0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Categories;
