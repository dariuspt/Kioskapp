import OrderList from "@/components/customAccordion/OrderList";
import Loader from "@/components/loader/Loader";
import { OrdersOut, useOrders } from "@/resources/orders";
import { Grid, Paper } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import Sidebar from "../Dashboard/SideBar";

const History = () => {
  const { getProcessed, isError, isLoading } = useOrders();
  const [processedOrders, setProcessedOrders] = useState<OrdersOut[]>([]);
  const [loading, setLoading] = useState(isLoading);
  const [error, setError] = useState(isError);

  useEffect(() => {
    const fetchProcessedOrders = async () => {
      setLoading(true);
      try {
        const response = await getProcessed();
        setProcessedOrders(response);
      } catch (err) {
        console.error("Failed to fetch processed orders:", err);
        setError(true);
        enqueueSnackbar({
          variant: "error",
          message: "An error occurred while loading processed orders",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProcessedOrders();
  }, [getProcessed]);

  if (loading) return <Loader />;
  if (error) {
    return null;
  }

  return (
    <Grid container sx={{ height: "100vh", marginTop: "30px" }}>
      <Grid item xs={3}>
        <Sidebar back={true} />
      </Grid>
      <Grid xs={8}>
        <Paper elevation={7}>
          <OrderList orders={processedOrders} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default History;
