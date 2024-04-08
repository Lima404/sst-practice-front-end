import './index.css'
import LogoSidebar from '../../../assets/sidebar/sstLogoSidebar.svg'
import { useState } from 'react'

import { HiOutlineClipboardDocument } from "react-icons/hi2"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import { GoSignOut } from "react-icons/go"
import { FaRegBuilding } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { RiAdminFill } from "react-icons/ri"

const AdminSideBar = () => {
  const [showCompanies, setShowCompanies] = useState(false)
  const [showProfessionals, setShowProfessionals] = useState(false)
  const [showAdmins, setShowAdmins] = useState(false)
  const [selectedToggle, setSelectedToggle] = useState<string | null>(null)

  const toggleCompanies = () => {
    setShowCompanies(!showCompanies)
    setSelectedToggle(selectedToggle === "companies" ? null : "companies")
  }

  const toggleProfessionals = () => {
    setShowProfessionals(!showProfessionals)
    setSelectedToggle(selectedToggle === "professionals" ? null : "professionals")
  }

  const toggleAdmins = () => {
    setShowAdmins(!showAdmins)
    setSelectedToggle(selectedToggle === "admins" ? null : "admins")
  }

  return (
    <nav className='sidebar'>
      <div className='sidebar-content'>
        <div className='sidebar-logo'>
          <img src={LogoSidebar} />
        </div>

        <div className='sidebar-buttons'>
          <div className='document-select'>
            <button className={`button-select document-select ${selectedToggle === 'companies' ? 'selected' : ''}`} onClick={toggleCompanies}>
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
            <button className={`button-select document-select ${selectedToggle === 'professionals' ? 'selected' : ''}`} onClick={toggleProfessionals}>
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
            <button className={`button-select document-select ${selectedToggle === 'admins' ? 'selected' : ''}`} onClick={toggleAdmins}>
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

          <div className='document-select'>
            <button className="button-select sign-out">
              <div className='button-select-intern'>
                <div className='left-button-position'><GoSignOut /> Sair</div>
              </div>
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default AdminSideBar