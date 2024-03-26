import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { FaArrowLeft } from "react-icons/fa6";
import './styles.css'

const Login = () => {
        
        const [usuario , setUsuario] = useState('')
        const [senha , setSenha] = useState('')

        // const aoLogin = (event) => {
        //     event.preventDefault();
        //     props.aoLoginPerformed({ usuario })
        //     setUsuario('')
        //     setSenha('')
        // }

        return(
            <div className='main'>
                <div className='left--side'>
                    <div className='data--input'>
                        <form className='form--login'>
                            <div className="email--input">
                                <h3>Email</h3>
                                <TextField id="standard-basic" label="Entre com seu email!" variant="standard" />
                            </div>
                            <div className="email--input">
                                <h3>Senha</h3>
                                <TextField id="standard-basic" label="Digite sua senha para ter acesso!" variant="standard" />
                            </div>
                        </form>
                        <div className='buttons'>
                            <a href="#">Esqueci minha senha!</a>
                            <button>Entrar</button>
                            <div className='Back'>
                                <a href="/"><FaArrowLeft /> Voltar para o menu principal!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right--side'>
                    <h2>ola</h2>
                </div>
            </div>
        )
        
    }

export default Login