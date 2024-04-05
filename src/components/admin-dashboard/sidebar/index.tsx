import './index.css'
import LogoSidebar from '../../../assets/sidebar/sstLogoSidebar.svg'
import { useState } from 'react'

import { HiOutlineClipboardDocument } from "react-icons/hi2"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"

const AdminSideBar = () => {
  const [showDocuments, setShowDocuments] = useState(false);

  const toggleDocuments = () => {
    setShowDocuments(!showDocuments);
  }

  return (
    <nav className='sidebar'>
      <div className='sidebar-content'>
        <div className='sidebar-logo'>
          <img src={LogoSidebar} />
        </div>

        <div className='document-select'>
          <button className='button-select' onClick={toggleDocuments}>
            <div className='button-select-intern'>
              <div className='left-button-position'><HiOutlineClipboardDocument /> Documentos</div>
              <div className='right-button-position'><IoIosArrowDown /></div>
            </div>
          </button>
          {showDocuments && (
            <div className='document-options'>
              <button className='button-select'>
                <div className='button-select-intern-option'>
                  <div className='left-button-position'>Unidade 1</div>
                  <div className='right-button-position'><IoIosArrowForward /></div>
                </div>
              </button>
            </div>
          )}
        </div>
        
      </div>
    </nav>
  )
}

export default AdminSideBar