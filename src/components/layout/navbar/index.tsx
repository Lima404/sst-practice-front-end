import "./styles.css";
import Logo from "../../../assets/navbar/LogoNav.svg";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <nav className="menu-hamburger">
        <input id="menu-hamburguer" type="checkbox" />
        <label htmlFor="menu-hamburguer">
          <div className="menu">
            <span className="hamburguer"></span>
          </div>
        </label>

        <ul className="menu-hamburguer-elements show">
          <div className="div-items-left">
            <li className="items-menu-left">
              <div>
                <img src={Logo} />
              </div>
            </li>
          </div>

          <div className="div-items-center">
            <li className="items-menu-center">
              <a>Serviços</a>
            </li>

            <li className="items-menu-center">
              <a>Sistema</a>
            </li>

            <li className="items-menu-center">
              <a>Motivações</a>
            </li>

            <li className="items-menu-center">
              <a>Contatos</a>
            </li>
          </div>

          <li className="items-menu-right">
            <a className="login-but" onClick={() => navigate("/login")}>
              Login
            </a>
          </li>

          <li className="items-menu-right">
            <a className="orc-but" href="/orcamento">
              Faça um orçamento! <FaArrowRight />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
