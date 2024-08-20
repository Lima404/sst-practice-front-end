import { z } from "zod";
// import { customDateSchema } from "../../../../utils/convertDate";

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

export interface EditCompanyRequest {
  email: string;
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
  dt_start_esocial: z.string(),
});

export const editCompanySchema = z.object({
  email: z.string().email(),
  cnpj: z.string(),
  corporate_reason: z.string(),
  fantasy_name: z.string(),
  identification: z.string(),
  cep: z.string(),
  address: z.string(),
  neighborhood: z.string(),
  phone: z.string(),
  dt_start_esocial: z.string(),
});

export interface EditCompanyModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  companyId: string;
  userId: string;
  onUpdateSuccess: () => void;
}
