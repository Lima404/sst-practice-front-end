import { TextField } from "@mui/material";
import "./index.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateEmployeesRequest, createEmployeesSchema } from "../types";
import { createEmployees } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../data/contexts/AuthContext";

const CreateEmployees = () => {
  const navigate = useNavigate();
  const { userTypeId } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyId: userTypeId,
      name: "",
      cpf: "",
      nis: "",
      rg: "",
      br_pdh: "",
      sex: "",
      dt_birth: "",
      phone: "",
      phone_number: "",
      blood_type: "",
    },
    resolver: zodResolver(createEmployeesSchema),
  });

  const onSubmit: SubmitHandler<CreateEmployeesRequest> = async (data) => {
    try {
      await createEmployees(data).then(() => {
        toast.success("Colaborador criado com sucesso");
        navigate("/employees");
      });
    } catch (err: any) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div className="main-create-unit-company-dashboard">
      <div className="create-unit-company-dashboard-content">
        <h2 className="create-unit-page-title">Cadastrar Unidade</h2>
        <div className="create-unit-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.name ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Nome"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.cpf ? "filled-error" : "standard-basic"}
                    label="CPF"
                    type="text"
                    variant="standard"
                    placeholder="CPF"
                    error={!!errors.cpf}
                    helperText={errors.cpf?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="nis"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.nis ? "filled-error" : "standard-basic"}
                    label="NIS"
                    type="text"
                    variant="standard"
                    placeholder="NIS"
                    error={!!errors.nis}
                    helperText={errors.nis?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="rg"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.rg ? "filled-error" : "standard-basic"}
                    label="RG"
                    type="text"
                    variant="standard"
                    placeholder="RG"
                    error={!!errors.rg}
                    helperText={errors.rg?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="br_pdh"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.br_pdh ? "filled-error" : "standard-basic"}
                    label="BR PDH"
                    type="text"
                    variant="standard"
                    placeholder="BR PDH"
                    error={!!errors.br_pdh}
                    helperText={errors.br_pdh?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="sex"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.sex ? "filled-error" : "standard-basic"}
                    label="Sexo"
                    type="text"
                    variant="standard"
                    placeholder="Sexo"
                    error={!!errors.sex}
                    helperText={errors.sex?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="dt_birth"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.dt_birth ? "filled-error" : "standard-basic"}
                    label="Data de aniversário"
                    type="text"
                    variant="standard"
                    placeholder="Data de aniversário"
                    error={!!errors.dt_birth}
                    helperText={errors.dt_birth?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.phone ? "filled-error" : "standard-basic"}
                    label="Telefone"
                    type="text"
                    variant="standard"
                    placeholder="Telefone"
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="phone_number"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.phone_number ? "filled-error" : "standard-basic"}
                    label="Celular"
                    type="text"
                    variant="standard"
                    placeholder="Celular"
                    error={!!errors.phone_number}
                    helperText={errors.phone_number?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="blood_type"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.blood_type ? "filled-error" : "standard-basic"}
                    label="Tipo sanguíneo"
                    type="text"
                    variant="standard"
                    placeholder="Tipo sanguíneo"
                    error={!!errors.blood_type}
                    helperText={errors.blood_type?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <div className="create-unit-btn-submit">
              <button className="create-unit-btn-submit" type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployees;
