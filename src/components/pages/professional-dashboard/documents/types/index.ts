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

export interface CreateAsoDocumentRequest {
  // company
  corporate_reason: string;
  cnpj: string;
  //employee
  name: string;
  cpf: string;
  rg: string;
  dt_birth: string;
  registration: string;
  employeeFunction: string;
  office: string;
  sector: string
  // risk factors
  risk_factors: string[];
  // exams
  exam_date: string;
  exam_name: string;
  // conclusion
  conclusion: string;
  observation: string;
  // special skills
  special_skills: string[];
}

export const createAsoDocumentSchema = z.object({
  // company
  corporate_reason: z.string(),
  cnpj: z.string(),
  //employee
  name: z.string(),
  cpf: z.string(),
  rg: z.string(),
  dt_birth: z.string(),
  registration: z.string(),
  employeeFunction: z.string(),
  office: z.string(),
  sector: z.string(),
  // risk factors
  risk_factors: z.array(z.string()),
  // exams
  exam_date: z.string(),
  exam_name: z.string(),
  // conclusion
  conclusion: z.string(),
  observation: z.string(),
  // special skills
  special_skills: z.array(z.string()),
})
