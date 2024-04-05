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
                    <div className='div-items-left'>
                        <li className='items-menu-left'>
                            <div>
                                <img src={Logo} />
                            </div>
                        </li>
                    </div>

                    <div className='div-items-center'>
                        <li className='items-menu-center'>
                            <a href="#">Soluções</a>
                        </li>

                        <li className='items-menu-center'>
                            <a href="#">Contato</a>
                        </li>

                        <li className='items-menu-center'>
                            <a href="#">Sobre a Prática SST</a>
                        </li>
                    </div>

                    <li className='items-menu-right'>
                        <a className='login-but' href="/login">Login</a>
                    </li>

                    <li className='items-menu-right'>
                        <a className='orc-but' href="/orcamento">Faça um orçamento! <FaArrowRight /></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Navbar