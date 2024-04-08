import AdminSideBar from '../../admin-dashboard/sidebar'
import './index.css'

function AdminDashboard() {
  return (
    <div className='main-admin-dashboard'>
      <AdminSideBar />
      
        <div className='hamburger-menu'>
          Hamburger Menu
        </div>
      
      <div className='content'>
        <div>
          Conteúdo
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard