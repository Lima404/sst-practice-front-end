import './styles.css'
import Imagem from "./assets/LogoNav.svg"
import Seta from "./assets/seta.svg"

export default function Navbar() {
    return(
        <nav>
            <a href="/">
                <img src={Imagem} alt='logo da barra de navegação'/>
            </a>
            <ul>
                <li>Soluções</li>
                <li>Contato</li>
                <li className='about'>Sobre a PráticaSST</li>
            </ul>
            <ul>
                <li className='login'>
                    <a className='login--but' href="/login">Login</a>
                </li>
                <li className='orcamento'>
                    <a className='login--orc' href="/orcamento">Faça um orçamento! <img src={Seta} alt="Seta" /></a>
                </li>
            </ul>
        </nav>
    )
}