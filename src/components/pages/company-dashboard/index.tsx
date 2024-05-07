import CompanySideBar from '../../company-components/sidebar';
import './index.css'

function CompanyDashboard() {
  return (
    <div className="main-admin-dashboard">

      <CompanySideBar />
      
      <div className='admin-dashboard-content'>
        hello company
      </div>
    </div>
  )
}

export default CompanyDashboard;