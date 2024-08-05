import { useEffect, useState } from "react";
import Cards from "../../admin-dashboard/cards";
import CompanyDashboard from "../company-dashboard";
import { api } from "../../../data/services/api";
import { AxiosResponse } from "axios";
import ChooseEmployee from "../professional-dashboard/documents/choose";
interface ProfileProps {
  user: {
    type: string;
  };
}

const Dashboard = () => {
  const [profile, setProfile] = useState<ProfileProps | null>(null);

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

  const switchDashboardContent = () => {
    switch (profile?.user.type) {
      case "admin":
        return <Cards />;
      case "company":
        return <CompanyDashboard />;
      case "professional":
        return <ChooseEmployee />;
      default:
        return <></>;
    }
  };

  return <div>{switchDashboardContent()}</div>;
};

export default Dashboard;
