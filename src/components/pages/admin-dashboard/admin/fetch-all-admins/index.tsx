import HamburgerMenu from "../../../../admin-dashboard/hamburger-menu"
import AdminSideBar from "../../../../admin-dashboard/sidebar"
import "./index.css"
import AdminsTable from "./table-admin"

const Admins = () => {
  return (
    <div className="main-admins-admin-dashboard">

      <AdminSideBar />
      <HamburgerMenu />

      <div className='admins-admin-dashboard-content'>
        <div className='admins-table'>
          <AdminsTable />
        </div>
      </div>
    </div>
  )
}

export default Admins