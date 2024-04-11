import './index.css'

import { RiAdminFill } from "react-icons/ri"
import { FaUserDoctor } from "react-icons/fa6"
import { FaBuilding  } from "react-icons/fa"

const Cards = () => {
  return (
    <div className="main-cards-admin-dashboard">
      <div className="card-admin-dashboard">
        <div className="content-card-admin-dashboard">
          <div>
            Administradores
          </div>
          <div>
            <RiAdminFill size={30}/>
          </div>
        </div>
        <div className='number-card-admin-dashboard'>
          <div className='number-card-content'>
            <span>10</span>
          </div>
        </div>
      </div>

      <div className="card-admin-dashboard">
        <div className="content-card-admin-dashboard">
          <div>
            Profissionais de Saúde
          </div>
          <div>
            <FaUserDoctor size={30}/>
          </div>
        </div>
        <div className='number-card-admin-dashboard'>
          <div className='number-card-content'>
            <span>10</span>
          </div>
        </div>
      </div>

      <div className="card-admin-dashboard">
        <div className="content-card-admin-dashboard">
          <div>
            Empresas
          </div>
          <div>
            <FaBuilding size={30}/>
          </div>
        </div>
        <div className='number-card-admin-dashboard'>
          <div className='number-card-content'>
            <span>10</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cards