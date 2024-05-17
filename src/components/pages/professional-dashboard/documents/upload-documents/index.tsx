import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import "./index.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateUploadDocumentRequest,
  createUploadDocumentRequestSchema,
} from "../types/index";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const UploadDocuments = () => {
  // const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      contentType: "",
      companyId: "",
      employeeId: "",
      professionalId: "",
    },
    resolver: zodResolver(createUploadDocumentRequestSchema),
  });

  const onSubmit: SubmitHandler<CreateUploadDocumentRequest> = async () => {
    try {
      console.log("ok");
    } catch (err: any) {
      console.log(err);
    }
  };

  const companies = [
    { id: 1, name: 'Empresa 1' },
    { id: 2, name: 'Ricardo 10' },
    { id: 3, name: 'Breno' },
  ]

  return (
    <div className="main-create-admin-admin-dashboard">
      <div className="create-admin-admin-dashboard-content">
        <h2 className="create-admin-page-title">Enviar Documento</h2>
        <div className="create-admin-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            
            {/* <Controller
              name="companyId"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.companyId ? "filled-error" : "standard-basic"}
                    label="Empresa"
                    type="text"
                    variant="standard"
                    placeholder="Empresa"
                    error={!!errors.companyId}
                    helperText={errors.companyId?.message}
                    {...field}
                  />
                </div>
              )}
            /> */}

            <Controller
              name="companyId"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <Box>
                    <FormControl error={!!errors.companyId} fullWidth>
                      <InputLabel>Empresa</InputLabel>
                      <Select
                        id={errors.companyId ? "filled-error" : "standard-basic"}
                        label="Empresa"
                        {...field}
                      >
                        {companies.map((company) => (
                          <MenuItem key={company.id} value={company.id}>
                            {company.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              )}
            />

            <Controller
              name="employeeId"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.employeeId ? "filled-error" : "standard-basic"}
                    label="Colaborador"
                    type="text"
                    variant="standard"
                    placeholder="Colaborador"
                    error={!!errors.employeeId}
                    helperText={errors.employeeId?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.name ? "filled-error" : "standard-basic"}
                    label="Nome do documento"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome do documento"
                    error={!!errors.name}
                    helperText={errors.name?.message}
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
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
