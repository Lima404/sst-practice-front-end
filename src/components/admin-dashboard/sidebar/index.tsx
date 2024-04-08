import './index.css'
import LogoSidebar from '../../../assets/sidebar/sstLogoSidebar.svg'
import { useState } from 'react'

import { IoIosArrowDown, IoIosArrowForward, IoIosSettings, IoIosMenu } from "react-icons/io"
import { GoSignOut } from "react-icons/go"
import { FaRegBuilding } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { RiAdminFill } from "react-icons/ri"

const AdminSideBar = () => {
  const [showCompanies, setShowCompanies] = useState(false)
  const [showProfessionals, setShowProfessionals] = useState(false)
  const [showAdmins, setShowAdmins] = useState(false)

  const toggleCompanies = () => {
    setShowCompanies(!showCompanies)
  }

  const toggleProfessionals = () => {
    setShowProfessionals(!showProfessionals)
  }

  const toggleAdmins = () => {
    setShowAdmins(!showAdmins)
  }

  return (
    <nav id="sidebar" className='sidebar'>
      <div className='sidebar-content'>
        <div className='sidebar-logo'>
          <img src={LogoSidebar} />
        </div>

        <div className='sidebar-buttons'>
          <div className='document-select'>
            <button className="button-select" onClick={toggleCompanies}>
              <div className='button-select-intern'>
                <div className='left-button-position'><FaRegBuilding /> Empresas</div>
                <div className='right-button-position'><IoIosArrowDown /></div>
              </div>
            </button>
            {showCompanies && (
              <div className='document-options'>
                <button className='button-select'>
                  <div className='button-select-intern-option'>
                    <div className='left-button-position'>Cadastrar empresa</div>
                    <div className='right-button-position'><IoIosArrowForward /></div>
                  </div>
                </button>
                <button className='button-select'>
                  <div className='button-select-intern-option'>
                    <div className='left-button-position'>Visualizar empresas</div>
                    <div className='right-button-position'><IoIosArrowForward /></div>
                  </div>
                </button>
              </div>
            )}
          </div>

          <div className='document-select'>
            <button className="button-select" onClick={toggleProfessionals}>
              <div className='button-select-intern'>
                <div className='left-button-position'><FaUserDoctor /> Profissionais</div>
                <div className='right-button-position'><IoIosArrowDown /></div>
              </div>
            </button>
            {showProfessionals && (
              <div className='document-options'>
                <button className='button-select'>
                  <div className='button-select-intern-option'>
                    <div className='left-button-position'>Cadastrar profissionais</div>
                    <div className='right-button-position'><IoIosArrowForward /></div>
                  </div>
                </button>
                <button className='button-select'>
                  <div className='button-select-intern-option'>
                    <div className='left-button-position'>Visualizar profissionais</div>
                    <div className='right-button-position'><IoIosArrowForward /></div>
                  </div>
                </button>
              </div>
            )}
          </div>

          <div className='document-select'>
            <button className="button-select" onClick={toggleAdmins}>
              <div className='button-select-intern'>
                <div className='left-button-position'><RiAdminFill /> Administradores</div>
                <div className='right-button-position'><IoIosArrowDown /></div>
              </div>
            </button>
            {showAdmins && (
              <div className='document-options'>
                <button className='button-select'>
                  <div className='button-select-intern-option'>
                    <div className='left-button-position'>Cadastrar administradores</div>
                    <div className='right-button-position'><IoIosArrowForward /></div>
                  </div>
                </button>
                <button className='button-select'>
                  <div className='button-select-intern-option'>
                    <div className='left-button-position'>Visualizar administradores</div>
                    <div className='right-button-position'><IoIosArrowForward /></div>
                  </div>
                </button>
              </div>
            )}
          </div>

          <div className='profile-options'>
            <div className='document-select'>
              <button className="button-select">
                <div className='button-select-intern'>
                  <div className='left-button-position'><IoIosSettings /> Configurações</div>
                </div>
              </button>
            </div>

            <div className='document-select'>
              <button className="button-select">
                <div className='button-select-intern'>
                  <div className='left-button-position'><GoSignOut /> Sair</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default AdminSideBar