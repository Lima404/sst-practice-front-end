import { api } from "../../../../../data/services/api";
import { CreateUnitRequest } from "../types";

export const createUnit = async (unitBody: CreateUnitRequest) => {
  const response = await api.post("/units", unitBody);
  return response.data;
};