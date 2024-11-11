import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useOrders } from "@/resources/orders";
import Loader from "@/components/loader/Loader";
import { enqueueSnackbar } from "notistack";

const Orders = () => {
  const { data: orders, isLoading, isError } = useOrders();

  if (isLoading) return <Loader />;
  if (isError)
    return enqueueSnackbar({
      variant: "error",
      message: "An error occurred while loading",
    });

  return (
    <Grid container spacing={2}>
      {orders?.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            Nici o comanda
          </Typography>
        </Grid>
      ) : (
        orders?.map((order) => (
          <Grid item xs={12} sm={6} md={4} key={order.id}>
            <Card
              sx={{
                minHeight: 200, // Set a minimum height for the card
                padding: 2, // Add some padding for better visual spacing
              }}
            >
              <CardContent>
                <Typography variant="h5">Order ID: {order.id}</Typography>
                <Typography variant="body1">
                  Product ID: {order.product_id}
                </Typography>
                <Typography variant="body1">
                  Quantity: {order.quantity}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Orders;
