import { useContext } from "react";
import Cards from "../../admin-dashboard/cards";
import HamburgerMenu from "../../admin-dashboard/hamburger-menu";
import AdminSideBar from "../../admin-dashboard/sidebar";
import { AuthContext } from "../../../data/contexts/AuthContext";

export const Dashboard = () => {
  const { userType } = useContext(AuthContext);

  console.log(userType);

  return <Cards />;
};
