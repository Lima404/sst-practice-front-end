import { api } from "../../../data/services/api";

export const fetchAdminDataCount = async () => {
  const response = await api.get("/admins");
  return response.data;
};

export const fetchCompanyDataCount = async () => {
  const response = await api.get("/companies");
  return response.data;
};

export const fetchProfessionalDataCount = async () => {
  const response = await api.get("/professionals");
  return response.data;
};