import { api } from "../../../../../../data/services/api";
import { CreateUploadDocumentRequest } from "../../types";

export const fetchCompanyData = async () => {
  const response = await api.get("/companies");
  return response.data;
};

export const fetchEmployeeData = async (companyId: string) => {
  const response = await api.get(`employees/${companyId}`);
  return response.data;
}

export const uploadDocument = async (documentBody: CreateUploadDocumentRequest) => {
  const response = await api.post("/uploads", documentBody);
  return response.data;
};