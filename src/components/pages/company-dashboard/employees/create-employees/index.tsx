import { MenuItem, TextField } from "@mui/material";
import "./index.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateEmployeesRequest, createEmployeesSchema } from "../types";
import { createEmployees, fetchAllUnitsData } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../data/contexts/AuthContext";
import { applyCpfMask } from "../../../../utils/applyCpfMask";
import { applyDateMask } from "../../../../utils/applyDateMask";
import { applyPhoneMask } from "../../../../utils/applyPhoneMask";

const CreateEmployees = () => {
  interface Unit {
    id: string;
    identification: string;
  }


  const navigate = useNavigate();
  const { userTypeId } = useContext(AuthContext);
  const [pcdValue, setPcdValue] = useState("");
  const [units, setUnits] = useState<Unit[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyId: userTypeId,
      unitId: "",
      name: "",
      cpf: "",
      nis: "",
      rg: "",
      pcd: "",
      pcd_observation: "Observação",
      sex: "",
      dt_birth: "",
      phone_number: "",
      admission_dt: "",
      function_start_dt: "",
      office: "",
      employee_function: "",
      registration: "",
      sector: "",
      cbo: "",
    },
    resolver: zodResolver(createEmployeesSchema),
  });

  const onSubmit: SubmitHandler<CreateEmployeesRequest> = async (data) => {
    try {
      await createEmployees(data).then(() => {
        toast.success("Empregado criado com sucesso");
        navigate("/employees");
      });
    } catch (err: any) {
      console.log(err);
    }
  };

  const fetchAllUnits = async () => {
    try {
      if (userTypeId !== null) {
        const companyId = userTypeId;
        fetchAllUnitsData(companyId).then((response) => {
          if (response.units.length === 0) {
            toast.error("Não foram encontrados registros!");
          }
          toast.success(`${response.units.length} registros encontrados`);
          setUnits(response.units);
        });
      } else {
        console.log("não foi possível encontrar unidades para essa empresa");
      }
    } catch (error) {
      console.log("Erro na requisição", error);
    }
  };

  useEffect(() => {
    fetchAllUnits();
  }, []);

  return (
    <div className="main-create-unit-company-dashboard">
      <div className="create-unit-company-dashboard-content">
        <h2 className="create-unit-page-title">Cadastrar Empregado</h2>
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
              name="unitId"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    select
                    className="form-input-create-unit"
                    id={errors.unitId ? "filled-error" : "standard-basic"}
                    label="Escolha a unidade do empregado"
                    variant="standard"
                    placeholder="Unidade"
                    error={!!errors.unitId}
                    helperText={errors.unitId?.message}
                    {...field}
                  >
                    {units.map((unit: Unit) => (
                      <MenuItem key={unit.id} value={unit.id}>
                        {unit.identification}
                      </MenuItem>
                    ))}
                  </TextField>
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
                    label="RG - Órgão Expedidor"
                    type="text"
                    variant="standard"
                    placeholder="RG - Órgão Expedidor"
                    error={!!errors.rg}
                    helperText={errors.rg?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="pcd"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    select
                    className="form-input-create-unit"
                    id={errors.pcd ? "filled-error" : "standard-basic"}
                    label="PCD"
                    variant="standard"
                    placeholder="PCD"
                    error={!!errors.pcd}
                    helperText={errors.pcd?.message}
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setPcdValue(e.target.value); // Atualiza o estado com o valor selecionado
                    }}
                  >
                    <MenuItem value="sim">Sim</MenuItem>
                    <MenuItem value="não">Não</MenuItem>
                  </TextField>
                </div>
              )}
            />

            <Controller
              name="pcd_observation"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.pcd_observation ? "filled-error" : "standard-basic"}
                    label="Observação"
                    type="text"
                    variant="standard"
                    placeholder="Observação"
                    error={!!errors.pcd_observation}
                    helperText={errors.pcd_observation?.message}
                    disabled={pcdValue !== 'sim'} // Desabilita o campo se PCD não for 'sim'
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
                    required
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
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyDateMask(e.target.value))
                    }
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
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyPhoneMask(e.target.value))
                    }
                  />
                </div>
              )}
            />

            <Controller
              name="admission_dt"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.admission_dt ? "filled-error" : "standard-basic"}
                    label="Data de admissão"
                    type="text"
                    variant="standard"
                    placeholder="Data de admissão"
                    error={!!errors.admission_dt}
                    helperText={errors.admission_dt?.message}
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyDateMask(e.target.value))
                    }
                  />
                </div>
              )}
            />

            <Controller
              name="function_start_dt"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.function_start_dt ? "filled-error" : "standard-basic"}
                    label="Data de início da função"
                    type="text"
                    variant="standard"
                    placeholder="Data de início da função"
                    error={!!errors.function_start_dt}
                    helperText={errors.function_start_dt?.message}
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyDateMask(e.target.value))
                    }
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
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="employee_function"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.employee_function ? "filled-error" : "standard-basic"}
                    label="Função do empregado"
                    type="text"
                    variant="standard"
                    placeholder="Função do empregado"
                    error={!!errors.employee_function}
                    helperText={errors.employee_function?.message}
                    required
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
                    required
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
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cbo"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.cbo ? "filled-error" : "standard-basic"}
                    label="CBO"
                    type="text"
                    variant="standard"
                    placeholder="CBO"
                    error={!!errors.cbo}
                    helperText={errors.cbo?.message}
                    required
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
