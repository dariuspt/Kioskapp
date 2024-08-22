import AdminMenu from "../../pages/Admin/Menu/AdminMenu";
import {Routes } from "../types/routes";

const Admin_Routes: Routes = [
  {
    path: "/admin/menu",
    element: <AdminMenu />, 
  },
];

export default Admin_Routes;
