import { TextField } from "@mui/material";
import "./index.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAdminRequest, createAdminSchema } from "../types/types";
import { createAdmin } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { applyCpfMask } from "../../../../utils/applyCpfMask";
import { applyPhoneMask } from "../../../../utils/applyPhoneMask";

const CreateAdmin = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      phone_number: "",
      password: "",
    },
    resolver: zodResolver(createAdminSchema),
  });

  const onSubmit: SubmitHandler<CreateAdminRequest> = async (data) => {
    try {
      await createAdmin(data).then(() => {
        toast.success("Administrador criado com sucesso");
        navigate("/admins");
      });
    } catch (err: any) {
      console.log("ESSES SÃO OS DADOS", data);
      console.log(err);
    }
  };

  return (
    <div className="main-create-admin-admin-dashboard">
      <div className="create-admin-admin-dashboard-content">
        <h2 className="create-admin-page-title">Cadastrar Administrador</h2>
        <div className="create-admin-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.name ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.email ? "filled-error" : "standard-basic"}
                    label="Email"
                    type="text"
                    variant="standard"
                    placeholder="Digite o email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.cpf ? "filled-error" : "standard-basic"}
                    label="CPF"
                    type="text"
                    variant="standard"
                    placeholder="Digite o CPF"
                    error={!!errors.cpf}
                    helperText={errors.cpf?.message}
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyCpfMask(e.target.value))
                    }
                  />
                </div>
              )}
            />

            <Controller
              name="phone_number"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.phone_number ? "filled-error" : "standard-basic"}
                    label="Telefone"
                    type="text"
                    variant="standard"
                    placeholder="Digite o Telefone"
                    error={!!errors.phone_number}
                    helperText={errors.phone_number?.message}
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyPhoneMask(e.target.value))
                    }
                  />
                </div>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.password ? "filled-error" : "standard-basic"}
                    label="Senha"
                    type="password"
                    variant="standard"
                    placeholder="Digite a senha"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <div className="create-admin-btn-submit">
              <button className="create-admin-btn-submit" type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
