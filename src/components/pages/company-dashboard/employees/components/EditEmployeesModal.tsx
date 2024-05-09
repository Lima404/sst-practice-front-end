import { Grid } from "@mui/material";
import {
    EditEmployeesModalProps,
    EditEmployeesRequest,
    editEmployeesSchema
} from '../types'
import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editEmployees, getEmployeesById } from "../api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CustomModal } from "../../../../customModal/CustomModal";
import Loader from "../../../../loader/Loader";

export const EditEmployeeModal = ({
    modalOpen,
    handleClose,
    employeeId,
    onUpdateSuccess,
}:EditEmployeesModalProps) => {
    const [employeeData, setEmployeeData] = useState<EditEmployeesRequest> ({
        companyId: "",
        name: "",
        cpf: "",
        nis: "",
        rg: "",
        br_pdh: "",
        sex: "",
        dt_birth: 0, /* Aqui é um number ou uma string? */
        phone: "",
        phone_number: "",
        blood_type: "",
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
            br_pdh: "",
            sex: "",
            dt_birth: 0, /* Aqui é um number ou uma string? */
            phone: "",
            phone_number: "",
            blood_type: "",
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
            companyId: employeeData.companyId, /* erro type */
            name: employeeData.name,
            cpf: employeeData.cpf,
            nis: employeeData.nis,
            rg: employeeData.rg,
            br_pdh: employeeData.br_pdh,
            sex: employeeData.sex,
            dt_birth: employeeData.dt_birth, /* Aqui é um number ou uma string? */
            phone: employeeData.phone,
            phone_number: employeeData.phone_number,
            blood_type: employeeData.blood_type,
        });
      }, [employeeData, reset]);
    
    const onSubmit: SubmitHandler<EditEmployeesRequest> = async (data) => {
        try {
        console.log(data);
        const formattedData = { ...data };
        await editEmployees(employeeId, formattedData);
        handleCloseModal();
        toast.success("Colaborador editada com sucesso!");
        onUpdateSuccess();
        } catch (error) {
        toast.error("Erro ao editar o Colaborador. Por favor, tente novamente.");
        console.error("Erro ao editar o Colaborador:", error);
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
                br_pdh: response.employee.br_pdh,
                sex: response.employee.sex,
                dt_birth: response.employee.dt_birth, /* Aqui é um number ou uma string? */
                phone: response.employee.phone,
                phone_number: response.employee.phone_number,
                blood_type: response.employee.blood_type,
            });
        }catch (error) {
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
            br_pdh: "",
            sex: "",
            dt_birth: 0, /* Aqui é um number ou uma string? */
            phone: "",
            phone_number: "",
            blood_type: "",
        })
    };

 return(
    <CustomModal
        isOpen={modalOpen}
        mode="edit"
        title="Editar Colaboradores"
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
                            label="Identificação"
                            type="text"
                            variant="standard"
                            placeholder="Identificação"
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
                        name="cpf"
                        control={control}
                        render={({ field }) => (
                        <div className="ctn-form-input-create-unit">
                            <TextField
                            className="form-input-create-unit"
                            id={errors.cpf ? "filled-error" : "standard-basic"}
                            label="Identificação"
                            type="text"
                            variant="standard"
                            placeholder="Identificação"
                            error={!!errors.cpf}
                            helperText={errors.cpf?.message}
                            {...field}
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
                            label="Identificação"
                            type="text"
                            variant="standard"
                            placeholder="Identificação"
                            error={!!errors.nis}
                            helperText={errors.nis?.message}
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
                            label="Identificação"
                            type="text"
                            variant="standard"
                            placeholder="Identificação"
                            error={!!errors.rg}
                            helperText={errors.rg?.message}
                            {...field}
                            />
                        </div>
                        )}
                    />
                </Grid>

                <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
                    <Controller
                        name="br_pdh"
                        control={control}
                        render={({ field }) => (
                        <div className="ctn-form-input-create-unit">
                            <TextField
                            className="form-input-create-unit"
                            id={errors.br_pdh ? "filled-error" : "standard-basic"}
                            label="Identificação"
                            type="text"
                            variant="standard"
                            placeholder="Identificação"
                            error={!!errors.br_pdh}
                            helperText={errors.br_pdh?.message}
                            {...field}
                            />
                        </div>
                        )}
                    />
                </Grid>

                <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
                    <Controller
                        name="sex"
                        control={control}
                        render={({ field }) => (
                        <div className="ctn-form-input-create-unit">
                            <TextField
                            className="form-input-create-unit"
                            id={errors.sex ? "filled-error" : "standard-basic"}
                            label="Identificação"
                            type="text"
                            variant="standard"
                            placeholder="Identificação"
                            error={!!errors.sex}
                            helperText={errors.sex?.message}
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
                            label="Identificação"
                            type="text"
                            variant="standard"
                            placeholder="Identificação"
                            error={!!errors.dt_birth}
                            helperText={errors.dt_birth?.message}
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
                            label="Identificação"
                            type="text"
                            variant="standard"
                            placeholder="Identificação"
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
                        name="phone_number"
                        control={control}
                        render={({ field }) => (
                        <div className="ctn-form-input-create-unit">
                            <TextField
                            className="form-input-create-unit"
                            id={errors.phone_number ? "filled-error" : "standard-basic"}
                            label="Identificação"
                            type="text"
                            variant="standard"
                            placeholder="Identificação"
                            error={!!errors.phone_number}
                            helperText={errors.phone_number?.message}
                            {...field}
                            />
                        </div>
                        )}
                    />
                </Grid>

                <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"website"}>
                    <Controller
                        name="blood_type"
                        control={control}
                        render={({ field }) => (
                        <div className="ctn-form-input-create-unit">
                            <TextField
                            className="form-input-create-unit"
                            id={errors.blood_type ? "filled-error" : "standard-basic"}
                            label="Identificação"
                            type="text"
                            variant="standard"
                            placeholder="Identificação"
                            error={!!errors.blood_type}
                            helperText={errors.blood_type?.message}
                            {...field}
                            />
                        </div>
                        )}
                    />
                </Grid>
            </>
        )
    }

    </CustomModal>
 )

};