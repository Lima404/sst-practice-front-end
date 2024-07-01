import { useParams } from "react-router-dom";
import EmployeesTable from "../fetch-all-employees/table-employee";

const EmployeesByUnitId = () => {
  const { unitId } = useParams();

  return (
    <div className="main-admins-admin-dashboard">
      <div className="admins-admin-dashboard-content">
        <div className="admins-table">
          <EmployeesTable unitId={unitId ?? ""} />
        </div>
      </div>
    </div>
  );
};

export default EmployeesByUnitId;
