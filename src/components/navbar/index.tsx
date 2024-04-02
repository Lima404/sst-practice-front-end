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
                    <a href='/' className='link'>Soluções</a>
                    <a href='/' className='link'>Contato</a>
                    <a href='/' className='link'>Sobre a PráticaSST</a>
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