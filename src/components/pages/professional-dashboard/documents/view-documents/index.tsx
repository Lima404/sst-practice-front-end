import { useEffect, useState } from "react";
import { fetchCompanyById, fetchCompanyData, fetchEmployeeById, fetchEmployeeData } from "../../api";
import { Controller, useForm } from "react-hook-form";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ViewDocumentsRequest, ViewDocumentsSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";

const ViewDocuments = () => {

  type Employee = {
    id: string;
    name: string;
  }

  type Company = {
    id: string;
    fantasy_name: string;
  }

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ViewDocumentsRequest>({
    defaultValues: {
      companyId: "",
      employeeId: "",
    },
    resolver: zodResolver(ViewDocumentsSchema),
  });


  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [isCompanySelected, setIsCompanySelected] = useState(false);

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

  const handlefetchEmployeesAndFindCompanyById = async (companyId: string) => {
    try {
      const employeesData = await fetchEmployeeData(companyId);
      setEmployees(employeesData.employees);
      setIsCompanySelected(true);

      const companyDataById = await fetchCompanyById(companyId);

      console.log(companyDataById.company.fantasy_name)
    } catch (error) {
      console.log("Erro ao buscar funcionários e empresa selecionada: ", error)
    }
  }

  const handleFindEmployeeById = async (employeeId: string) => {
    try {
      const employeeDataById = await fetchEmployeeById(employeeId);
      console.log(employeeDataById);
    } catch (error) {
      console.log("Erro ao buscar dados do funcionário: ", error);
    }
  }

  const onSubmit = (data: ViewDocumentsRequest) => {
    console.log("Form data:", data);
    // Aqui você pode adicionar o código para lidar com os dados do formulário
  }

  return (
    <div className="main-create-admin-admin-dashboard">
      <div className="create-admin-admin-dashboard-content">
        <h2 className="create-admin-page-title">Visualizar documentos</h2>
        <div className="create-admin-form"></div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Controller
            name="companyId"
            control={control}
            render={({ field }) => (
              <div className="ctn-form-input-create-admin">
                <h4>Empregador</h4>
                <Box>
                  <FormControl error={!!errors.companyId} fullWidth>
                    <InputLabel>Empresa</InputLabel>
                    <Select
                      id={errors.companyId ? "filled-error" : "standard-basic"}
                      label="Empresa"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handlefetchEmployeesAndFindCompanyById(e.target.value);
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
                <h4>Funcionário</h4>
                <Box>
                  <FormControl error={!!errors.employeeId} fullWidth disabled={!isCompanySelected}>
                    <InputLabel>Colaborador</InputLabel>
                    <Select
                      id={errors.employeeId ? "filled-error" : "standard-basic"}
                      label="Colaborador"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleFindEmployeeById(e.target.value);
                      }}
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
            <button className="create-unit-btn-submit" type="submit">
              Visualizar documentos
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ViewDocuments;