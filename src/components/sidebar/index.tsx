import "./index.css";
import LogoSidebar from "../../assets/sidebar/sstLogoSidebar.svg";
import { useContext } from "react";
import { AuthContext } from "../../data/contexts/AuthContext";
import { AdminSidebar } from "./components/AdminSidebar";
import CompanySideBar from "../company-components/sidebar";
import ProfessionalSideBar from "../professional-components/sidebar";

const SideBar = () => {
  const { userType } = useContext(AuthContext);

  console.log(userType);

  const switchSidebarContent = () => {
    switch (userType) {
      case "admin":
        return <AdminSidebar />;
      case "company":
        return <CompanySideBar />;
      case "professional":
        return <ProfessionalSideBar />;
      default:
        return <AdminSidebar />;
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
