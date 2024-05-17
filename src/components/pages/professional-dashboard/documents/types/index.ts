import { z } from "zod";

export interface CreateUploadDocumentRequest {
  name: string;
  contentType: string;
  companyId: string;
  employeeId: string;
  professionalId: string;
}

export const createUploadDocumentRequestSchema = z.object({
  name: z.string(),
  contentType: z.string(),
  companyId: z.string(),
  employeeId: z.string(),
  professionalId: z.string(),
});
