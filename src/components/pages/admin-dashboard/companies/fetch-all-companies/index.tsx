import HamburgerMenu from '../../../../admin-dashboard/hamburger-menu'
import AdminSideBar from '../../../../admin-dashboard/sidebar'
import './index.css'
import CompaniesTable from './table-companies'

const Companies = () => {
  return (
    <div className="main-companies-admin-dashboard">

      <AdminSideBar />
      <HamburgerMenu />

      <div className='companies-admin-dashboard-content'>
        <div className='companies-table'>
          <CompaniesTable />
        </div>
      </div>
    </div>
  )
}

export default Companies