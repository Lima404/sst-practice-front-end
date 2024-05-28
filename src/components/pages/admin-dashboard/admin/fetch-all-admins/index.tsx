import "./index.css";
import AdminsTable from "./table-admin";

const Admins = () => {
  return (
    <div className="main-admins-admin-dashboard">
      <div className="admins-admin-dashboard-content">
        <div className="admins-table">
          <AdminsTable />
        </div>
      </div>
    </div>
  );
};

export default Admins;
