import { z } from "zod";

export interface CreateUploadDocumentRequest {
  name: string | null;
  contentType: string | null;
  companyId: string | null;
  employeeId: string | null;
  professionalId: string | null;
}

export const createUploadDocumentRequestSchema = z.object({
  name: z.string(),
  contentType: z.string(),
  companyId: z.string(),
  employeeId: z.string(),
  professionalId: z.string(),
});
