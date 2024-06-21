import "./index.css";
import { useState } from "react";

import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdDocument,
} from "react-icons/io";

import { useNavigate } from "react-router-dom";

const ProfessionalSideBar = () => {
  const [showDocuments, setShowDocuments] = useState(false);

  const navigate = useNavigate();

  const toggleDocuments = () => {
    setShowDocuments(!showDocuments);
  };

  return (
    <div className="sidebar-buttons">
      <div className="document-select">
        <button className="button-select" onClick={toggleDocuments}>
          <div className="button-select-intern">
            <div className="left-button-position">
              <IoMdDocument /> Documentos
            </div>
            <div className="right-button-position">
              <IoIosArrowDown />
            </div>
          </div>
        </button>
        {showDocuments && (
          <div className="document-options">
            <a onClick={() => navigate("/documents/create")}>
              <button className="button-select">
                <div className="button-select-intern-option">
                  <div className="left-button-position">
                    Cadastrar documentos
                  </div>
                  <div className="right-button-position">
                    <IoIosArrowForward />
                  </div>
                </div>
              </button>
            </a>
            <a onClick={() => navigate("/documents/upload/")}>
              <button className="button-select">
                <div className="button-select-intern-option">
                  <div className="left-button-position">Enviar documento</div>
                  <div className="right-button-position">
                    <IoIosArrowForward />
                  </div>
                </div>
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalSideBar;
