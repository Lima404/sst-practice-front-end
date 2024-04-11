import Cards from '../../admin-dashboard/cards'
import HamburgerMenu from '../../admin-dashboard/hamburger-menu'
import AdminSideBar from '../../admin-dashboard/sidebar'
import './index.css'

function AdminDashboard() {
  return (
    <div className='main-admin-dashboard'>
      
      <AdminSideBar />
      
      <HamburgerMenu />
      
      <div className='content'>
        <Cards />
      </div>
    </div>
  )
}

export default AdminDashboard