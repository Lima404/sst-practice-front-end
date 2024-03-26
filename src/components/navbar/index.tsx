import './styles.css'
import Image from "./assets/LogoNav.svg"
import { FaArrowRight } from "react-icons/fa6";
import React from 'react';

class Navbar extends React.Component {
    render(){
        return(
            <nav>
                <a href="/">
                    <img src={Image} alt='logo da barra de navegação'/>
                </a>
                <ul>
                    <li>Soluções</li>
                    <li>Contato</li>
                    <li className='about'>Sobre a PráticaSST</li>
                </ul>
                <ul>
                    <a className='login--but' href="/login">Login</a>               
                    <a className='login--orc' href="/orcamento">Faça um orçamento! <FaArrowRight /></a>                
                </ul>
            </nav>
        
        )
    }
}

export default Navbar