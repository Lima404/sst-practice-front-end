import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAsoDocumentRequest, createAsoDocumentSchema } from "../../../../types";

const CreateAsoDocument = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // company
      corporate_reason: "",
      cnpj: "",
      //employee
      name: "",
      cpf: "",
      rg: "",
      dt_birth: "",
      registration: "",
      employeeFunction: "",
      office: "",
      sector: "",
      // risk factors
      risk_factors: [],
      // exams
      exam_date: "",
      exam_name: "",
      // conclusion
      conclusion: "",
      observation: "",
      // special skills
      special_skills: [],
    },
    resolver: zodResolver(createAsoDocumentSchema),
  });

  const onSubmit: SubmitHandler<CreateAsoDocumentRequest> = async (data) => {
    console.log(data);
  };

  return (
    <div className="main-create-unit-company-dashboard">
      <div className="create-unit-company-dashboard-content">
        <h2 className="create-unit-page-title">Cadastrar ASO</h2>
        <div className="create-unit-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="corporate_reason"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Empregador</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.corporate_reason ? "filled-error" : "standard-basic"}
                    label="Empresa"
                    type="text"
                    variant="standard"
                    placeholder="Empresa"
                    error={!!errors.corporate_reason}
                    helperText={errors.corporate_reason?.message}
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
              name="name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Colaborador</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.cnpj ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Nome"
                    error={!!errors.cnpj}
                    helperText={errors.cnpj?.message}
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
              name="dt_birth"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.dt_birth ? "filled-error" : "standard-basic"}
                    label="Data de nascimento"
                    type="text"
                    variant="standard"
                    placeholder="Data de nascimento"
                    error={!!errors.dt_birth}
                    helperText={errors.dt_birth?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="registration"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.registration ? "filled-error" : "standard-basic"}
                    label="Matrícula"
                    type="text"
                    variant="standard"
                    placeholder="Matrícula"
                    error={!!errors.registration}
                    helperText={errors.registration?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="employeeFunction"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.employeeFunction ? "filled-error" : "standard-basic"}
                    label="Função"
                    type="text"
                    variant="standard"
                    placeholder="Função"
                    error={!!errors.employeeFunction}
                    helperText={errors.employeeFunction?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="office"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.office ? "filled-error" : "standard-basic"}
                    label="Cargo"
                    type="text"
                    variant="standard"
                    placeholder="Cargo"
                    error={!!errors.office}
                    helperText={errors.office?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="sector"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.sector ? "filled-error" : "standard-basic"}
                    label="Setor"
                    type="text"
                    variant="standard"
                    placeholder="Setor"
                    error={!!errors.sector}
                    helperText={errors.sector?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="risk_factors"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Fatores de risco</h4>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="risk_factors"
                          value="Físicos"
                          defaultChecked={false}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...value, e.target.value]
                              : value.filter((item) => item !== e.target.value);
                            onChange(newValue);
                          }}
                          color="primary"
                          {...control}
                        />
                      }
                      label="Físicos"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="risk_factors"
                          value="Químicos"
                          defaultChecked={false}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...value, e.target.value]
                              : value.filter((item) => item !== e.target.value);
                            onChange(newValue);
                          }}
                          color="primary"
                          {...control}
                        />
                      }
                      label="Químicos"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="risk_factors"
                          value="Ergonômicos"
                          defaultChecked={false}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...value, e.target.value]
                              : value.filter((item) => item !== e.target.value);
                            onChange(newValue);
                          }}
                          color="primary"
                          {...control}
                        />
                      }
                      label="Ergonômicos"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="risk_factors"
                          value="Biológicos"
                          defaultChecked={false}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...value, e.target.value]
                              : value.filter((item) => item !== e.target.value);
                            onChange(newValue);
                          }}
                          color="primary"
                          {...control}
                        />
                      }
                      label="Biológicos"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="risk_factors"
                          value="Mecânicos"
                          defaultChecked={false}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...value, e.target.value]
                              : value.filter((item) => item !== e.target.value);
                            onChange(newValue);
                          }}
                          color="primary"
                          {...control}
                        />
                      }
                      label="Mecânicos"
                    />
                  </div>
                  {errors.risk_factors && <p>{errors.risk_factors.message}</p>}
                </div>
              )}
            />

            <Controller
              name="exam_date"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Exames</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.exam_date ? "filled-error" : "standard-basic"}
                    label="Data de exame"
                    type="text"
                    variant="standard"
                    placeholder="Data de exame"
                    error={!!errors.exam_date}
                    helperText={errors.exam_date?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="exam_name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.exam_name ? "filled-error" : "standard-basic"}
                    label="Nome do exame"
                    type="text"
                    variant="standard"
                    placeholder="Nome do exame"
                    error={!!errors.exam_name}
                    helperText={errors.exam_name?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="conclusion"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Conclusão</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.conclusion ? "filled-error" : "standard-basic"}
                    label="Conclusão"
                    type="text"
                    variant="standard"
                    placeholder="Conclusão"
                    error={!!errors.conclusion}
                    helperText={errors.conclusion?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="observation"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.observation ? "filled-error" : "standard-basic"}
                    label="Observação"
                    type="text"
                    variant="standard"
                    placeholder="Observação"
                    error={!!errors.observation}
                    helperText={errors.observation?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="special_skills"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Aptidões especiais</h4>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="special_skills"
                          value="Apto(a) para manipulação de alimentos"
                          defaultChecked={false}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...value, e.target.value]
                              : value.filter((item) => item !== e.target.value);
                            onChange(newValue);
                          }}
                          color="primary"
                          {...control}
                        />
                      }
                      label="Apto(a) para manipulação de alimentos"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="special_skills"
                          value="Apto(a) para realizar instalações e serviços em eletricidade (NR10)"
                          defaultChecked={false}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...value, e.target.value]
                              : value.filter((item) => item !== e.target.value);
                            onChange(newValue);
                          }}
                          color="primary"
                          {...control}
                        />
                      }
                      label="Apto(a) para realizar instalações e serviços em eletricidade (NR10)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="special_skills"
                          value="Apto(a) para operação de máquinas autopropelidas (NR-12)"
                          defaultChecked={false}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...value, e.target.value]
                              : value.filter((item) => item !== e.target.value);
                            onChange(newValue);
                          }}
                          color="primary"
                          {...control}
                        />
                      }
                      label="Apto(a) para operação de máquinas autopropelidas (NR-12)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="special_skills"
                          value="Apto(a) para uso de arma de fogo"
                          defaultChecked={false}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...value, e.target.value]
                              : value.filter((item) => item !== e.target.value);
                            onChange(newValue);
                          }}
                          color="primary"
                          {...control}
                        />
                      }
                      label="Apto(a) para uso de arma de fogo"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="special_skills"
                          value="Apto(a) para trabalho em espaço confinado (NR-33)"
                          defaultChecked={false}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...value, e.target.value]
                              : value.filter((item) => item !== e.target.value);
                            onChange(newValue);
                          }}
                          color="primary"
                          {...control}
                        />
                      }
                      label="Apto(a) para trabalho em espaço confinado (NR-33)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="special_skills"
                          value="Apto(a) para trabalho em altura (NR-35)"
                          defaultChecked={false}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...value, e.target.value]
                              : value.filter((item) => item !== e.target.value);
                            onChange(newValue);
                          }}
                          color="primary"
                          {...control}
                        />
                      }
                      label="Apto(a) para trabalho em altura (NR-35)"
                    />
                  </div>
                  {errors.risk_factors && <p>{errors.risk_factors.message}</p>}
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

export default CreateAsoDocument;
