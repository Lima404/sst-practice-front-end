import { api } from "../../../../../services/api";
import { CreateCompanyRequest, EditCompanyRequest } from "../types";

export const createCompany = async (companyBody: CreateCompanyRequest) => {
  const response = await api.post("/companies", companyBody);
  return response.data;
};

export const fetchCompanyData = async () => {
  const response = await api.get("/companies");
  return response.data;
};

export const editCompany = async (id: string, companyBody: EditCompanyRequest) => {
  const response = await api.put(`/company/update/${id}`, companyBody);
  return response.data;
};

export const getCompanyById = async (id: string) => {
  const response = await api.get(`/company/${id}`);
  return response.data;
};