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
  location: z.string(),
  physicalExam: z.array(z.string()),
  generalCondition: z.array(z.string()),
  facies: z.array(z.string()),
  gait: z.array(z.string()),
  rombergTest: z.array(z.string()),
  visualAcuity: z.array(z.string()),
  correction: z.array(z.string()),
  cardiovascular: z.array(z.string()),
  respiratory: z.array(z.string()),
  abdominal: z.array(z.string()),
  spine: z.array(z.string()),
  upperLimbs: z.array(z.string()),
  maneuversUpperLimbs: z.array(z.string()),
  lowerLimbs: z.array(z.string()),
  complementaryExams: z.array(z.string()),
  diagnosticHypothesis: z.string(),
  conclusion: z.array(z.string()),
  conclusionObservation: z.string(),
  specialSkills: z.array(z.string())
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
  location: string;
  physicalExam: string[];
  generalCondition: string[];
  facies: string[];
  gait: string[];
  rombergTest: string[];
  visualAcuity: string[];
  correction: string[];
  cardiovascular: string[];
  respiratory: string[];
  abdominal: string[];
  spine: string[];
  upperLimbs: string[];
  maneuversUpperLimbs: string[];
  lowerLimbs: string[];
  complementaryExams: string[];
  diagnosticHypothesis: string;
  conclusion: string[];
  conclusionObservation: string;
  specialSkills: string[];
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
  physicalRisks: string;
  chemicalRisks: string;
  biologicalRisks: string;
  ergonomicRisks: string;
  mechanicalRiks: string;
  // exams
  exam_date: string;
  exam_name: string;
  // conclusion
  conclusion: string;
  observation: string;
  location: string;
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
  physicalRisks: z.string(),
  chemicalRisks: z.string(),
  biologicalRisks: z.string(),
  ergonomicRisks: z.string(),
  mechanicalRiks: z.string(),
  // exams
  exam_date: z.string(),
  exam_name: z.string(),
  // conclusion
  conclusion: z.string(),
  observation: z.string(),
  location: z.string(),
  // special skills
  special_skills: z.array(z.string()),
})

export interface CreateStatementsRequest {
  title: string,
  name: string;
  cpf: string;
  dt_birth: string;
  text_field: string;
}

export const createStatementsSchema = z.object({
  title: z.string(),
  name: z.string(),
  cpf: z.string(),
  dt_birth: z.string(),
  text_field: z.string(),
})

export interface CreateEspecialDocumentsRequest {
  name: string;
  cpf: string;
  adress: string;
  drugs_name: string;
  use_mode: string;
  quantity: string;
}

export const CreateEspecialDocumentsSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  adress: z.string(),
  drugs_name: z.string(),
  use_mode: z.string(),
  quantity: z.string(),
})

export interface CreateExamTypeOneDocumentsRequest {
  name: string;
  cpf: string;
  dt_birth: string;
  company: string;
  exams: string[];
  chemical_agents: string[];
  text_field: string;
}

export const CreateExamTypeOneDocumentsSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  dt_birth: z.string(),
  company: z.string(),
  exams: z.array(z.string()),
  chemical_agents: z.array(z.string()),
  text_field: z.string(),
})

export interface CreateExamTypeTwoDocumentsRequest {
  name: string;
  cpf: string;
  dt_birth: string;
  corporate_reason: string;
  exames: string[];
}

export const CreateExamTypeTwoDocumentsSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  dt_birth: z.string(),
  corporate_reason: z.string(),
  exames: z.array(z.string()),
})