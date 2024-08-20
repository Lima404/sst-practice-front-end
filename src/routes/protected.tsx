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
import Dashboard from "../components/pages/dashboard";
import { FaUserCircle } from "react-icons/fa";
import SideBar from "../components/sidebar";
import UploadDocuments from "../components/pages/professional-dashboard/documents/upload-documents";
import { CreateDocuments } from "../components/pages/professional-dashboard/documents/create-documents";
import EmployeeDocuments from "../components/pages/company-dashboard/employees/employees-documents";
import { useContext, useEffect, useState } from "react";
import { api } from "../data/services/api";
import { AxiosResponse } from "axios";
import { Button, Menu, MenuItem } from "@mui/material";
import { GoSignOut } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { AuthContext } from "../data/contexts/AuthContext";
import HamburguerSideBar from "../components/hamburguerSideBar";
import EmployeesByUnitId from "../components/pages/company-dashboard/units/fetch-all-units/fetch-all-employees";
import ViewDocuments from "../components/pages/professional-dashboard/documents/view-documents";
import EmployeeDocumentsProfessionalTable from "../components/pages/professional-dashboard/documents/view-documents/view-employee-documents/view-employee-documents-professional";
import ChooseEmployee from "../components/pages/professional-dashboard/documents/choose";

interface ProfileProps {
  switchedUser: {
    admin: {
      name: string;
    };
    company: {
      corporate_reason: string;
    };
    professional: {
      name: string;
    };
  };
  user: {
    type: string;
  };
}

const App = () => {
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { signOut } = useContext(AuthContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut();
  };

  const renderUserName = () => {
    switch (profile?.user.type) {
      case "admin":
        return profile.switchedUser.admin.name;
      case "company":
        return profile.switchedUser.company.corporate_reason;
      case "professional":
        return profile.switchedUser.professional.name;
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response: AxiosResponse<ProfileProps> = await api.get("/profile");
        setProfile(response.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="main-admin-dashboard">
      <SideBar />
      <HamburguerSideBar />

      <div className="admin-dashboard-content">
        <div className="content-header">
          <p>{renderUserName()}</p>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <FaUserCircle size={30} color="#157a8c" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem className="itemMenu">
                <IoIosSettings />
                Configurações
              </MenuItem>
              <MenuItem className="itemMenu" onClick={handleSignOut}>
                <GoSignOut />
                Sair
              </MenuItem>
            </Menu>
          </div>
        </div>
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
        path: "employees/:unitId",
        element: <EmployeesByUnitId />,
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
        path: "documents/create/:employeeId",
        element: <CreateDocuments />,
      },
      {
        path: "documents/view",
        element: <ViewDocuments />,
      },
      {
        path: "documents/view/:employeeId",
        element: <EmployeeDocumentsProfessionalTable />,
      },
      {
        path: "documents/choose",
        element: <ChooseEmployee />,
      },
      {
        path: "*",
        element: <Navigate to="." />,
      },
    ],
  },
];
