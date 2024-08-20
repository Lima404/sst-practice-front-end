import { z } from "zod"

export interface CreateProfessionalRequest {
  email: string
  password: string
  name: string
  cpf: string
  rg: string
  formation: string
  organ: string
  acronym: string
  uf: string
  title: string
  phone_number: string
}

export interface EditProfessionalRequest {
  name: string;
  email: string,
  password?: string,
  cpf: string;
  rg: string;
  formation: string;
  organ: string;
  acronym: string;
  uf: string;
  title: string;
  phone_number: string
}

export const createProfessionalSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
  cpf: z.string(),  
  rg: z.string(),
  formation: z.string(),
  organ: z.string(),
  acronym: z.string(),
  uf: z.string(),
  title: z.string(),
  phone_number: z.string(),
});

export const editProfessionalSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6).optional(),
  cpf: z.string(),
  rg: z.string(),
  formation: z.string(),
  organ: z.string(),
  acronym: z.string(),
  uf: z.string(),
  title: z.string(),
  phone_number: z.string(),
});

export interface EditProfessionalModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  professionalId: string;
  userId: string;
  onUpdateSuccess: () => void;
}
