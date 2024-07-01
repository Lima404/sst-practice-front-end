import { z } from "zod";

export interface CreateUnitRequest {
  companyId: string | null;
  identification: string;
  cnpj: string;
  cnae: string;
  activity: string;
  degree_of_risk: string;
  cep: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  email: string;
  reference_contact: string;
  phone: string;
  legal_representative: string;
  cpf_legal_representative: string;
}

export const createUnitSchema = z.object({
  companyId: z.string(),
  identification: z.string(),
  cnpj: z.string(),
  cnae: z.string(),
  activity: z.string(),
  degree_of_risk: z.string(),
  cep: z.string(),
  address: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  email: z.string().email(),
  reference_contact: z.string(),
  phone: z.string(),
  legal_representative: z.string(),
  cpf_legal_representative: z.string(),
});

export interface EditUnitRequest {
  companyId: string;
  identification: string;
  cnpj: string;
  cnae: string;
  activity: string;
  degree_of_risk: string;
  cep: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  email: string;
  reference_contact: string;
  phone: string;
  legal_representative: string;
  cpf_legal_representative: string;
}

export const editUnitSchema = z.object({
  companyId: z.string(),
  identification: z.string(),
  cnpj: z.string(),
  cnae: z.string(),
  activity: z.string(),
  degree_of_risk: z.string(),
  cep: z.string(),
  address: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  email: z.string().email(),
  reference_contact: z.string(),
  phone: z.string(),
  legal_representative: z.string(),
  cpf_legal_representative: z.string(),
});

export interface EditUnitModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  unitId: string;
  onUpdateSuccess: () => void;
}

export interface FetchAllEmployeesByUnitIdProps {
  unitId: string;
}