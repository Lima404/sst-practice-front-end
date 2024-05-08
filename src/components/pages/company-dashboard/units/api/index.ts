import { api } from "../../../../../data/services/api";
import { CreateUnitRequest } from "../types";

export const createUnit = async (unitBody: CreateUnitRequest) => {
  const response = await api.post("/units", unitBody);
  return response.data;
};

export const fetchUnitData = async (companyId: string) => {
  const response = await api.get(`/units/${companyId}`);
  return response.data;
}