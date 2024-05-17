import "./index.css";
import { useContext, useState } from "react";

import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosSettings,
  IoMdDocument,
} from "react-icons/io";
import { GoSignOut } from "react-icons/go";
import { FaRegBuilding } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../data/contexts/AuthContext";

const ProfessionalSideBar = () => {
  const [showCompanies, setShowCompanies] = useState(false);
  const [showProfessionals, setShowProfessionals] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleCompanies = () => {
    setShowCompanies(!showCompanies);
  };

  const toggleProfessionals = () => {
    setShowProfessionals(!showProfessionals);
  };

  const toggleDocuments = () => {
    setShowDocuments(!showDocuments);
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="sidebar-buttons">
      <div className="document-select">
        <button className="button-select" onClick={toggleCompanies}>
          <div className="button-select-intern">
            <div className="left-button-position">
              <FaRegBuilding /> Exames
            </div>
            <div className="right-button-position">
              <IoIosArrowDown />
            </div>
          </div>
        </button>
        {showCompanies && (
          <div className="document-options">
            <a onClick={() => navigate("/employees/create")}>
              <button className="button-select">
                <div className="button-select-intern-option">
                  <div className="left-button-position">Cadastrar exame</div>
                  <div className="right-button-position">
                    <IoIosArrowForward />
                  </div>
                </div>
              </button>
            </a>
            <a onClick={() => navigate("/employees")}>
              <button className="button-select">
                <div className="button-select-intern-option">
                  <div className="left-button-position">Visualizar exames</div>
                  <div className="right-button-position">
                    <IoIosArrowForward />
                  </div>
                </div>
              </button>
            </a>
          </div>
        )}
      </div>

      <div className="document-select">
        <button className="button-select" onClick={toggleProfessionals}>
          <div className="button-select-intern">
            <div className="left-button-position">
              <FaUserDoctor /> ASO
            </div>
            <div className="right-button-position">
              <IoIosArrowDown />
            </div>
          </div>
        </button>
        {showProfessionals && (
          <div className="document-options">
            <a onClick={() => navigate("/units/create")}>
              <button className="button-select">
                <div className="button-select-intern-option">
                  <div className="left-button-position">Cadastrar ASO</div>
                  <div className="right-button-position">
                    <IoIosArrowForward />
                  </div>
                </div>
              </button>
            </a>
            <a onClick={() => navigate("/asos")}>
              <button className="button-select">
                <div className="button-select-intern-option">
                  <div className="left-button-position">Visualizar ASO</div>
                  <div className="right-button-position">
                    <IoIosArrowForward />
                  </div>
                </div>
              </button>
            </a>
          </div>
        )}
      </div>

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
                <a onClick={() => navigate("/documents/upload/")}>
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
                <a onClick={() => navigate("/admins")}>
                  <button className="button-select">
                    <div className="button-select-intern-option">
                      <div className="left-button-position">
                        Visualizar documentos
                      </div>
                      <div className="right-button-position">
                        <IoIosArrowForward />
                      </div>
                    </div>
                  </button>
                </a>
              </div>
            )}
          </div>

      <div className="profile-options">
        <div className="document-select">
          <button className="button-select">
            <div className="button-select-intern">
              <div className="left-button-position">
                <IoIosSettings /> Configurações
              </div>
            </div>
          </button>
        </div>

        <div className="document-select">
          <button className="button-select" onClick={handleSignOut}>
            <div className="button-select-intern">
              <div className="left-button-position">
                <GoSignOut /> Sair
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSideBar;
