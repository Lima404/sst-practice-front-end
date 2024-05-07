import { z } from "zod";

export interface CreateUnitRequest {
  companyId: string;
  identification: string;
  cnpj: string;
  cnea: string;
  activity: string;
  degree_of_risk: string;
  aso: string;
  cep: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  legal_representative: string;
  cpf_legal_representative: string;
  cipa_type: string;
  num_employees_cipa: number;
}

export const createUnitSchema = z.object({
  companyId: z.string(),
  identification: z.string(),
  cnpj: z.string(),
  cnea: z.string(),
  activity: z.string(),
  degree_of_risk: z.string(),
  aso: z.string(),
  cep: z.string(),
  address: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  email: z.string().email(),
  phone: z.string(),
  legal_representative: z.string(),
  cpf_legal_representative: z.string(),
  cipa_type: z.string(),
  num_employees_cipa: z.coerce.number(),
});