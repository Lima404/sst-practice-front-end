import { Grid } from "@mui/material";
import {
  EditAdminModalProps,
  EditAdminRequest,
  editAdminSchema,
} from "../types/types";
import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editAdmin, getAdminById } from "../api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CustomModal } from "../../../../customModal/CustomModal";
import Loader from "../../../../loader/Loader";

export const EditAdminModal = ({
  modalOpen,
  handleClose,
  adminId,
  userId,
  onUpdateSuccess,
}: EditAdminModalProps) => {
  const [adminData, setAdminData] = useState<EditAdminRequest>({
    name: "",
    email: "",
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
    },
    resolver: zodResolver(editAdminSchema),
  });

  useEffect(() => {
    if (modalOpen) {
      getAdminInfo();
    }
  }, [modalOpen]);

  useEffect(() => {
    reset({
      name: adminData.name,
      email: adminData.email,
    });
  }, [adminData, reset]);

  const onSubmit: SubmitHandler<EditAdminRequest> = async (data) => {
    try {
      console.log(data);
      const formattedData = { ...data, userId: userId };
      await editAdmin(adminId, formattedData);
      handleCloseModal();
      toast.success("Admin editado com sucesso!");
      onUpdateSuccess();
    } catch (error) {
      toast.error("Erro ao editar o admin. Por favor, tente novamente.");
      console.error("Erro ao editar o admin:", error);
    }
  };

  const getAdminInfo = async () => {
    setLoading(true);
    try {
      const response = await getAdminById(adminId);
      setAdminData({
        name: response.admin.name,
        email: response.admin.user.email,
      });
    } catch (error) {
      console.error("Erro ao buscar informações do admin:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    handleClose();
    setAdminData({ name: "", email: "" });
  };

  return (
    <CustomModal
      isOpen={modalOpen}
      mode="edit"
      title="Editar Administrador"
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
          </Grid>

          <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
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
