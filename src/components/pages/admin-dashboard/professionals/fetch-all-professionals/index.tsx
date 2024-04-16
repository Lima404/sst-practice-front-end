import HamburgerMenu from "../../../../admin-dashboard/hamburger-menu"
import AdminSideBar from "../../../../admin-dashboard/sidebar"
import "./index.css"
import ProfessionalsTable from "./table-professionals"

const Professionals = () => {
  return (
    <div className="main-professionals-admin-dashboard">

      <AdminSideBar />
      <HamburgerMenu />

      <div className='professionals-admin-dashboard-content'>
        <div className='professionals-table'>
          <ProfessionalsTable />
        </div>
      </div>
    </div>
  )
}

export default Professionals