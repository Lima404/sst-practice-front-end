import { api } from "../../../../data/services/api";

export const fetchCompanyData = async () => {
  const response = await api.get("/companies");
  return response.data;
};

export const fetchEmployeeData = async (companyId: string) => {
  const response = await api.get(`employees/${companyId}`);
  return response.data;
}

export const fetchCompanyById = async (companyId: string) => {
  const response = await api.get(`company/${companyId}`);
  return response.data;
}

export const fetchEmployeeById = async (employeeId: string) => {
  const response = await api.get(`employee/${employeeId}`);
  return response.data;
}

export const fetchAllDocumentsByEmployeeIdProfessionalData = async (employeeId: string) => {
  const response = await api.get(`/sigilalDocuments/${employeeId}`);
  return response.data;
}

export const getDocumentById = async (id: string) => {
  const response = await api.get(`/document/${id}`);
  return response.data;
}

export const getEmployeesById = async (id: string) => {
  const response = await api.get(`/employee/${id}`);
  return response.data;
};