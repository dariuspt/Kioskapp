import Admin_Routes from "./Admin_Routes";
import { Routes } from "../types/routes";
import User_Routes from "./User_Routes";
import StartingPage from "@/pages/StartingPage";
import SignIn from "@/pages/SignIn/SignIn";


export const FirstPages: Routes = [
  {
    path: "/",
    element: <StartingPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
];

export const mainRoutes: Routes = [
  ...FirstPages,
  ...Admin_Routes,
  ...User_Routes,
];
