import { useContext } from "react";
import Cards from "../../admin-dashboard/cards";
import { AuthContext } from "../../../data/contexts/AuthContext";
import CompanyDashboard from "../company-dashboard";
import { CreateDocuments } from "../professional-dashboard/documents/create-documents";

export const Dashboard = () => {
  const { userType } = useContext(AuthContext);

  const switchDashboardContent = () => {
    switch (userType) {
      case "admin":
        return <Cards />;
      case "company":
        return <CompanyDashboard />;
      case "professional":
        return <CreateDocuments />;
      default:
        return <Cards />;
    }
  };

  return switchDashboardContent();
};
