import HamburgerMenu from '../../admin-dashboard/hamburger-menu'
import AdminSideBar from '../../admin-dashboard/sidebar'
import './index.css'

function AdminDashboard() {
  return (
    <div className='main-admin-dashboard'>
      
      <AdminSideBar />
      
      <HamburgerMenu />
      
      <div className='content'>
        <div>
          Conteúdo
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard