import './styles.css'
import Logo from '../../../assets/navbar/LogoNav.svg'
import { FaArrowRight } from 'react-icons/fa6'

function Navbar() {

    return (
        <div className='header'>
            <nav className='menu-hamburger'>
                <input
                    id="menu-hamburguer"
                    type="checkbox"
                />
                <label htmlFor="menu-hamburguer">
                    <div className="menu">
                        <span className="hamburguer"></span>
                    </div>
                </label>

                <ul className="menu-hamburguer-elements show">
                    <li>
                        <div>
                            <img src={Logo} />
                        </div>
                    </li>

                    <li>
                        <a className='items-menu' href="#">Soluções</a>
                    </li>

                    <li>
                        <a className='items-menu' href="#">Contato</a>
                    </li>

                    <li>
                        <a className='items-menu' href="#">Sobre a Prática SST</a>
                    </li>

                    <li>
                        <a className='login-but' href="/login">Login</a>
                    </li>

                    <li>
                        <a className='orc-but' href="/orcamento">Faça um orçamento! <FaArrowRight /></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Navbar