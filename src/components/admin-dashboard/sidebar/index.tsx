import './index.css'
import LogoSidebar from '../../../assets/sidebar/sstLogoSidebar.svg'
import { useState } from 'react'

import { HiOutlineClipboardDocument } from "react-icons/hi2"
import { IoIosArrowDown } from "react-icons/io"

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
          <button onClick={toggleDocuments}>
            <HiOutlineClipboardDocument /> Documentos <IoIosArrowDown />
          </button>
          {showDocuments && (
            <div className='document-options'>
              <button>Opção um</button>
              <button>Opção dois</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default AdminSideBar