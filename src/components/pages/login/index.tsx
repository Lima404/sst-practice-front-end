import React, { useState, ChangeEvent, FormEvent } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { FaArrowLeft } from "react-icons/fa6";
import Planet from "../../../assets/saturn.svg"
import Universe from "../../../assets/universe.svg"
import Logo from '../../../assets/logopratica.svg'
import './styles.css'

interface LoginCredentials {
    email: string,
    pass: string
}


const Login: React.FC = () => {

    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: '',
        pass: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCredentials({
            ...credentials,
            [name]: value,
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Aqui você pode integrar a lógica de autenticação
        console.log('Credenciais submetidas:', credentials);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#d5d5d5',
            }
        }
    })



    return (
        <div className='main'>
            <div className="card--login">
                <div className='left--side'>
                    <div className='data--input'>
                        <img src={Logo} alt="" />
                        <form onSubmit={handleSubmit} className='form--login'>
                            <div className="email--input">
                                <ThemeProvider theme={theme}>
                                    <TextField onChange={handleChange} id="standard-basic" label="Digite seu e-mail..." variant="standard" />
                                </ThemeProvider>
                            </div>
                            <div className="pass--input">
                                <ThemeProvider theme={theme}>
                                    <TextField type='password' onChange={handleChange} id="standard-basic" label="Digite sua senha..." variant="standard" />
                                </ThemeProvider>
                            </div>
                            <div className='buttons'>
                                <a className='forget--pass' href="#">Esqueci minha senha</a>
                                <button className='but-enter'>Entrar</button>
                            </div>
                        </form>
                        <div className='Back'>
                            <a className='back-to-menu' href="/"><FaArrowLeft /> Voltar para o menu principal</a>
                        </div>
                    </div>
                </div>
                <div className='right--side'>
                    <img src={Planet} alt="icone planeta" />
                    <h2 className='title--login'>Entre no universo onde cada clique abre novas possibilidades.</h2>
                    <img className='img-universe' src={Universe} alt="image universe" />
                </div>
            </div>
        </div>
    )

}

export default Login