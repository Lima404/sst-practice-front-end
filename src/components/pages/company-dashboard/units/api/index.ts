import { api } from "../../../../../data/services/api";
import { CreateUnitRequest, EditUnitRequest } from "../types";

export const createUnit = async (unitBody: CreateUnitRequest) => {
  const response = await api.post("/units", unitBody);
  return response.data;
};

export const fetchUnitData = async (companyId: string) => {
  const response = await api.get(`/units/${companyId}`);
  return response.data;
}

export const editUnit = async (id: string, unitBody: EditUnitRequest) => {
  const response = await api.put(`/unit/update/${id}`, unitBody);
  return response.data;
};

export const getUnitById = async (id: string) => {
  const response = await api.get(`/unit/${id}`);
  return response.data;
};

export const deleteUnit = async (id: string) => {
  const response = await api.put(`/unit/delete/${id}`);
  return response.data;
}