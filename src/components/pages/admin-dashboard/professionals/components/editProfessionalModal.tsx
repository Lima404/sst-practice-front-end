import { Grid } from "@mui/material";
import {
  EditProfessionalModalProps,
  EditProfessionalRequest,
  editProfessionalSchema,
} from "../types";
import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CustomModal } from "../../../../customModal/CustomModal";
import Loader from "../../../../loader/Loader";
import { editProfessional, getProfessionalById } from "../api";
import { applyCpfMask } from "../../../../utils/applyCpfMask";
import { applyRgMask } from "../../../../utils/applyRgMask";
import { applyPhoneMask } from "../../../../utils/applyPhoneMask";

export const EditProfessionalModal = ({
  modalOpen,
  handleClose,
  professionalId,
  userId,
  onUpdateSuccess,
}: EditProfessionalModalProps) => {
  const [professionalData, setProfessionalData] =
    useState<EditProfessionalRequest>({
      name: "",
      email: "",
      cpf: "",
      rg: "",
      formation: "",
      organ: "",
      acronym: "",
      uf: "",
      title: "",
      phone_number: "",
    });
  const [loading, setLoading] = useState<boolean>(true);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      rg: "",
      formation: "",
      organ: "",
      acronym: "",
      uf: "",
      title: "",
      phone_number: "",
    },
    resolver: zodResolver(editProfessionalSchema),
  });

  useEffect(() => {
    if (modalOpen) {
      getProfessionalInfo();
    }
  }, [modalOpen]);

  useEffect(() => {
    reset({
      name: professionalData.name,
      email: professionalData.email,
      cpf: professionalData.cpf,
      rg: professionalData.rg,
      formation: professionalData.formation,
      organ: professionalData.organ,
      acronym: professionalData.acronym,
      uf: professionalData.uf,
      title: professionalData.title,
      phone_number: professionalData.phone_number,
    });
  }, [professionalData, reset]);

  const onSubmit: SubmitHandler<EditProfessionalRequest> = async (data) => {
    try {
      const formattedData = { ...data, userId: userId };
      await editProfessional(professionalId, formattedData);
      handleCloseModal();
      toast.success("Profissional editado com sucesso!");
      onUpdateSuccess();
    } catch (error) {
      toast.error("Erro ao editar o profissional. Por favor, tente novamente.");
      console.error("Erro ao editar o profissional:", error);
    }
  };

  const getProfessionalInfo = async () => {
    setLoading(true);
    try {
      const response = await getProfessionalById(professionalId);
      setProfessionalData({
        name: response.professional.name,
        email: response.professional.user.email,
        cpf: response.professional.cpf,
        rg: response.professional.rg,
        formation: response.professional.formation,
        organ: response.professional.organ,
        acronym: response.professional.acronym,
        uf: response.professional.uf,
        title: response.professional.title,
        phone_number: response.professional.phone_number,
      });
    } catch (error) {
      console.error("Erro ao buscar informações do profissional:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    handleClose();
    setProfessionalData({
      name: "",
      email: "",
      cpf: "",
      rg: "",
      formation: "",
      organ: "",
      acronym: "",
      uf: "",
      title: "",
      phone_number: "",
    });
  };

  return (
    <CustomModal
      isOpen={modalOpen}
      mode="edit"
      title="Editar Profissional"
      handleClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
                    id={errors.name ? "filled-error" : "standard-basic"}
                    label="Nome do profissional"
                    type="text"
                    variant="standard"
                    placeholder="Nome do profissional"
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
              name="email"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
                    id={errors.email ? "filled-error" : "standard-basic"}
                    label="E-mail"
                    type="text"
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
              name="cpf"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
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
              name="rg"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
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
            <Controller
              name="formation"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
                    id={errors.formation ? "filled-error" : "standard-basic"}
                    label="Formação"
                    type="text"
                    variant="standard"
                    placeholder="Formação"
                    error={!!errors.formation}
                    helperText={errors.formation?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="organ"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
                    id={errors.organ ? "filled-error" : "standard-basic"}
                    label="Órgão"
                    type="text"
                    variant="standard"
                    placeholder="Órgão"
                    error={!!errors.organ}
                    helperText={errors.organ?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="organ"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
                    id={errors.organ ? "filled-error" : "standard-basic"}
                    label="Órgão"
                    type="text"
                    variant="standard"
                    placeholder="Órgão"
                    error={!!errors.organ}
                    helperText={errors.organ?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="acronym"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
                    id={errors.acronym ? "filled-error" : "standard-basic"}
                    label="Sigla"
                    type="text"
                    variant="standard"
                    placeholder="Sigla"
                    error={!!errors.acronym}
                    helperText={errors.acronym?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="uf"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
                    id={errors.uf ? "filled-error" : "standard-basic"}
                    label="UF"
                    type="text"
                    variant="standard"
                    placeholder="UF"
                    error={!!errors.uf}
                    helperText={errors.uf?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
                    id={errors.title ? "filled-error" : "standard-basic"}
                    label="Título"
                    type="text"
                    variant="standard"
                    placeholder="Título"
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    required
                    {...field}
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
                <div className="ctn-form-input-create-professional">
                  <TextField
                    className="form-input-create-professional"
                    id={errors.phone_number ? "filled-error" : "standard-basic"}
                    label="Contato"
                    type="text"
                    variant="standard"
                    placeholder="Contato"
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
          
        </>
      )}
    </CustomModal>
  );
};
