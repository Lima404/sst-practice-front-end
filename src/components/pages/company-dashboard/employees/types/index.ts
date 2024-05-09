import { z } from "zod";

export interface CreateEmployeesRequest {
    companyId: string | null;
    name: string,
    cpf: string,
    nis: string,
    rg: string,
    br_pdh: string,
    sex: string,
    dt_birth: string,
    phone: string,
    phone_number: string,
    blood_type: string,
}

export const createEmployeesSchema = z.object({
    companyId: z.string(),
    name: z.string(),
    cpf: z.string(),
    nis: z.string(),
    rg: z.string(),
    br_pdh: z.string(),
    sex: z.string(),
    dt_birth: z.coerce.date(),
    phone: z.string(),
    phone_number: z.string(),
    blood_type: z.string(),
});

export interface EditEmployeesRequest {
    companyId: string;
    name: string,
    cpf: string,
    nis: string,
    rg: string,
    br_pdh: string,
    sex: string,
    dt_birth: Date,
    phone: string,
    phone_number: string,
    blood_type: string,
}

export const editEmployeesSchema = z.object({
    companyId: z.string(),
    name: z.string(),
    cpf: z.string(),
    nis: z.string(),
    rg: z.string(),
    br_pdh: z.string(),
    sex: z.string(),
    dt_birth: z.coerce.date(),
    phone: z.string(),
    phone_number: z.string(),
    blood_type: z.string(),
});

export interface EditEmployeesModalProps {
    modalOpen: boolean;
    handleClose: () => void;
    employeeId: string;
    onUpdateSuccess: () => void;
}