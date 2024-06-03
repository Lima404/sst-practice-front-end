import "./index.css";
import TextField from "@mui/material/TextField";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { CreateProfessionalRequest, createProfessionalSchema } from "../types";
import { createProfessional } from "../api";
import { useNavigate } from "react-router-dom";
import { applyCpfMask } from "../../../../utils/applyCpfMask";
import { applyRgMask } from "../../../../utils/applyRgMask";

const CreateProfessional = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      cpf: "",
      nis: "",
      rg: "",
      cbo: "",
      formation: "",
      organ: "",
      acronym: "",
      ccr: "",
      uf: "",
      title: "",
      jobFunction: "",
    },
    resolver: zodResolver(createProfessionalSchema),
  });

  const onSubmit: SubmitHandler<CreateProfessionalRequest> = async (data) => {
    try {
      await createProfessional(data).then(() => {
        toast.success("Profissional criado com sucesso");
        navigate("/professionals");
      });
    } catch (err) {
      console.error(err);
      toast.error("Erro ao criar profissional");
    }
  };

  return (
    <div className="main-create-professional-admin-dashboard">
      <div className="create-professional-admin-dashboard-content">
        <h2 className="create-professional-page-title">
          Cadastrar Profissional
        </h2>
        <div className="create-professional-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
                    id={errors.email ? "filled-error" : "standard-basic"}
                    label="E-mail"
                    type="email"
                    variant="standard"
                    placeholder="Digite o e-mail"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.password ? "filled-error" : "standard-basic"}
                    label="Senha"
                    type="password"
                    variant="standard"
                    placeholder="Digite a senha"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.name ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.cpf ? "filled-error" : "standard-basic"}
                    label="CPF"
                    type="text"
                    variant="standard"
                    placeholder="Digite o CPF"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyCpfMask(e.target.value))
                    }
                  />
                </div>
              )}
            />

            <Controller
              name="nis"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.nis ? "filled-error" : "standard-basic"}
                    label="NIS"
                    type="text"
                    variant="standard"
                    placeholder="Digite o NIS"
                    error={!!errors.nis}
                    helperText={errors.nis?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="rg"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.rg ? "filled-error" : "standard-basic"}
                    label="RG"
                    type="text"
                    variant="standard"
                    placeholder="Digite o RG"
                    error={!!errors.rg}
                    helperText={errors.rg?.message}
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyRgMask(e.target.value))
                    }
                  />
                </div>
              )}
            />

            <Controller
              name="cbo"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.cbo ? "filled-error" : "standard-basic"}
                    label="CBO"
                    type="text"
                    variant="standard"
                    placeholder="Digite o CBO"
                    error={!!errors.cbo}
                    helperText={errors.cbo?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="formation"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.formation ? "filled-error" : "standard-basic"}
                    label="Formação"
                    type="text"
                    variant="standard"
                    placeholder="Digite a formação"
                    error={!!errors.formation}
                    helperText={errors.formation?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="organ"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.organ ? "filled-error" : "standard-basic"}
                    label="Órgão"
                    type="text"
                    variant="standard"
                    placeholder="Digite o órgão"
                    error={!!errors.organ}
                    helperText={errors.organ?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="acronym"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.acronym ? "filled-error" : "standard-basic"}
                    label="Sigla"
                    type="text"
                    variant="standard"
                    placeholder="Digite a sigla"
                    error={!!errors.acronym}
                    helperText={errors.acronym?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="ccr"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.ccr ? "filled-error" : "standard-basic"}
                    label="CCR"
                    type="text"
                    variant="standard"
                    placeholder="Digite o CCR"
                    error={!!errors.ccr}
                    helperText={errors.ccr?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="uf"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.uf ? "filled-error" : "standard-basic"}
                    label="UF"
                    type="text"
                    variant="standard"
                    placeholder="Digite a UF"
                    error={!!errors.uf}
                    helperText={errors.uf?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.title ? "filled-error" : "standard-basic"}
                    label="Titulação"
                    type="text"
                    variant="standard"
                    placeholder="Digite a titulação"
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="jobFunction"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.jobFunction ? "filled-error" : "standard-basic"}
                    label="Função"
                    type="text"
                    variant="standard"
                    placeholder="Digite a função"
                    error={!!errors.jobFunction}
                    helperText={errors.jobFunction?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <div className="create-professional-btn-submit">
              <button className="create-professional-btn-submit" type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfessional;
