import { z } from "zod";

export interface CreateEmployeesRequest {
  companyId: string | null;
  unitId: string | null;
  name: string;
  cpf: string;
  nis: string;
  rg: string;
  pcd: string;
  pcd_observation: string;
  sex: string;
  dt_birth: string;
  phone_number: string;
  admission_dt: string;
  function_start_dt: string;
  office: string;
  employee_function: string;
  registration: string;
  sector: string;
  cbo: string;
}

export const createEmployeesSchema = z.object({
  companyId: z.string(),
  unitId: z.string(),
  name: z.string(),
  cpf: z.string(),
  nis: z.string(),
  rg: z.string(),
  pcd: z.string(),
  pcd_observation: z.string(),
  sex: z.string(),
  dt_birth: z.string(),
  phone_number: z.string(),
  admission_dt: z.string(),
  function_start_dt: z.string(),
  office: z.string(),
  employee_function: z.string(),
  registration: z.string(),
  sector: z.string(),
  cbo: z.string(),
});

export interface EditEmployeesRequest {
  companyId: string;
  unitId: string;
  name: string;
  cpf: string;
  nis: string;
  rg: string;
  pcd: string;
  pcd_observation: string;
  sex: string;
  dt_birth: string;
  phone_number: string;
  admission_dt: string;
  function_start_dt: string;
  office: string;
  employee_function: string;
  registration: string;
  sector: string;
  cbo: string;
}

export const editEmployeesSchema = z.object({
  companyId: z.string(),
  unitId: z.string(),
  name: z.string(),
  cpf: z.string(),
  nis: z.string(),
  rg: z.string(),
  pcd: z.string(),
  pcd_observation: z.string(),
  sex: z.string(),
  dt_birth: z.string(),
  phone_number: z.string(),
  admission_dt: z.string(),
  function_start_dt: z.string(),
  office: z.string(),
  employee_function: z.string(),
  registration: z.string(),
  sector: z.string(),
  cbo: z.string(),
});

export interface EditEmployeesModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  employeeId: string;
  onUpdateSuccess: () => void;
}
