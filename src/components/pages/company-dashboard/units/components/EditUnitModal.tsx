import { Grid } from "@mui/material";
import { EditUnitModalProps, EditUnitRequest, editUnitSchema } from "../types";
import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUnit, getUnitById } from "../api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CustomModal } from "../../../../customModal/CustomModal";
import Loader from "../../../../loader/Loader";
import { applyCnpjMask } from "../../../../utils/applyCnpjMask";
import { applyCepMask } from "../../../../utils/applyCepMask";
import { applyPhoneMask } from "../../../../utils/applyPhoneMask";
import { applyCpfMask } from "../../../../utils/applyCpfMask";

export const EditUnitModal = ({
  modalOpen,
  handleClose,
  unitId,
  onUpdateSuccess,
}: EditUnitModalProps) => {
  const [unitData, setUnitData] = useState<EditUnitRequest>({
    companyId: "",
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
    resolver: zodResolver(editUnitSchema),
  });

  useEffect(() => {
    if (modalOpen) {
      getUnitInfo();
    }
  }, [modalOpen]);

  useEffect(() => {
    reset({
      companyId: unitData.companyId,
      identification: unitData.identification,
      cnpj: unitData.cnpj,
      cnea: unitData.cnea,
      activity: unitData.activity,
      degree_of_risk: unitData.degree_of_risk,
      aso: unitData.aso,
      cep: unitData.cep,
      address: unitData.address,
      neighborhood: unitData.neighborhood,
      city: unitData.city,
      state: unitData.state,
      email: unitData.email,
      phone: unitData.phone,
      legal_representative: unitData.legal_representative,
      cpf_legal_representative: unitData.cpf_legal_representative,
      cipa_type: unitData.cipa_type,
      num_employees_cipa: unitData.num_employees_cipa,
    });
  }, [unitData, reset]);

  const onSubmit: SubmitHandler<EditUnitRequest> = async (data) => {
    try {
      console.log(data);
      const formattedData = { ...data };
      await editUnit(unitId, formattedData);
      handleCloseModal();
      toast.success("Unidade editada com sucesso!");
      onUpdateSuccess();
    } catch (error) {
      toast.error("Erro ao editar a unidade. Por favor, tente novamente.");
      console.error("Erro ao editar a unidade:", error);
    }
  };

  const getUnitInfo = async () => {
    setLoading(true);
    try {
      const response = await getUnitById(unitId);
      setUnitData({
        companyId: response.unit.companyId,
        identification: response.unit.identification,
        cnpj: response.unit.cnpj,
        cnea: response.unit.cnea,
        activity: response.unit.activity,
        degree_of_risk: response.unit.degree_of_risk,
        aso: response.unit.aso,
        cep: response.unit.cep,
        address: response.unit.address,
        neighborhood: response.unit.neighborhood,
        city: response.unit.city,
        state: response.unit.state,
        email: response.unit.email,
        phone: response.unit.phone,
        legal_representative: response.unit.legal_representative,
        cpf_legal_representative: response.unit.cpf_legal_representative,
        cipa_type: response.unit.cipa_type,
        num_employees_cipa: response.unit.num_employees_cipa,
      });
    } catch (error) {
      console.error("Erro ao buscar informações da unidade:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    handleClose();
    setUnitData({
      companyId: "",
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
    });
  };

  return (
    <CustomModal
      isOpen={modalOpen}
      mode="edit"
      title="Editar Unidade"
      handleClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"name"}>
            <Controller
              name="identification"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={
                      errors.identification ? "filled-error" : "standard-basic"
                    }
                    label="Identificação"
                    type="text"
                    variant="standard"
                    placeholder="Identificação"
                    error={!!errors.identification}
                    helperText={errors.identification?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyCnpjMask(e.target.value))
                    }
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyCnpjMask(e.target.value))
                    }
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="degree_of_risk"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={
                      errors.degree_of_risk ? "filled-error" : "standard-basic"
                    }
                    label="Grau de risco"
                    type="text"
                    variant="standard"
                    placeholder="Grau de risco"
                    error={!!errors.degree_of_risk}
                    helperText={errors.degree_of_risk?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyCepMask(e.target.value))
                    }
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
              name="legal_representative"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={
                      errors.legal_representative
                        ? "filled-error"
                        : "standard-basic"
                    }
                    label="Representante legal"
                    type="text"
                    variant="standard"
                    placeholder="Representante legal"
                    error={!!errors.legal_representative}
                    helperText={errors.legal_representative?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="cpf_legal_representative"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={
                      errors.cpf_legal_representative
                        ? "filled-error"
                        : "standard-basic"
                    }
                    label="CPF do representante legal"
                    type="text"
                    variant="standard"
                    placeholder="CPF do representante legal"
                    error={!!errors.cpf_legal_representative}
                    helperText={errors.cpf_legal_representative?.message}
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
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="num_employees_cipa"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={
                      errors.num_employees_cipa
                        ? "filled-error"
                        : "standard-basic"
                    }
                    label="Número de funcionários na CIPA"
                    type="number"
                    variant="standard"
                    placeholder="Número de funcionários na CIPA"
                    error={!!errors.num_employees_cipa}
                    helperText={errors.num_employees_cipa?.message}
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
