import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { RemoveCircleOutline } from "@mui/icons-material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "./CartContex"; // Import useCart hook
import { useState } from "react";
import CartSummaryModal from "@/components/modal/Modal";
import { OrdersService } from "@/resources/orders";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, clearCart } =
    useCart(); // Access cart state and functions
  const [isModalOpen, setModalOpen] = useState(false); // For cart summary modal
  const [isSaleCompletedModalOpen, setSaleCompletedModalOpen] = useState(false); // For sale completed modal

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleConfirm = async () => {
    try {
      // Loop through cartItems and create an order for each item
      for (const item of cartItems) {
        const orderData = {
          products: [
            {
              product_id: item.id,
              quantity: item.quantity,
            },
          ],
        };
        await OrdersService.createOrder(orderData);
      }

      // Clear the cart, close modal, and show sale confirmation
      clearCart(); // Clear the cart
      setModalOpen(false); // Close the cart summary modal
      setSaleCompletedModalOpen(true); // Open the sale completed modal
    } catch (error) {
      console.error("Failed to create order", error);
      // Handle the error appropriately (you can show an alert or a snackbar here)
    }
  };

  return (
    <Box sx={{ width: 400, padding: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 2, marginTop: 2 }}>
        Coș de cumpărături
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Coșul este gol</Typography>
      ) : (
        cartItems.map((item) => (
          <Card
            key={item.id}
            sx={{
              marginBottom: 2,
              padding: 2,
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 100, height: 150, objectFit: "contain" }}
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
      {cartItems.length !== 0 && (
        <Typography>Total: {totalPrice.toFixed(2)} Lei</Typography>
      )}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "green",
          color: "white",
          borderRadius: "20px",
          width: "100%",
          marginTop: 2,
          "&:hover": {
            backgroundColor: "darkgreen",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => setModalOpen(true)} // Open the cart summary modal
        disabled={cartItems.length === 0} // Disable if cart is empty
      >
        Adaugă
        <AddShoppingCartIcon sx={{ marginLeft: 1 }} />
      </Button>

      {/* Cart Summary Modal */}
      <CartSummaryModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        cartItem={cartItems}
        totalPrice={totalPrice}
        onConfirm={handleConfirm}
      />

      {/* Sale Completed Modal */}
      <Modal
        open={isSaleCompletedModalOpen}
        onClose={() => setSaleCompletedModalOpen(false)}
        aria-labelledby="sale-completed-title"
        aria-describedby="sale-completed-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography
            id="sale-completed-title"
            variant="h6"
            sx={{ marginBottom: 2 }}
          >
            Vânzare efectuată
          </Typography>
          <Button
            variant="contained"
            onClick={() => setSaleCompletedModalOpen(false)}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Cart;
