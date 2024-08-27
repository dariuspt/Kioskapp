import Admin_Routes from "./Admin_Routes";
import Setup from "../../pages/Setup";
import { Routes } from "../types/routes";
import User_Routes from "./User_Routes";
import OrderDashboard from "./Orders_Routes";

export const SetupRoute: Routes = [
  {
    path: "/",
    element: <Setup />,
  },
];

export const mainRoutes: Routes = [
  ...SetupRoute,
  ...Admin_Routes,
  ...User_Routes,
  ...OrderDashboard,
];
