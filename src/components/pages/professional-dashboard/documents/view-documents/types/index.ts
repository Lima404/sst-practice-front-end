import { z } from "zod";

export interface ViewDocumentsRequest {
  companyId: string;
  employeeId: string;
}

export const ViewDocumentsSchema = z.object({
  companyId: z.string(),
  employeeId: z.string(),
});