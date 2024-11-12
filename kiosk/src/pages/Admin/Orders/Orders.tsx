import { useOrders } from "@/resources/orders";
import Loader from "@/components/loader/Loader";
import { enqueueSnackbar } from "notistack";
import OrderList from "@/components/customAccordion/OrderList";

const Orders = () => {
  const { data: orders, isLoading, isError } = useOrders();

  if (isLoading) return <Loader />;
  if (isError) {
    enqueueSnackbar({
      variant: "error",
      message: "An error occurred while loading",
    });
    return null;
  }

  return <OrderList orders={orders} />;
};

export default Orders;
