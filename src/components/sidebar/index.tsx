import "./index.css";
import LogoSidebar from "../../assets/sidebar/sstLogoSidebar.svg";
import { useEffect, useState } from "react";
import { AdminSidebar } from "./components/AdminSidebar";
import CompanySideBar from "../company-components/sidebar";
import ProfessionalSideBar from "../professional-components/sidebar";
import { api } from "../../data/services/api";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { destroyCookie } from "nookies";

interface ProfileProps {
  user: {
    type: string;
  };
}

const SideBar = () => {
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response: AxiosResponse<ProfileProps> = await api.get("/profile");
        setProfile(response.data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          if (error.message === "Network Error") {
            destroyCookie(null, "sstAuth.token");
            localStorage.setItem("@sst-user", "");
            navigate("/login");
            return;
          }
          console.error("Failed to fetch profile:", error);
        } else {
          console.error("An unexpected error occurred:", error);
        }
      }
    };

    fetchProfile();
  }, []);

  const switchSidebarContent = () => {
    switch (profile?.user.type) {
      case "admin":
        return <AdminSidebar />;
      case "company":
        return <CompanySideBar />;
      case "professional":
        return <ProfessionalSideBar />;
      default:
        return <></>;
    }
  };

  return (
    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-logo">
          <img src={LogoSidebar} />
        </div>
        {switchSidebarContent()}
      </div>
    </nav>
  );
};

export default SideBar;
