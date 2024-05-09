import CompanySideBar from "../../../../company-components/sidebar";
import EmployeesTable from "./table-employee";

const Employees = () => {
  return (
    <div className="main-admins-admin-dashboard">

      <CompanySideBar />

      <div className='admins-admin-dashboard-content'>
        <div className='admins-table'>
          <EmployeesTable />
        </div>
      </div>
    </div>
  )
}

export default Employees;