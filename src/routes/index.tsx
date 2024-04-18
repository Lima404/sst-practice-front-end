import { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import Home from "../components/pages/home";
import { AuthContext } from "../contexts/AuthContext";
import Login from "../components/pages/login";

export const AppRoutes = () => {
  const user = useContext(AuthContext);

  const commonRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <Navigate to="." /> },
  ];

  const routes = user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
