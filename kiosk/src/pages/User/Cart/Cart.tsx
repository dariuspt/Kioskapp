import { RemoveCircleOutline } from "@mui/icons-material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

const Cart = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  console.log(totalPrice);

  const increaseQuantity = (item) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  // Function to handle decreasing the quantity
  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      // Remove the item if quantity is 1 and the user tries to decrease further
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      // Otherwise, just decrease the quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  return (
    <Box sx={{ width: 400, padding: 2}}>
      <Typography variant="h5" sx={{ marginBottom: 2, marginTop: 2, }}>
        Cos de cumparaturi
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Cosul este gol</Typography>
      ) : (
        cartItems.map((item) => (
          <Card
            key={item.id}
            sx={{
              marginBottom: 2,
              padding: 2,
              boxShadow: 3, // Add shadow for shading
              borderRadius: 2, // Rounded corners
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 100, height: 150, objectFit: "contain" }} // Increase the size of the image
                image={item.image_url}
                alt={item.title}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "green", fontSize: 20 }}
                >
                  {item.price} Lei
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                >
                  {/* Decrease Quantity Button */}
                  <IconButton
                    size="small"
                    onClick={() => decreaseQuantity(item)}
                  >
                    <RemoveCircleOutline />
                  </IconButton>

                  <Typography
                    sx={{
                      marginLeft: 1,
                      marginRight: 1,
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                    }}
                  >
                    {item.quantity}
                  </Typography>

                  {/* Increase Quantity Button */}
                  <IconButton
                    size="small"
                    onClick={() => increaseQuantity(item)}
                  >
                    <AddCircleOutlineOutlinedIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Box>
          </Card>
        ))
      )}
      {cartItems.length !== 0 ? (
        <Typography>Total: {totalPrice.toFixed(2)} Lei</Typography>
      ) : null}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "green", // Green background
          color: "white",
          borderRadius: "20px", // Rounded button
          width: "100%",
          marginTop: 2,
          "&:hover": {
            backgroundColor: "darkgreen",
          },
          display: "flex",
          alignItems: "center", // Ensure the text and icon are aligned vertically
          justifyContent: "center", // Center text and icon in the button
        }}
      >
        Adaugă
        <AddShoppingCartIcon sx={{ marginLeft: 1 }} />{" "}
        {/* Adds spacing between text and icon */}
      </Button>
    </Box>
  );
};

export default Cart;
