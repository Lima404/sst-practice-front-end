import "./index.css";
import CompaniesTable from "./table-companies";

const Companies = () => {
  return (
    <div className="main-companies-admin-dashboard">
      <div className="companies-admin-dashboard-content">
        <div className="companies-table">
          <CompaniesTable />
        </div>
      </div>
    </div>
  );
}

export default Companies;
