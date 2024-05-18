import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/index.tsx";
import { AuthProvider } from "./data/contexts/AuthContext.tsx";
import "react-toastify/dist/ReactToastify.css";
/* import Home from "./components/pages/home/index.tsx";
import Login from "./components/pages/login/index.tsx";
import AdminDashboard from "./components/pages/admin-dashboard/index.tsx";
import Companies from "./components/pages/admin-dashboard/companies/fetch-all-companies/index.tsx";
import CreateCompany from "./components/pages/admin-dashboard/companies/create-companie/index.tsx";
import Professionals from "./components/pages/admin-dashboard/professionals/fetch-all-professionals/index.tsx";
import CreateProfessional from "./components/pages/admin-dashboard/professionals/create-professional/index.tsx";
import Admins from "./components/pages/admin-dashboard/admin/fetch-all-admins/index.tsx";
import CreateAdmin from "./components/pages/admin-dashboard/admin/create-admin/index.tsx"; */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
