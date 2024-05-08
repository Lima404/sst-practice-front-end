import { TextField } from "@mui/material";
import "./index.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUnitRequest, createUnitSchema } from "../types";
import { createUnit } from "../api/";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CompanySideBar from "../../../../company-components/sidebar";
import { useContext } from "react";
import { AuthContext } from "../../../../../data/contexts/AuthContext";

const CreateUnit = () => {
  const navigate = useNavigate();
  const { userTypeId } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyId: userTypeId,
      identification: "",
      cnpj: "",
      cnea: "",
      activity: "",
      degree_of_risk: "",
      aso: "",
      cep: "",
      address: "",
      neighborhood: "",
      city: "",
      state: "",
      email: "",
      phone: "",
      legal_representative: "",
      cpf_legal_representative: "",
      cipa_type: "",
      num_employees_cipa: 0,
    },
    resolver: zodResolver(createUnitSchema),
  });

  const onSubmit: SubmitHandler<CreateUnitRequest> = async (data) => {
    try {
      await createUnit(data).then(() => {
        toast.success("Unidade criada com sucesso");
        navigate("/units");
      });
    } catch (err: any) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div className="main-create-unit-company-dashboard">
      <CompanySideBar />

      <div className="create-unit-company-dashboard-content">
        <h2 className="create-unit-page-title">Cadastrar Unidade</h2>
        <div className="create-unit-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="identification"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.identification ? "filled-error" : "standard-basic"}
                    label="Identificação"
                    type="text"
                    variant="standard"
                    placeholder="Identificação"
                    error={!!errors.identification}
                    helperText={errors.identification?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cnpj"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.cnpj ? "filled-error" : "standard-basic"}
                    label="CNPJ"
                    type="text"
                    variant="standard"
                    placeholder="CNPJ"
                    error={!!errors.cnpj}
                    helperText={errors.cnpj?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cnea"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.cnea ? "filled-error" : "standard-basic"}
                    label="CNEA"
                    type="text"
                    variant="standard"
                    placeholder="CNEA"
                    error={!!errors.cnea}
                    helperText={errors.cnea?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="activity"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.activity ? "filled-error" : "standard-basic"}
                    label="Atividade"
                    type="text"
                    variant="standard"
                    placeholder="Atividade"
                    error={!!errors.activity}
                    helperText={errors.activity?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="degree_of_risk"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.degree_of_risk ? "filled-error" : "standard-basic"}
                    label="Grau de risco"
                    type="text"
                    variant="standard"
                    placeholder="Grau de risco"
                    error={!!errors.degree_of_risk}
                    helperText={errors.degree_of_risk?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="aso"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.aso ? "filled-error" : "standard-basic"}
                    label="ASO"
                    type="text"
                    variant="standard"
                    placeholder="ASO"
                    error={!!errors.aso}
                    helperText={errors.aso?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cep"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.cep ? "filled-error" : "standard-basic"}
                    label="CEP"
                    type="text"
                    variant="standard"
                    placeholder="CEP"
                    error={!!errors.cep}
                    helperText={errors.cep?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.address ? "filled-error" : "standard-basic"}
                    label="Endereço"
                    type="text"
                    variant="standard"
                    placeholder="Endereço"
                    error={!!errors.address}
                    helperText={errors.address?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="neighborhood"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.neighborhood ? "filled-error" : "standard-basic"}
                    label="Bairro"
                    type="text"
                    variant="standard"
                    placeholder="Bairro"
                    error={!!errors.neighborhood}
                    helperText={errors.neighborhood?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.city ? "filled-error" : "standard-basic"}
                    label="Cidade"
                    type="text"
                    variant="standard"
                    placeholder="Cidade"
                    error={!!errors.city}
                    helperText={errors.city?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.state ? "filled-error" : "standard-basic"}
                    label="Estado"
                    type="text"
                    variant="standard"
                    placeholder="Estado"
                    error={!!errors.state}
                    helperText={errors.state?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.email ? "filled-error" : "standard-basic"}
                    label="E-mail"
                    type="email"
                    variant="standard"
                    placeholder="E-mail"
                    error={!!errors.email}
                    helperText={errors.email?.message}
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
              name="legal_representative"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.legal_representative ? "filled-error" : "standard-basic"}
                    label="Representante legal"
                    type="text"
                    variant="standard"
                    placeholder="Representante legal"
                    error={!!errors.legal_representative}
                    helperText={errors.legal_representative?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cpf_legal_representative"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.cpf_legal_representative ? "filled-error" : "standard-basic"}
                    label="CPF do representante legal"
                    type="text"
                    variant="standard"
                    placeholder="CPF do representante legal"
                    error={!!errors.cpf_legal_representative}
                    helperText={errors.cpf_legal_representative?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cipa_type"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.cipa_type ? "filled-error" : "standard-basic"}
                    label="Tipo de CIPA"
                    type="text"
                    variant="standard"
                    placeholder="Tipo de CIPA"
                    error={!!errors.cipa_type}
                    helperText={errors.cipa_type?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="num_employees_cipa"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.num_employees_cipa ? "filled-error" : "standard-basic"}
                    label="Número de funcionários na CIPA"
                    type="number"
                    variant="standard"
                    placeholder="Número de funcionários na CIPA"
                    error={!!errors.num_employees_cipa}
                    helperText={errors.num_employees_cipa?.message}
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

export default CreateUnit;
