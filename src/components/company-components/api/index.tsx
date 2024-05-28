import { api } from "../../../data/services/api";

export const fetchUnitDataCount = async (companyId: string) => {
  const response = await api.get(`/units/${companyId}`);
  return response.data;
}

export const fetchEmployeesDataCount = async (companyId: string) => {
  const response = await api.get(`/employees/${companyId}`);
  return response.data;
}