import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateStatementsRequest, createStatementsSchema } from "../../../../types";
import { applyCpfMask } from "../../../../../../../utils/applyCpfMask";

const CreateStatements = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      dt_birth: "",
      cpf: "",
      text_field: "",
    },
    resolver: zodResolver(createStatementsSchema),
  });

  const onSubmit: SubmitHandler<CreateStatementsRequest> = async (data) => {
    console.log(data);
  };

  const titles = [
    "Laudo",
    "Relatório",
    "Receituário",
    "Encaminhamento",
    "Atestado médico",
    "Declaração de comparecimento",
  ]

  return (
    <div className="main-create-unit-company-dashboard">
      <div className="create-unit-company-dashboard-content">
        <h2 className="create-unit-page-title">Cadastrar declaração</h2>
        <div className="create-unit-form">
          <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel>Declaração</InputLabel>
                      <Select
                        id={errors.title ? "filled-error" : "standard-basic"}
                        label="Declaração"
                        {...field}
                      >
                        {titles.map((title) => (
                          <MenuItem key={title} value={title}>
                            {title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              )}
            />

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
                    onChange={(e) => field.onChange(applyCpfMask(e.target.value))}
                  />
                </div>
              )}
            />

            <Controller
              name="text_field"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.text_field ? "filled-error" : "standard-basic"}
                    label="Anotações"
                    type="text"
                    variant="standard"
                    placeholder="Anotações"
                    error={!!errors.text_field}
                    helperText={errors.text_field?.message}
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

export default CreateStatements;
