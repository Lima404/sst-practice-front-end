import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./index.css";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUploadDocumentRequestSchema } from "../types/index";
import { useEffect, useState } from "react";
import { fetchCompanyData, fetchEmployeeData } from "../upload-documents/api";
import { useNavigate } from "react-router-dom";
import { ViewDocumentsRequest } from "../view-documents/types";

const ChooseEmployee = () => {
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [isCompanySelected, setIsCompanySelected] = useState(false);

  const navigate = useNavigate();

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
      fileUpload: undefined,
    },
    resolver: zodResolver(createUploadDocumentRequestSchema),
  });

  const onSubmit = (data: ViewDocumentsRequest) => {
    navigate(`/documents/create/${data.employeeId}`);
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
  };

  type Company = {
    id: string;
    fantasy_name: string;
  };

  return (
    <div className="main-create-admin-admin-dashboard">
      <div className="create-admin-admin-dashboard-content">
        <h2 className="create-admin-page-title">Escolher colaborador</h2>
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
                        id={
                          errors.companyId ? "filled-error" : "standard-basic"
                        }
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
                    <FormControl
                      error={!!errors.employeeId}
                      fullWidth
                      disabled={!isCompanySelected}
                    >
                      <InputLabel>Colaborador</InputLabel>
                      <Select
                        id={
                          errors.employeeId ? "filled-error" : "standard-basic"
                        }
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

            <div className="create-admin-btn-submit">
              <button className="create-admin-btn-submit" type="submit">
                Avançar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChooseEmployee;
