import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminDashboard from "../components/pages/admin-dashboard";
import Companies from "../components/pages/admin-dashboard/companies/fetch-all-companies";
import CreateCompany from "../components/pages/admin-dashboard/companies/create-company";
import Professionals from "../components/pages/admin-dashboard/professionals/fetch-all-professionals";
import CreateProfessional from "../components/pages/admin-dashboard/professionals/create-professional";
import Admins from "../components/pages/admin-dashboard/admin/fetch-all-admins";
import CreateAdmin from "../components/pages/admin-dashboard/admin/create-admin";

const App = () => {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Outlet />
    </Suspense>
  );
};

export const protectedRoutes = [
  {
    path: "/*",
    element: <App />,
    children: [
      {
        path: "admin",
        element: <AdminDashboard />,
      },
      {
        path: "companies",
        element: <Companies />,
      },
      {
        path: "companies/create",
        element: <CreateCompany />,
      },
      {
        path: "professionals",
        element: <Professionals />,
      },
      {
        path: "professionals/create",
        element: <CreateProfessional />,
      },
      {
        path: "admins",
        element: <Admins />,
      },
      {
        path: "admins/create",
        element: <CreateAdmin />,
      },
      {
        path: "*",
        element: <Navigate to="." />,
      },
    ],
  },
];
