import OrderMenu from "../../pages/Admin/OrderDashboard/App";
import {Routes } from "../types/routes";

const OrderDashboard: Routes = [
  {
    path: "/admin/menu/orders",
    element: <OrderMenu />, 
  },
];

export default OrderDashboard;
