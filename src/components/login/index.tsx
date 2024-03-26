import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { FaArrowLeft } from "react-icons/fa6";
import Planet from "./assets/saturn.svg"
import Universe from "./assets/universe.png"
import './styles.css'

const Login = () => {

    const theme = createTheme ({
        palette: {
            primary: {
                main: '#ffffff',
            }
        }
    })
        
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
                <div className="card--login">
                    <div className='left--side'>
                        <div className='data--input'>
                            <form className='form--login'>
                                <div className="email--input">
                                    <ThemeProvider theme={theme}>
                                        <TextField id="standard-basic" label="Entre com seu email!" variant="standard" />
                                    </ThemeProvider>
                                </div>
                                <div className="pass--input">
                                    <ThemeProvider theme={theme}>
                                        <TextField id="standard-basic" label="Digite sua senha para ter acesso!" variant="standard" />
                                    </ThemeProvider>
                                </div>
                            </form>
                            <div className='buttons'>
                                <a className='forget--pass' href="#">Esqueci minha senha!</a>
                                <button className='but-enter'>Entrar</button>
                            </div>
                                <div className='Back'>
                                    <a className='back-to-menu' href="/"><FaArrowLeft /> Voltar para o menu principal!</a>
                                </div>
                        </div>
                    </div>
                    <div className='right--side'>
                        <img src={Planet} alt="icone planeta" />
                        <h2 className='title--login'>Entre no universo onde cada clique abre novas possibilidades.</h2>
                        <img src={Universe} alt="image universe" />
                    </div>
                </div>
            </div>
        )
        
    }

export default Login