import { useEffect, useState } from "react";
import { api } from "../../data/services/api";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { destroyCookie } from "nookies";
import HamburgerMenu from "../admin-dashboard/hamburger-menu";
import CompanyHamburgerMenu from "../company-components/hamburger-menu";

interface ProfileProps {
  user: {
    type: string;
  };
}

const HamburguerSideBar = () => {
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
        return <HamburgerMenu />;
      case "company":
        return <CompanyHamburgerMenu />;
      /* case "professional":
        return <ProfessionalSideBar />; */
      default:
        return <></>;
    }
  };

  return switchSidebarContent();
};

export default HamburguerSideBar;
