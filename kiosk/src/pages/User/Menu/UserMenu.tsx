import { Box, Container, Grid, Typography } from "@mui/material";

import TopCategories from "./topCategories/TopCategories";
import UserSidebar from "./sideBar/UserSidebar";
import CarouselProducts from "./Carousel/Carousel";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { Product } from "./Product";

const UserMenu = () => {
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
    <Container
      maxWidth="xl"
      sx={{ display: "flex", height: "100%"}}
    >
      <Grid container spacing={2}>
        {/* Left Side - User Sidebar */}
        <Grid item xs={1}>
          <UserSidebar />
        </Grid>

        {/* Middle - SearchBar, TopCategories, CarouselProducts */}
        <Grid
          item
          xs={8} // Reduced to 7 columns to allow more space on the right
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: 10, // Adds some space between middle and right section
          }}
        >
          <Box sx={{ width: "100%" }}>
            <SearchBar addToCart={addToCart} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              marginTop: 1,
              marginBottom: 3,
              width: "100%",
            }}
          >
            <TopCategories />
          </Box>

          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Top Produse
          </Typography>
          <Box sx={{ width: "100%" }}>
            <CarouselProducts addToCart={addToCart} />
          </Box>
        </Grid>

        {/* Right Side - Cart */}
        <Grid
          item
          xs={2} // Adjusted to make it narrower
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

export default UserMenu;
