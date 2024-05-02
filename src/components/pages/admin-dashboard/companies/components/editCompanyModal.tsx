import { Grid } from "@mui/material";
import {
  EditCompanyModalProps,
  EditCompanyRequest,
  editCompanySchema,
} from "../types";
import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CustomModal } from "../../../../customModal/CustomModal";
import Loader from "../../../../loader/Loader";
import { editCompany, getCompanyById } from "../api";

export const EditCompanyModal = ({
  modalOpen,
  handleClose,
  companyId,
  userId,
  onUpdateSuccess,
}: EditCompanyModalProps) => {
  const [companyData, setCompanyData] = useState<EditCompanyRequest>({
    email: "",
    cnpj: "",
    corporate_reason: "",
    fantasy_name: "",
    identification: "",
    cep: "",
    address: "",
    neighborhood: "",
    phone: "",
    dt_start_esocial: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      cnpj: "",
      corporate_reason: "",
      fantasy_name: "",
      identification: "",
      cep: "",
      address: "",
      neighborhood: "",
      phone: "",
      dt_start_esocial: "",
    },
    resolver: zodResolver(editCompanySchema),
  });

  useEffect(() => {
    if (modalOpen) {
      getCompanyInfo();
    }
  }, [modalOpen]);

  useEffect(() => {
    reset({
      email: companyData.email,
      cnpj: companyData.cnpj,
      corporate_reason: companyData.corporate_reason,
      fantasy_name: companyData.fantasy_name,
      identification: companyData.identification,
      cep: companyData.cep,
      address: companyData.address,
      neighborhood: companyData.neighborhood,
      phone: companyData.phone,
      dt_start_esocial: companyData.dt_start_esocial,
    });
  }, [companyData, reset]);

  const onSubmit: SubmitHandler<EditCompanyRequest> = async (data) => {
    try {
      console.log(data);
      const formattedData = { ...data, userId: userId };
      await editCompany(companyId, formattedData);
      handleCloseModal();
      toast.success("Empresa editada com sucesso!");
      onUpdateSuccess();
    } catch (error) {
      toast.error("Erro ao editar a empresa. Por favor, tente novamente.");
      console.error("Erro ao editar a empresa:", error);
      console.log(data.email)
    }
  };

  const getCompanyInfo = async () => {
    setLoading(true);
    try {
      const response = await getCompanyById(companyId);
      setCompanyData({
        email: response.company.user.email,
        cnpj: response.company.cnpj,
        corporate_reason: response.company.corporate_reason,
        fantasy_name: response.company.fantasy_name,
        identification: response.company.identification,
        cep: response.company.cep,
        address: response.company.address,
        neighborhood: response.company.neighborhood,
        phone: response.company.phone,
        dt_start_esocial: response.company.dt_start_esocial,
      });
      console.log(setCompanyData)
    } catch (error) {
      console.error("Erro ao buscar informações da empresa:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    handleClose();
    setCompanyData({
      email: "",
      cnpj: "",
      corporate_reason: "",
      fantasy_name: "",
      identification: "",
      cep: "",
      address: "",
      neighborhood: "",
      phone: "",
      dt_start_esocial: "",
    });
  };

  return (
    <CustomModal
      isOpen={modalOpen}
      mode="edit"
      title="Editar Empresa"
      handleClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.email ? "filled-error" : "standard-basic"}
                    label="E-mail"
                    type="text"
                    variant="standard"
                    placeholder="Digite o e-mail"
                    error={!!errors.email}
                    helperText={errors.email?.message}
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
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="corporate_reason"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.cnpj ? "filled-error" : "standard-basic"}
                    label="Razão social"
                    type="text"
                    variant="standard"
                    placeholder="Razão social"
                    error={!!errors.cnpj}
                    helperText={errors.cnpj?.message}
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="fantasy_name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.fantasy_name ? "filled-error" : "standard-basic"}
                    label="Nome fantasia"
                    type="text"
                    variant="standard"
                    placeholder="Nome fantasia"
                    error={!!errors.fantasy_name}
                    helperText={errors.fantasy_name?.message}
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="identification"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="cep"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="neighborhood"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="dt_start_esocial"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.dt_start_esocial ? "filled-error" : "standard-basic"}
                    label="Data de início e-social"
                    type="text"
                    variant="standard"
                    placeholder="Data de início e-social"
                    error={!!errors.dt_start_esocial}
                    helperText={errors.dt_start_esocial?.message}
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

/* <Modal open={modalOpen} onClose={handleCloseModal}>
      <ModalContainer>
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.name ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.email ? "filled-error" : "standard-basic"}
                    label="Email"
                    type="text"
                    variant="standard"
                    placeholder="Digite o email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <div className="create-admin-btn-submit">
              <button className="create-admin-btn-submit" type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        )}
      </ModalContainer>
    </Modal> */
