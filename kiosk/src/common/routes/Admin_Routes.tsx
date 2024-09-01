
import Products from "@/pages/Admin/Products/Products";
import { Routes } from "../types/routes";
import AdminMenu from "@/pages/Admin/AdminMenu";
import Orders from "@/pages/Admin/Orders/Orders";

const Admin_Routes: Routes = [
  {
    path: "/admin",
    element: <AdminMenu />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
];

export default Admin_Routes;
