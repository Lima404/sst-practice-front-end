import CompanySideBar from "../../../../company-components/sidebar";
import UnitsTable from "./table-units";

const Units = () => {
  return (
    <div className="main-admins-admin-dashboard">

      <CompanySideBar />

      <div className='admins-admin-dashboard-content'>
        <div className='admins-table'>
          <UnitsTable />
        </div>
      </div>
    </div>
  )
}

export default Units;