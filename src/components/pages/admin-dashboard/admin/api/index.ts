import { api } from "../../../../../data/services/api";
import { CreateAdminRequest, EditAdminRequest } from "../types/types";

export const fetchAdminData = async () => {
  const response = await api.get("/admins");
  return response.data;
};

export const editAdmin = async (id: string, adminBody: EditAdminRequest) => {
  const response = await api.put(`/admins/update/${id}`, adminBody);
  return response.data;
};

export const createAdmin = async (adminBody: CreateAdminRequest) => {
  const response = await api.post("/admins", adminBody);
  return response.data;
};

export const getAdminById = async (id: string) => {
  const response = await api.get(`/admins/${id}`);
  return response.data;
};
