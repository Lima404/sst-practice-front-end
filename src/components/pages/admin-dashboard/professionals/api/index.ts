import { api } from "../../../../../data/services/api";
import { CreateProfessionalRequest, EditProfessionalRequest } from "../types";

export const createProfessional = async (professionalBody: CreateProfessionalRequest) => {
  const response = await api.post("/professionals", professionalBody);
  return response.data;
};

export const fetchProfessionalData = async () => {
  const response = await api.get("/professionals");
  return response.data;
};

export const editProfessional = async (id: string, professionalBody: EditProfessionalRequest) => {
  const response = await api.put(`/professional/update/${id}`, professionalBody);
  return response.data;
};

export const getProfessionalById = async (id: string) => {
  const response = await api.get(`/professional/${id}`);
  return response.data;
};