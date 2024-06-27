import { Checkbox, FormControlLabel, FormLabel, Grid } from "@mui/material";
import {
  EditEmployeesModalProps,
  EditEmployeesRequest,
  editEmployeesSchema,
} from "../types";
import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editEmployees, getEmployeesById } from "../api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CustomModal } from "../../../../customModal/CustomModal";
import Loader from "../../../../loader/Loader";
import { applyCpfMask } from "../../../../utils/applyCpfMask";
import { applyRgMask } from "../../../../utils/applyRgMask";
import { applyDateMask } from "../../../../utils/applyDateMask";
import { applyPhoneMask } from "../../../../utils/applyPhoneMask";
import { formatDateToDDMMYYYY } from "../../../../utils/formatDateToDDMMAAAA";

export const EditEmployeeModal = ({
  modalOpen,
  handleClose,
  employeeId,
  onUpdateSuccess,
}: EditEmployeesModalProps) => {
  const [pcdValue, setPcdValue] = useState("não");
  const [employeeData, setEmployeeData] = useState<EditEmployeesRequest>({
    companyId: "",
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
  });
  const [loading, setLoading] = useState<boolean>(true);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyId: "",
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
    resolver: zodResolver(editEmployeesSchema),
  });

  useEffect(() => {
    if (modalOpen) {
      getEmployeeInfo();
    }
  }, [modalOpen]);

  useEffect(() => {
    reset({
      companyId: employeeData.companyId,
      name: employeeData.name,
      cpf: employeeData.cpf,
      nis: employeeData.nis,
      rg: employeeData.rg,
      pcd: employeeData.pcd,
      pcd_observation: employeeData.pcd_observation,
      sex: employeeData.sex,
      dt_birth: employeeData.dt_birth,
      phone_number: employeeData.phone_number,
      admission_dt: employeeData.admission_dt,
      function_start_dt: employeeData.function_start_dt,
      office: employeeData.office,
      employee_function: employeeData.employee_function,
      registration: employeeData.registration,
      sector: employeeData.sector,
      cbo: employeeData.cbo,
    });
  }, [employeeData, reset]);

  const onSubmit: SubmitHandler<EditEmployeesRequest> = async (data) => {
    try {
      console.log(data);
      const formattedData = { ...data };
      await editEmployees(employeeId, formattedData);
      handleCloseModal();
      toast.success("Empregado editado com sucesso!");
      onUpdateSuccess();
    } catch (error) {
      toast.error("Erro ao editar o empregado. Por favor, tente novamente.");
      console.error("Erro ao editar o empregado:", error);
    }
  };

  const getEmployeeInfo = async () => {
    setLoading(true);
    try {
      const response = await getEmployeesById(employeeId);
      setEmployeeData({
        companyId: response.employee.companyId,
        name: response.employee.name,
        cpf: response.employee.cpf,
        nis: response.employee.nis,
        rg: response.employee.rg,
        pcd: response.employee.pcd,
        pcd_observation: response.employee.pcd_observation,
        sex: response.employee.sex,
        dt_birth: formatDateToDDMMYYYY(response.employee.dt_birth),
        phone_number: response.employee.phone_number,
        admission_dt: formatDateToDDMMYYYY(response.employee.admission_dt),
        function_start_dt: formatDateToDDMMYYYY(response.employee.function_start_dt),
        office: response.employee.office,
        employee_function: response.employee.employee_function,
        registration: response.employee.registration,
        sector: response.employee.sector,
        cbo: response.employee.cbo,

      });
    } catch (error) {
      console.error("Erro ao buscar informações do colaborador:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    handleClose();
    setEmployeeData({
      companyId: "",
      name: "",
      cpf: "",
      nis: "",
      rg: "",
      pcd: "",
      pcd_observation: "",
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
    });
  };

  return (
    <CustomModal
      isOpen={modalOpen}
      mode="edit"
      title="Editar Empregado"
      handleClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"name"}>
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyRgMask(e.target.value))
                    }
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <FormLabel component="legend">PCD</FormLabel>
            <Controller
              name="pcd"
              control={control}
              render={({ field }) => (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={pcdValue === 'sim'}
                        onChange={(e) => {
                          field.onChange(e);
                          setPcdValue(e.target.checked ? 'sim' : 'não');
                        }}
                        value="sim"
                        color="primary"
                      />
                    }
                    label="Sim"
                    style={{ color: 'rgba(0, 0, 0, 0.87)' }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={pcdValue === 'não'}
                        onChange={(e) => {
                          field.onChange(e);
                          setPcdValue(e.target.checked ? 'não' : 'sim');
                        }}
                        value="não"
                        color="primary"
                      />
                    }
                    label="Não"
                    style={{ color: 'rgba(0, 0, 0, 0.87)' }}
                  />
                </>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    disabled={pcdValue !== 'sim'}
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyDateMask(e.target.value))
                    }
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="employee_function"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.employee_function ? "filled-error" : "standard-basic"}
                    label="Função"
                    type="text"
                    variant="standard"
                    placeholder="Função"
                    error={!!errors.employee_function}
                    helperText={errors.employee_function?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
          </Grid>

        </>
      )}
    </CustomModal>
  );
};
