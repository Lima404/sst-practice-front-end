import "./index.css";
import { useState } from "react";

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { FaUserDoctor } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CompanySideBar = () => {
  const [showCompanies, setShowCompanies] = useState(false);
  const [showProfessionals, setShowProfessionals] = useState(false);
  const navigate = useNavigate();

  const toggleCompanies = () => {
    setShowCompanies(!showCompanies);
  };

  const toggleProfessionals = () => {
    setShowProfessionals(!showProfessionals);
  };

  return (
    <div className="sidebar-buttons">
      <div className="document-select">
        <button
          className="button-select"
          onClick={() => navigate("/dashboard")}
        >
          <div className="button-select-intern">
            <div className="left-button-position">
              <RxDashboard /> Dashboard
            </div>
          </div>
        </button>

        <div className="document-select">
          <button className="button-select" onClick={toggleProfessionals}>
            <div className="button-select-intern">
              <div className="left-button-position">
                <FaUserDoctor /> Unidades
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
                    <div className="left-button-position">
                      Cadastrar unidade
                    </div>
                    <div className="right-button-position">
                      <IoIosArrowForward />
                    </div>
                  </div>
                </button>
              </a>
              <a onClick={() => navigate("/units")}>
                <button className="button-select">
                  <div className="button-select-intern-option">
                    <div className="left-button-position">
                      Visualizar unidades
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

        <button className="button-select" onClick={toggleCompanies}>
          <div className="button-select-intern">
            <div className="left-button-position">
              <FaRegBuilding /> Empregados
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
                  <div className="left-button-position">
                    Cadastrar empregado
                  </div>
                  <div className="right-button-position">
                    <IoIosArrowForward />
                  </div>
                </div>
              </button>
            </a>
            <a onClick={() => navigate("/employees")}>
              <button className="button-select">
                <div className="button-select-intern-option">
                  <div className="left-button-position">
                    Visualizar empregados
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
    </div>
  );
};

export default CompanySideBar;
