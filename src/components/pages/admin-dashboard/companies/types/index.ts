import { z } from "zod";

export interface CreateCompanyRequest {
  email: string;
  password: string;
  cnpj: string;
  corporate_reason: string;
  fantasy_name: string;
  identification: string;
  cep: string;
  address: string;
  neighborhood: string;
  phone: string;
  dt_start_esocial: string; 
}

export const createCompanySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  cnpj: z.string(),
  corporate_reason: z.string(),
  fantasy_name: z.string(),
  identification: z.string(),
  cep: z.string(),
  address: z.string(),
  neighborhood: z.string(),
  phone: z.string(),
  dt_start_esocial: z.coerce.date(),
});