import { api } from "../../../../../services/api";
import { CreateCompanyRequest } from "../types";

export const createCompany = async (companyBody: CreateCompanyRequest) => {
  const response = await api.post("/companies", companyBody);
  return response.data;
};