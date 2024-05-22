import { z } from "zod";

export interface CreateUploadDocumentRequest {
  name: string | null;
  contentType: string | null;
  companyId: string | null;
  employeeId: string | null;
  professionalId: string | null;
}

export const createUploadDocumentRequestSchema = z.object({
  name: z.string(),
  contentType: z.string(),
  companyId: z.string(),
  employeeId: z.string(),
  professionalId: z.string(),
});

export const createAnamneseDocumentRequestSchema = z.object({
  employer: z.string(),
  companyName: z.string(),
  cnpj: z.string(),
  employeeName: z.string(),
  employeeCpf: z.string(),
  employeeRg: z.string(),
  employeeDateBirth: z.string(),
  employeeRegistration: z.string(),
  employeeFunction: z.string(),
  employeeRole: z.string(),
  employeeSector: z.string(),
  physicalRisks: z.string(),
  chemicalRisks: z.string(),
  biologicalRisks: z.string(),
  ergonomicRisks: z.string(),
  mechanicalRiks: z.string(),
  examDate: z.string(),
  examName: z.string(),
  chiefComplaint: z.string(),
  clinicalHistory: z.string(),
  pathologicalPersonalAndFamilyHistory: z.string(),
  physicalExam: z.boolean(),
  generalCondition: z.boolean(),
  facies: z.boolean(),
  gait: z.boolean(),
  rombergTest: z.boolean(),
  visualAcuity: z.boolean(),
  correction: z.boolean(),
  cardiovascular: z.boolean(),
  respiratory: z.boolean(),
  abdominal: z.boolean(),
  spine: z.boolean(),
  upperLimbs: z.boolean(),
  maneuversUpperLimbs: z.boolean(),
  lowerLimbs: z.boolean(),
  complementaryExams: z.boolean(),
  diagnosticHypothesis: z.boolean(),
  conclusion: z.boolean(),
  specialSkills: z.boolean()
})

export interface CreateAnamneseDocumentRequest {
  employer: string;
  companyName: string;
  cnpj: string;
  employeeName: string;
  employeeCpf: string;
  employeeRg: string;
  employeeDateBirth: string;
  employeeRegistration: string;
  employeeFunction: string;
  employeeRole: string;
  employeeSector: string;
  physicalRisks: string;
  chemicalRisks: string;
  biologicalRisks: string;
  ergonomicRisks: string;
  mechanicalRiks: string;
  examDate: string;
  examName: string;
  chiefComplaint: string;
  clinicalHistory: string;
  pathologicalPersonalAndFamilyHistory: string;
  physicalExam: boolean;
  generalCondition: boolean;
  facies: boolean;
  gait: boolean;
  rombergTest: boolean;
  visualAcuity: boolean;
  correction: boolean;
  cardiovascular: boolean;
  respiratory: boolean;
  abdominal: boolean;
  spine: boolean;
  upperLimbs: boolean;
  maneuversUpperLimbs: boolean;
  lowerLimbs: boolean;
  complementaryExams: boolean;
  diagnosticHypothesis: boolean;
  conclusion: boolean;
  specialSkills: boolean;
}
