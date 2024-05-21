import { api } from "../../../../../data/services/api";
import { CreateEmployeesRequest, EditEmployeesRequest } from "../types";

export const createEmployees = async (employeesBody: CreateEmployeesRequest) => {
  const response = await api.post("/employees", employeesBody);
  return response.data;
};

export const fetchEmployeesData = async (companyId: string) => {
  const response = await api.get(`/employees/${companyId}`);
  return response.data;
}

export const editEmployees = async (id: string, employeesBody: EditEmployeesRequest) => {
  const response = await api.put(`/employees/update/${id}`, employeesBody);
  return response.data;
};

export const getEmployeesById = async (id: string) => {
  const response = await api.get(`/employee/${id}`);
  return response.data;
};

export const deleteEmployees = async (id: string) => {
  const response = await api.put(`/employee/delete/${id}`);
  return response.data;
}

export const fetchAllDocumentsByEmployeeIdData = async (employeeId: string) => {
  const response = await api.get(`/documents/${employeeId}`);
  return response.data;
}

export const getDocumentById = async (id: string) => {
  const response = await api.get(`/document/${id}`);
  return response.data;
}