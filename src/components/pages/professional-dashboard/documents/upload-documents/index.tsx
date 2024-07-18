import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import "./index.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateUploadDocumentRequest,
  createUploadDocumentRequestSchema,
} from "../types/index";
import { useContext, useEffect, useState } from "react";
import { fetchCompanyData, fetchEmployeeData, uploadDocument } from "./api";
import { AuthContext } from "../../../../../data/contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const UploadDocuments = () => {
  const { userTypeId } = useContext(AuthContext);
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [files, setFiles] = useState<FileList | null>(null);
  const [isCompanySelected, setIsCompanySelected] = useState(false); 

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      contentType: "",
      medicalConfidentiality: false,
      companyId: "",
      employeeId: "",
      professionalId: "",
      fileUpload: undefined,
    },
    resolver: zodResolver(createUploadDocumentRequestSchema),
  });

  const onSubmit: SubmitHandler<CreateUploadDocumentRequest> = async (data) => {
    try {
      const { name, companyId, employeeId } = data;

      if (!files || files.length === 0) {
        return;
      }

      const file = files[0];

      const documentBody = {
        name,
        contentType: "application/pdf",
        medicalConfidentiality: false,
        companyId,
        employeeId,
        professionalId: userTypeId,
      };
      const uploadResponse = await uploadDocument(documentBody);

      const signedURL = uploadResponse.signedUrl;

      await axios.put(signedURL, file, {
        headers: {
          'Content-Type': 'application/pdf',
        },
      });

      reset();
      setFiles(null);
      toast.success("Documento cadastrado com sucesso");

    } catch (error) {
      console.error("Erro ao enviar documento:", error);
    }
  };

  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        const companiesData = await fetchCompanyData();
        setCompanies(companiesData.companies);
      } catch (error) {
        console.error("Erro ao buscar dados da empresa:", error);
      }
    };
    fetchCompaniesData();
  }, []);

  const fetchEmployeesData = async (companyId: string) => {
    try {
      const employeesData = await fetchEmployeeData(companyId);
      setEmployees(employeesData.employees);
      setIsCompanySelected(true); 
    } catch (error) {
      console.log("Erro ao buscar dados do colaborador", error);
    }
  };

  type Employee = {
    id: string;
    name: string;
  }

  type Company = {
    id: string;
    fantasy_name: string;
  }

  return (
    <div className="main-create-admin-admin-dashboard">
      <div className="create-admin-admin-dashboard-content">
        <h2 className="create-admin-page-title">Enviar Documento</h2>
        <div className="create-admin-form">
          <form onSubmit={handleSubmit(onSubmit)}>

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
                        onChange={(e) => {
                          field.onChange(e);
                          fetchEmployeesData(e.target.value);
                        }}
                      >
                        {companies.map((company: Company) => (
                          <MenuItem key={company.id} value={company.id}>
                            {company.fantasy_name}
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
                  <Box>
                    <FormControl error={!!errors.employeeId} fullWidth disabled={!isCompanySelected}>
                      <InputLabel>Colaborador</InputLabel>
                      <Select
                        id={errors.employeeId ? "filled-error" : "standard-basic"}
                        label="Colaborador"
                        {...field}
                      >
                        {employees.map((employee: Employee) => (
                          <MenuItem key={employee.id} value={employee.id}>
                            {employee.name}
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

            <Controller
              name="fileUpload"
              control={control}
              render={() => (
                <div className="ctn-form-input-create-admin">
                  <Box>
                    <FormControl error={!!errors.fileUpload} fullWidth>
                      <div className="file-upload-container">
                        <div className="file-upload-wrapper">
                          <label className="custom-file-upload">
                            Escolher Arquivo
                            <input
                              id="file-upload"
                              type="file"
                              accept="application/pdf"
                              onChange={(e) => setFiles(e.target.files)}
                              className="file-upload-input"
                            />
                          </label>
                        </div>
                        {files && files[0] && <p className="file-name">{files[0].name}</p>}
                      </div>
                      {errors.fileUpload && <p className="error-text">{errors.fileUpload.message}</p>}
                    </FormControl>
                  </Box>
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
