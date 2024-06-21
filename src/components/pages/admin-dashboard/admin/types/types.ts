import { z } from "zod";

export interface CreateAdminRequest {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  password: string;
}

export interface EditAdminRequest {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
}

export interface GetAdminInfoProps {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
}

export const createAdminSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  cpf: z.string(),
  phone_number: z.string(),
  password: z.string().min(6),
});

export const editAdminSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  cpf: z.string(),
  phone_number: z.string(),
});

export interface EditAdminModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  adminId: string;
  userId: string;
  onUpdateSuccess: () => void;
}
