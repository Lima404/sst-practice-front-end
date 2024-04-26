import { useContext, useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaArrowLeft } from "react-icons/fa6";
import Planet from "../../../assets/login/saturn.svg";
import Universe from "../../../assets/login/universe.svg";
import Logo from "../../../assets/login/logopratica.svg";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import "./styles.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { TextField } from "@mui/material";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido")
    .required("Campo obrigatório")
    .min(6, "Insira no mínimo 6 caracteres"),
  password: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Insira no mínimo 6 caracteres"),
});

interface LoginCredentials {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginCredentials> = async (data) => {
    setIsLoading(true);
    try {
      await signIn(data);
    } finally {
      setIsLoading(false);
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
    },
  });

  return (
    <div className="main">
      <div className="card--login">
        <div className="left--side">
          <div className="data--input">
            <img src={Logo} alt="" />
            <form onSubmit={handleSubmit(onSubmit)} className="form--login">
              <div className="email--input">
                <ThemeProvider theme={theme}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        label="Email"
                        type="text"
                        id={errors.email ? "filled-error" : "standard-basic"}
                        variant="standard"
                        placeholder="Digite seu email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        {...field}
                      />
                    )}
                  />
                </ThemeProvider>
              </div>
              <div className="pass--input">
                <ThemeProvider theme={theme}>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        label="Senha"
                        type="password"
                        id={errors.password ? "filled-error" : "standard-basic"}
                        variant="standard"
                        placeholder="Digite sua senha"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        {...field}
                      />
                    )}
                  />
                </ThemeProvider>
              </div>
              <div className="buttons">
                <a className="forget--pass" href="#">
                  Esqueci minha senha
                </a>
                <button type="submit" className="but-enter">
                  {isLoading ? "Carregando..." : "Entrar"}
                </button>
              </div>
            </form>
            <div className="Back">
              <a className="back-to-menu" href="/">
                <FaArrowLeft /> Voltar para o menu principal
              </a>
            </div>
          </div>
        </div>
        <div className="right--side">
          <img src={Planet} alt="icone planeta" />
          <h2 className="title--login">
            Entre no universo onde cada clique abre novas possibilidades.
          </h2>
          <img className="img-universe" src={Universe} alt="image universe" />
        </div>
      </div>
    </div>
  );
};

export default Login;
