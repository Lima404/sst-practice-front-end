import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applyCpfMask } from "../../../../../../../utils/applyCpfMask";
import { CreateEspecialDocumentsRequest, CreateEspecialDocumentsSchema } from "../../../../types";

const CreateEspecialDocuments = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      cpf: "", 
      adress: "",
      drugs_name: "", 
      use_mode: "",
      quantity: "",
    },
    resolver: zodResolver(CreateEspecialDocumentsSchema),
  });

  const onSubmit: SubmitHandler<CreateEspecialDocumentsRequest> = async (data) => {
    console.log(data);
  };

  return (
    <div className="main-create-unit-company-dashboard">
      <div className="create-unit-company-dashboard-content">
        <h2 className="create-unit-page-title">Relatório especial</h2>
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
              name="adress"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.adress ? "filled-error" : "standard-basic"}
                    label="Endereço"
                    type="text"
                    variant="standard"
                    placeholder="Digite o endereço do paciente"
                    error={!!errors.adress}
                    helperText={errors.adress?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="drugs_name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.drugs_name ? "filled-error" : "standard-basic"}
                    label="Medicamento"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome do medicamento"
                    error={!!errors.drugs_name}
                    helperText={errors.drugs_name?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="use_mode"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.use_mode ? "filled-error" : "standard-basic"}
                    label="Modo de uso"
                    type="text"
                    variant="standard"
                    placeholder="digite o modo de uso do medicamento"
                    error={!!errors.use_mode}
                    helperText={errors.use_mode?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="quantity"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.quantity ? "filled-error" : "standard-basic"}
                    label="Quantidade"
                    type="text"
                    variant="standard"
                    placeholder="digite a quantidade do medicamento"
                    error={!!errors.quantity}
                    helperText={errors.quantity?.message}
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

export default CreateEspecialDocuments;
