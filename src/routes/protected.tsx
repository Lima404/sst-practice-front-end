import { Navigate, Outlet } from "react-router-dom";
import AdminDashboard from "../components/pages/admin-dashboard";
import Companies from "../components/pages/admin-dashboard/companies/fetch-all-companies";
import CreateCompany from "../components/pages/admin-dashboard/companies/create-company";
import Professionals from "../components/pages/admin-dashboard/professionals/fetch-all-professionals";
import CreateProfessional from "../components/pages/admin-dashboard/professionals/create-professional";
import Admins from "../components/pages/admin-dashboard/admin/fetch-all-admins";
import CreateAdmin from "../components/pages/admin-dashboard/admin/create-admin";
import CompanyDashboard from "../components/pages/company-dashboard";
import ProfessionalDashboard from "../components/pages/professional-dashboard";
import CreateUnit from "../components/pages/company-dashboard/units/create-unit";
import Units from "../components/pages/company-dashboard/units/fetch-all-units";
import CreateEmployees from "../components/pages/company-dashboard/employees/create-employees";
import Employees from "../components/pages/company-dashboard/employees/fetch-all-employees";
import { Dashboard } from "../components/pages/dashboard";
import HamburgerMenu from "../components/admin-dashboard/hamburger-menu";
import SideBar from "../components/sidebar";
import UploadDocuments from "../components/pages/professional-dashboard/documents/upload-documents";
import { CreateDocuments } from "../components/pages/professional-dashboard/documents/create-documents";
import EmployeeDocuments from "../components/pages/company-dashboard/employees/employees-documents";

const App = () => {
  return (
    <div className="main-admin-dashboard">
      <SideBar />
      <HamburgerMenu />

      <div className="admin-dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export const protectedRoutes = [
  {
    path: "/*",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
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
        path: "company",
        element: <CompanyDashboard />,
      },
      {
        path: "units/create",
        element: <CreateUnit />,
      },
      {
        path: "units",
        element: <Units />,
      },
      {
        path: "employees/create",
        element: <CreateEmployees />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "employee/documents/:employeeId",
        element: <EmployeeDocuments />,
      },      
      {
        path: "professional",
        element: <ProfessionalDashboard />,
      },
      {
        path: "documents/upload",
        element: <UploadDocuments />,
      },
      {
         path: "documents/create",
         element: <CreateDocuments/>,
       },
      {
        path: "*",
        element: <Navigate to="." />,
      },
    ],
  },
];
