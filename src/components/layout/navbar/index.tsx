import './styles.css'
import Image from "../../../assets/sst-logo.svg"
import { FaArrowRight } from "react-icons/fa6";
import React from 'react';

class Navbar extends React.Component {
    render(){
        return(
            <nav className='navbar'>
                <a href="/">
                    <img src={Image} alt='logo da barra de navegação'/>
                </a>
<<<<<<< HEAD:src/components/navbar/index.tsx
                <ul>
                    <a href='/' className='link'>Soluções</a>
                    <a href='/' className='link'>Contato</a>
                    <a href='/' className='link'>Sobre a PráticaSST</a>
=======
                <ul className='list-links'>
                    <li>Soluções</li>
                    <li>Contato</li>
                    <li className='about'>Sobre a PráticaSST</li>
>>>>>>> refs/remotes/origin/Glima:src/components/layout/navbar/index.tsx
                </ul>
                <ul className='navbar-actions'>
                    <a className='login--but' href="/login">Login</a>               
                    <a className='orc-but' href="/orcamento">Faça um orçamento! <FaArrowRight /></a>                
                </ul>
            </nav>
        
        )
    }
}

export default Navbar