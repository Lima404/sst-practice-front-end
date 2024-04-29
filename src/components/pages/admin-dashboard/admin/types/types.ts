import { z } from "zod";

export interface CreateAdminRequest {
  name: string;
  email: string;
  password: string;
}

export interface EditAdminRequest {
  name: string;
  email: string;
}

export interface GetAdminInfoProps {
  name: string;
  email: string;
}

export const createAdminSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const editAdminSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
});

export interface EditAdminModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  adminId: string;
}
