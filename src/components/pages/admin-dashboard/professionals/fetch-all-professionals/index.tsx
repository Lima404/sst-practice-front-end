import "./index.css";
import ProfessionalsTable from "./table-professionals";

const Professionals = () => {
  return (
    <div className="main-professionals-admin-dashboard">
      <div className="professionals-admin-dashboard-content">
        <div className="professionals-table">
          <ProfessionalsTable />
        </div>
      </div>
    </div>
  );
};

export default Professionals;
