import Home from "../components/pages/home";
import Login from "../components/pages/login";

export const publicRoutes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
