import { useContext } from "react";
import Cards from "../../admin-dashboard/cards";
import { AuthContext } from "../../../data/contexts/AuthContext";
import CompanyDashboard from "../company-dashboard";
import ProfessionalDashboard from "../professional-dashboard";

export const Dashboard = () => {
  const { userType } = useContext(AuthContext);

  const switchDashboardContent = () => {
    switch (userType) {
      case "admin":
        return <Cards />;
      case "company":
        return <CompanyDashboard />;
      case "professional":
        return <ProfessionalDashboard />;
      default:
        return <Cards />;
    }
  };

  return switchDashboardContent();
};
