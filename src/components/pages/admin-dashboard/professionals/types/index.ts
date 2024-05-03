import { z } from "zod"

export interface CreateProfessionalRequest {
  email: string
  password: string
  name: string
  cpf: string
  nis: string
  rg: string
  cbo: string
  formation: string
  organ: string
  acronym: string
  ccr: string
  uf: string
  title: string
  jobFunction: string
}

export interface EditProfessionalRequest {
  name: string;
  email: string,
  password?: string,
  cpf: string;
  nis: string;
  rg: string;
  cbo: string;
  formation: string;
  organ: string;
  acronym: string;
  ccr: string;
  uf: string;
  title: string;
  professionalFunction: string
}

export const createProfessionalSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
  cpf: z.string(),  
  nis: z.string(),
  rg: z.string(),
  cbo: z.string(),
  formation: z.string(),
  organ: z.string(),
  acronym: z.string(),
  ccr: z.string(),
  uf: z.string(),
  title: z.string(),
  jobFunction: z.string()
});

export const editProfessionalSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6).optional(),
  cpf: z.string(),
  nis: z.string(),
  rg: z.string(),
  cbo: z.string(),
  formation: z.string(),
  organ: z.string(),
  acronym: z.string(),
  ccr: z.string(),
  uf: z.string(),
  title: z.string(),
  professionalFunction: z.string()
});

export interface EditProfessionalModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  professionalId: string;
  userId: string;
  onUpdateSuccess: () => void;
}
