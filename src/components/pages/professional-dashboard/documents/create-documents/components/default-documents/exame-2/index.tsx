import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applyCpfMask } from "../../../../../../../utils/applyCpfMask";
import { applyDateMask } from "../../../../../../../utils/applyDateMask";
import { CreateExamTypeTwoDocumentsRequest, CreateExamTypeTwoDocumentsSchema } from "../../../../types";

const CreateExameTypeTwoDocuments = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      cpf: "", 
      dt_birth: "",
      corporate_reason: "", 
      exames: [],
    },
    resolver: zodResolver(CreateExamTypeTwoDocumentsSchema),
  });

  const onSubmit: SubmitHandler<CreateExamTypeTwoDocumentsRequest> = async (data) => {
    console.log(data);
  };

  return (
    <div className="main-create-unit-company-dashboard">
      <div className="create-unit-company-dashboard-content">
        <h2 className="create-unit-page-title">Exame tipo 2</h2>
        <div className="create-unit-form">
          <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Funcionário</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.name ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome do paciente"
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
                    placeholder="digite o CPF do paciente"
                    error={!!errors.cpf}
                    helperText={errors.cpf?.message}
                    {...field}
                    onChange={(e) => field.onChange(applyCpfMask(e.target.value))}
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
                    onChange={(e) => field.onChange(applyDateMask(e.target.value))}
                  />
                </div>
              )}
            />

            <Controller
              name="corporate_reason"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
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
              name="exames"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Exames</h4>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exames"
                          value="Audiometria tonal (ocupacional)"
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
                      label="Audiometria tonal (ocupacional)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exames"
                          value="Espirometria (prova de função pulmonar – ocupacional)"
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
                      label="Espirometria (prova de função pulmonar – ocupacional)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exames"
                          value="Radiografia de tórax (2 incidências – padrão OIT)"
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
                      label="Radiografia de tórax (2 incidências – padrão OIT)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exames"
                          value="Eletrocardiograma (ECG)"
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
                      label="Eletrocardiograma (ECG)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exames"
                          value="Eletroencefalograma (EEG)"
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
                      label="Eletroencefalograma (EEG)"
                    />
                  </div>
                  {errors.exames && <p>{errors.exames.message}</p>}
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

export default CreateExameTypeTwoDocuments;
