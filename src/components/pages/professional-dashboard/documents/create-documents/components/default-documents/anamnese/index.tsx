import "../index.css";
import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "../../checkbox/index.css";
import {
  CreateAnamneseDocumentRequest,
  createAnamneseDocumentRequestSchema,
} from "../../../../types";
import { applyRgMask } from "../../../../../../../utils/applyRgMask";
import { applyCpfMask } from "../../../../../../../utils/applyCpfMask";

import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import DocumentHeader from "../../../../../../../../assets/documents-template/documentHeader.png";
import { applyDateMask } from "../../../../../../../utils/applyDateMask";
import { applyCnpjMask } from "../../../../../../../utils/applyCnpjMask";
import { fetchCompanyById, fetchCompanyData, fetchEmployeeById, fetchEmployeeData } from "../../../../../api";

const CreateAnamnese = () => {
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [isCompanySelected, setIsCompanySelected] = useState(false);

  const contentAnamneseDocumentToExport = useRef(null);
  const [exams, setExams] = useState([
    { exam_name: "", exam_date: "", chief_complaint: "", clinical_history: "" },
  ]);
  const [formData, setFormData] =
    useState<CreateAnamneseDocumentRequest | null>(null);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateAnamneseDocumentRequest>({
    defaultValues: {
      companyId: "",
      companyName: "",
      corporateReason: "",
      cnpj: "",
      employeeId: "",
      employeeName: "",
      employeeCpf: "",
      employeeRg: "",
      employeeDateBirth: "",
      employeeRegistration: "",
      employeeFunction: "",
      employeeRole: "",
      employeeSector: "",
      physicalRisks: "",
      chemicalRisks: "",
      biologicalRisks: "",
      ergonomicRisks: "",
      mechanicalRiks: "",
      pathologicalPersonalAndFamilyHistory: "",
      conclusionObservation: "",
      location: "",

      physicalExam: [],
      generalCondition: [],
      facies: [],
      gait: [],
      rombergTest: [],
      visualAcuity: [],
      correction: [],
      cardiovascular: [],
      respiratory: [],
      abdominal: [],
      spine: [],
      upperLimbs: [],
      maneuversUpperLimbs: [],
      lowerLimbs: [],
      complementaryExams: [],
      conclusion: [],
      diagnosticHypothesis: "",
      specialSkills: [],
      exams: [
        {
          exam_name: "",
          exam_date: "",
          chief_complaint: "",
          clinical_history: "",
        },
      ],
    },
    resolver: zodResolver(createAnamneseDocumentRequestSchema),
  });

  type Employee = {
    id: string;
    name: string;
  }

  type Company = {
    id: string;
    fantasy_name: string;
  }

  const handlePrint = useReactToPrint({
    content: () => contentAnamneseDocumentToExport.current,
    documentTitle: formData
      ? `ANAMNESE_DOCUMENT_${formData?.employeeName}`
      : "ANAMNESE_DOCUMENT",
  });

  const addExams = () => {
    setExams([
      ...exams,
      {
        exam_name: "",
        exam_date: "",
        chief_complaint: "",
        clinical_history: "",
      },
    ]);
  };

  const onSubmit: SubmitHandler<CreateAnamneseDocumentRequest> = async (
    data
  ) => {
    setFormData(data);
  };

  useEffect(() => {
    if (formData) {
      handlePrint();
    }
  }, [formData]);

  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        const companiesData = await fetchCompanyData();
        setCompanies(companiesData.companies);
      } catch (error) {
        console.error("Erro ao buscar dados da empresa:", error);
      }
    };
    fetchCompaniesData();
  }, []);

  const handlefetchEmployeesAndFindCompanyById = async (companyId: string) => {
    try {
      const employeesData = await fetchEmployeeData(companyId);
      setEmployees(employeesData.employees);
      setIsCompanySelected(true);

      const companyDataById = await fetchCompanyById(companyId);
      setValue("companyName", companyDataById.company.fantasy_name);
      setValue("corporateReason", companyDataById.company.corporate_reason);
      setValue("cnpj", companyDataById.company.cnpj);
      console.log(companyDataById.company.fantasy_name)
    } catch (error) {
      console.log("Erro ao buscar funcionários e empresa selecionada: ", error)
    }
  }

  const handleFindEmployeeById = async (employeeId: string) => {
    try {
      const employeeDataById = await fetchEmployeeById(employeeId);
      setValue("employeeName", employeeDataById.employee.name);
      setValue("employeeCpf", employeeDataById.employee.cpf);
      setValue("employeeRg", employeeDataById.employee.rg);
      setValue("employeeDateBirth", employeeDataById.employee.dt_birth);
    } catch (error) {
      console.log("Erro ao buscar dados do funcionário: ", error);
    }
  }

  return (
    <div className="main-create-admin-admin-dashboard">
      <div className="create-admin-admin-dashboard-content">
        <h2 className="create-admin-page-title">Cadastrar Anamnese</h2>
        <div className="create-admin-form">
          <div className="document-container-to-export">
            <div ref={contentAnamneseDocumentToExport} className="content">
              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <img
                        alt=""
                        height={175}
                        src={DocumentHeader}
                        style={{ display: "block" }}
                        width={900}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>ANAMNESE OCUPACIONAL</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>EMPREGADOR: {formData?.companyName}</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Razão social: {formData?.corporateReason}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        CNPJ: {formData?.cnpj}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>FUNCIONÁRIO</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Nome: {formData?.employeeName}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        CPF: {formData?.employeeCpf}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        RG: {formData?.employeeRg}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        Data de Nascimento: {formData?.employeeDateBirth}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        Matrícula: {formData?.employeeRegistration}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        Função: {formData?.employeeFunction}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        Cargo: {formData?.employeeRole}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        Setor: {formData?.employeeSector}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>FATORES DE RISCO</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Físicos: {formData?.physicalRisks}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Químicos: {formData?.chemicalRisks}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Biológicos: {formData?.biologicalRisks}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Ergonômicos: {formData?.ergonomicRisks}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Mecânicos: {formData?.mechanicalRiks}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              {formData?.exams?.map((exam, index) => (
                <table
                  key={index}
                  align="center"
                  border={0}
                  id="Tabela_01"
                  width={900}
                >
                  <tbody>
                    <tr>
                      <td className="td-header-export-document">
                        <p className="p-text-export-document">
                          <center>EXAME {index + 1}</center>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-text-export-document">
                          Data do exame: {exam.exam_date}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-text-export-document">
                          Nome do exame: {exam.exam_name}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-text-export-document">
                          Queixa principal: {exam.chief_complaint}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="p-text-export-document">
                          História clínica: {exam.clinical_history}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document">
                      <p className="p-text-export-document">
                        <center>
                          ANTECEDENTES PESSOAIS E FAMILIARES PATOLÓGICOS
                        </center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        {formData?.pathologicalPersonalAndFamilyHistory}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>EXAME FÍSICO</center>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>ESTADO GERAL</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Estado</p>
                    </td>
                  </tr>
                  {formData?.generalCondition.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>FÁCIES</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Fácie</p>
                    </td>
                  </tr>
                  {formData?.facies.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>MARCHA</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Marcha</p>
                    </td>
                  </tr>
                  {formData?.gait.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>TESTE DE ROMBERG</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Teste</p>
                    </td>
                  </tr>
                  {formData?.rombergTest.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>ACUIDADE VISUAL</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Acuidade visual</p>
                    </td>
                  </tr>
                  {formData?.visualAcuity.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>CORREÇÃO</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Correção</p>
                    </td>
                  </tr>
                  {formData?.correction.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>CARDIOVASCULAR</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Cardiovascular</p>
                    </td>
                  </tr>
                  {formData?.cardiovascular.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>RESPIRATÓRIO</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Respiratório</p>
                    </td>
                  </tr>
                  {formData?.respiratory.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>ABDOMINAL</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Abdominal</p>
                    </td>
                  </tr>
                  {formData?.abdominal.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>COLUNA</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Coluna</p>
                    </td>
                  </tr>
                  {formData?.spine.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>MMSS</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">MMSS</p>
                    </td>
                  </tr>
                  {formData?.upperLimbs.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>MANOBRAS MMSS</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">MANOBRAS MMSS</p>
                    </td>
                  </tr>
                  {formData?.maneuversUpperLimbs.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>MMII</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">MMII</p>
                    </td>
                  </tr>
                  {formData?.lowerLimbs.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>EXAMES COMPLEMENTARES</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Exames complementares
                      </p>
                    </td>
                  </tr>
                  {formData?.complementaryExams.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>HIPÓTESE DIAGNÓSTICA</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Hipótese diagnóstica: {formData?.diagnosticHypothesis}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>CONCLUSÃO</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Conclusão</p>
                    </td>
                  </tr>
                  {formData?.conclusion.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>OBSERVAÇÕES DE CONCLUSÃO</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Observações de conclusão:{" "}
                        {formData?.conclusionObservation}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>APTIDÕES ESPECIAIS</center>
                      </p>
                    </td>
                  </tr>
                  {formData?.specialSkills.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>TIPO DE EXAME</center>
                      </p>
                    </td>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>
                          IDENTIFICAÇÃO DO MÉDICO RESPONSÁVEL PELO PCMSO
                        </center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p>
                        <center>
                          Exame médico admissional/periódico/demissional/ de
                          mudança de risco/ de retorno ao trabalho/ de
                          monitoração pontual (de acordo com a seleção)
                        </center>
                      </p>
                    </td>
                    <td colSpan={6}>
                      <p>
                        <center>
                          Dr. Artur Nóbrega de Oliveira | CRM-RN 7597 | CPF:
                          064.642.844-60
                        </center>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <p>
                        <center>Local: {formData?.location}</center>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td height={200} colSpan={6}>
                      <p style={{ textAlign: "left" }}>
                        <center>
                          Dr. Artur Nóbrega de Oliveira
                          <br />
                          MÉDICO DO TRABALHO
                          <br />
                          CRM-RN 7597
                        </center>
                      </p>
                    </td>
                    <td width={200} height={200} colSpan={6}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
              name="companyId"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <h4>Empregador</h4>
                  <Box>
                    <FormControl error={!!errors.companyId} fullWidth>
                      <InputLabel>Empresa</InputLabel>
                      <Select
                        id={errors.companyId ? "filled-error" : "standard-basic"}
                        label="Empresa"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handlefetchEmployeesAndFindCompanyById(e.target.value);
                        }}
                      >
                        {companies.map((company: Company) => (
                          <MenuItem key={company.id} value={company.id}>
                            {company.fantasy_name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              )}
            />

            <Controller
              name="companyName"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.companyName ? "filled-error" : "standard-basic"}
                    label="Empregador"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome do empregador"
                    error={!!errors.companyName}
                    helperText={errors.companyName?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="corporateReason"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.corporateReason ? "filled-error" : "standard-basic"
                    }
                    label="Razão social"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome da empresa"
                    error={!!errors.corporateReason}
                    helperText={errors.corporateReason?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cnpj"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.cnpj ? "filled-error" : "standard-basic"}
                    label="CNPJ"
                    type="text"
                    variant="standard"
                    placeholder="Digite o CNPJ da empresa"
                    error={!!errors.cnpj}
                    helperText={errors.cnpj?.message}
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyCnpjMask(e.target.value))
                    }
                  />
                </div>
              )}
            />

            <Controller
              name="employeeId"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <h4>Funcionário</h4>
                  <Box>
                    <FormControl error={!!errors.employeeId} fullWidth disabled={!isCompanySelected}>
                      <InputLabel>Colaborador</InputLabel>
                      <Select
                        id={errors.employeeId ? "filled-error" : "standard-basic"}
                        label="Colaborador"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleFindEmployeeById(e.target.value);
                        }}
                      >
                        {employees.map((employee: Employee) => (
                          <MenuItem key={employee.id} value={employee.id}>
                            {employee.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              )}
            />

            <Controller
              name="employeeName"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.employeeName ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome do empregado"
                    error={!!errors.employeeName}
                    helperText={errors.employeeName?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="employeeCpf"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.employeeCpf ? "filled-error" : "standard-basic"}
                    label="CPF"
                    type="text"
                    variant="standard"
                    placeholder="Digite o CPF do empregado"
                    error={!!errors.employeeCpf}
                    helperText={errors.employeeCpf?.message}
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyCpfMask(e.target.value))
                    }
                  />
                </div>
              )}
            />

            <Controller
              name="employeeRg"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.employeeRg ? "filled-error" : "standard-basic"}
                    label="RG"
                    type="text"
                    variant="standard"
                    placeholder="Digite o RG do empregado"
                    error={!!errors.employeeRg}
                    helperText={errors.employeeRg?.message}
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyRgMask(e.target.value))
                    }
                  />
                </div>
              )}
            />

            <Controller
              name="employeeDateBirth"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.employeeDateBirth
                        ? "filled-error"
                        : "standard-basic"
                    }
                    label="Data de nascimento"
                    type="text"
                    variant="standard"
                    placeholder="Digite a data de nascimento do empregado"
                    error={!!errors.employeeDateBirth}
                    helperText={errors.employeeDateBirth?.message}
                    required
                    {...field}
                    onChange={(e) =>
                      field.onChange(applyDateMask(e.target.value))
                    }
                  />
                </div>
              )}
            />

            <Controller
              name="employeeRegistration"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.employeeRegistration
                        ? "filled-error"
                        : "standard-basic"
                    }
                    label="Matrícula"
                    type="text"
                    variant="standard"
                    placeholder="Digite a matrícula do empregado"
                    error={!!errors.employeeRegistration}
                    helperText={errors.employeeRegistration?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="employeeFunction"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.employeeFunction
                        ? "filled-error"
                        : "standard-basic"
                    }
                    label="Função"
                    type="text"
                    variant="standard"
                    placeholder="Digite a função do empregado"
                    error={!!errors.employeeFunction}
                    helperText={errors.employeeFunction?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="employeeRole"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.employeeRole ? "filled-error" : "standard-basic"}
                    label="Cargo"
                    type="text"
                    variant="standard"
                    placeholder="Digite o cargo do empregado"
                    error={!!errors.employeeRole}
                    helperText={errors.employeeRole?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="employeeSector"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.employeeSector ? "filled-error" : "standard-basic"
                    }
                    label="Setor"
                    type="text"
                    variant="standard"
                    placeholder="Digite o setor do empregado"
                    error={!!errors.employeeSector}
                    helperText={errors.employeeSector?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="physicalRisks"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <h4>Fatores de riscos</h4>
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.physicalRisks ? "filled-error" : "standard-basic"
                    }
                    label="Riscos Físicos"
                    type="text"
                    variant="standard"
                    placeholder="Digite os fatores de riscos físicos"
                    error={!!errors.physicalRisks}
                    helperText={errors.physicalRisks?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="chemicalRisks"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.chemicalRisks ? "filled-error" : "standard-basic"
                    }
                    label="Riscos Químicos"
                    type="text"
                    variant="standard"
                    placeholder="Digite os fatores de riscos químicos"
                    error={!!errors.chemicalRisks}
                    helperText={errors.chemicalRisks?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="biologicalRisks"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.biologicalRisks ? "filled-error" : "standard-basic"
                    }
                    label="Riscos Biológicos"
                    type="text"
                    variant="standard"
                    placeholder="Digite os fatores de riscos biológicos"
                    error={!!errors.biologicalRisks}
                    helperText={errors.biologicalRisks?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="ergonomicRisks"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.ergonomicRisks ? "filled-error" : "standard-basic"
                    }
                    label="Riscos Ergônomicos"
                    type="text"
                    variant="standard"
                    placeholder="Digite os fatores de riscos ergônomicos"
                    error={!!errors.ergonomicRisks}
                    helperText={errors.ergonomicRisks?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="mechanicalRiks"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.mechanicalRiks ? "filled-error" : "standard-basic"
                    }
                    label="Riscos Mecânicos"
                    type="text"
                    variant="standard"
                    placeholder="Digite os fatores de riscos mecânicos"
                    error={!!errors.mechanicalRiks}
                    helperText={errors.mechanicalRiks?.message}
                    {...field}
                  />
                </div>
              )}
            />

            {exams.map((_, index) => (
              <div key={index}>
                <Controller
                  name={`exams.${index}.exam_date` as const}
                  control={control}
                  render={({ field }) => (
                    <div className="ctn-form-input-create-unit">
                      <h4>Exames</h4>
                      <TextField
                        className="form-input-create-unit"
                        id={
                          errors.exams?.[index]?.exam_date
                            ? "filled-error"
                            : "standard-basic"
                        }
                        label="Data do exame"
                        type="text"
                        variant="standard"
                        placeholder="Digite a data do exame"
                        error={!!errors.exams?.[index]?.exam_date}
                        helperText={errors.exams?.[index]?.exam_date?.message}
                        {...field}
                        onChange={(e) =>
                          field.onChange(applyDateMask(e.target.value))
                        }
                      />
                    </div>
                  )}
                />

                <Controller
                  name={`exams.${index}.exam_name` as const}
                  control={control}
                  render={({ field }) => (
                    <div className="ctn-form-input-create-unit">
                      <TextField
                        className="form-input-create-unit"
                        id={
                          errors.exams?.[index]?.exam_name
                            ? "filled-error"
                            : "standard-basic"
                        }
                        label="Nome do exame"
                        type="text"
                        variant="standard"
                        placeholder="Digite o nome do exame"
                        error={!!errors.exams?.[index]?.exam_name}
                        helperText={errors.exams?.[index]?.exam_name?.message}
                        {...field}
                      />
                    </div>
                  )}
                />

                <Controller
                  name={`exams.${index}.chief_complaint` as const}
                  control={control}
                  render={({ field }) => (
                    <div className="ctn-form-input-create-unit">
                      <TextField
                        className="form-input-create-unit"
                        id={
                          errors.exams?.[index]?.chief_complaint
                            ? "filled-error"
                            : "standard-basic"
                        }
                        label="Queixa principal"
                        type="text"
                        variant="standard"
                        placeholder="Digite a queixa principal"
                        error={!!errors.exams?.[index]?.chief_complaint}
                        helperText={
                          errors.exams?.[index]?.chief_complaint?.message
                        }
                        {...field}
                      />
                    </div>
                  )}
                />

                <Controller
                  name={`exams.${index}.clinical_history` as const}
                  control={control}
                  render={({ field }) => (
                    <div className="ctn-form-input-create-unit">
                      <TextField
                        className="form-input-create-unit"
                        id={
                          errors.exams?.[index]?.clinical_history
                            ? "filled-error"
                            : "standard-basic"
                        }
                        label="Histórico clínico"
                        type="text"
                        variant="standard"
                        placeholder="Digite o histórico clínico"
                        error={!!errors.exams?.[index]?.clinical_history}
                        helperText={
                          errors.exams?.[index]?.clinical_history?.message
                        }
                        {...field}
                      />
                    </div>
                  )}
                />
              </div>
            ))}

            <div className="create-unit-btn-submit">
              <button
                type="button"
                onClick={addExams}
                className="create-unit-btn-submit"
              >
                Adicionar Exame
              </button>
            </div>

            <Controller
              name="pathologicalPersonalAndFamilyHistory"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.pathologicalPersonalAndFamilyHistory ? "filled-error" : "standard-basic"
                    }
                    label="Antecedentes pessoais e familiares patológicos"
                    type="text"
                    variant="standard"
                    placeholder="Antecedentes pessoais e familiares patológicos"
                    error={!!errors.pathologicalPersonalAndFamilyHistory}
                    helperText={errors.pathologicalPersonalAndFamilyHistory?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="generalCondition"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Condição geral</h4>

                  <FormControlLabel
                    control={
                      <Checkbox
                        name="generalCondition"
                        value="Bom"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter(
                              (item: string) => item !== e.target.value
                            );
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Bom"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="generalCondition"
                        value="Regular"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Regular"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="generalCondition"
                        value="Ruim"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Ruim"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="generalCondition"
                        value="Comprometido"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Comprometido"
                  />

                  {errors.generalCondition && (
                    <p>{errors.generalCondition.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="facies"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Fácies</h4>

                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Atípica"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter(
                              (item: string) => item !== e.target.value
                            );
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Atípica"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Normal"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Normal"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Acromegálica"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Acromegálica"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Adenoidiana"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Adenoidiana"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Cushingóide"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Cushingóide"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="De depressão"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="De depressão"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="De dor"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="De dor"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Esclerodérmica"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Esclerodérmica"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Hipertireoidea"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Hipertireoidea"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Hipocrática"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Hipocrática"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Leonina"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Leonina"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Miastênica"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Miastênica"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Mixedematosa"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Mixedematosa"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Paralisia facial periférica"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Paralisia facial periférica"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Renal"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Renal"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Sindrômica"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Sindrômica"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="facies"
                        value="Tetânica"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Tetânica"
                  />

                  {errors.facies && <p>{errors.facies.message}</p>}
                </div>
              )}
            />

            <Controller
              name="gait"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Marcha</h4>

                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="Atípica"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter(
                              (item: string) => item !== e.target.value
                            );
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Atípica"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="Normal"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Normal"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="anserina"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="anserina"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="antálgica"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="antálgica"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="atáxica"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="atáxica"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="ceifante à direita"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="ceifante à direita"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="ceifante à esquerda"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="ceifante à esquerda"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="claudicante à direita"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="claudicante à direita"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="claudicante à esquerda"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="claudicante à esquerda"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="ebriosa"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="ebriosa"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="em tesoura"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="em tesoura"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="escarvante"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="escarvante"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="festinante"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="festinante"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="parkinsoniana"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="parkinsoniana"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="gait"
                        value="talonante"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="talonante"
                  />
                  {errors.gait && <p>{errors.gait.message}</p>}
                </div>
              )}
            />

            <Controller
              name="rombergTest"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Teste de Romberg</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rombergTest"
                        value="positivo"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="positivo"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rombergTest"
                        value="negativo"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="negativo"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rombergTest"
                        value="não realizado/não aplicável"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="não realizado/não aplicável"
                  />
                  {errors.rombergTest && <p>{errors.rombergTest.message}</p>}
                </div>
              )}
            />

            <Controller
              name="visualAcuity"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Acuidade Visual</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="não realizado"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="não realizado"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="20/20"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="20/20"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="20/25"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="20/25"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="20/30"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="20/30"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="20/40"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="20/40"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="20/50"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="20/50"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="20/70"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="20/70"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="20/100"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="20/100"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="20/200"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="20/200"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="conta dedos"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="conta dedos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="vê vultos"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="vê vultos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="enucleado"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="enucleado"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="visualAcuity"
                        value="c/ prótese"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="c/ prótese"
                  />
                  {errors.visualAcuity && <p>{errors.visualAcuity.message}</p>}
                </div>
              )}
            />

            <Controller
              name="correction"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Correção</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="correction"
                        value="c/ correção"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="c/ correção"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="correction"
                        value="s/ correção"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="s/ correção"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="correction"
                        value="c/ trocas"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="c/ trocas"
                  />
                  {errors.correction && <p>{errors.correction.message}</p>}
                </div>
              )}
            />

            <Controller
              name="cardiovascular"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Cardiovascular</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="cardiovascular"
                        value="normal"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="normal"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="cardiovascular"
                        value="ritmo cardíaco regular, com bulhas normofonéticas, sem sopros"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="ritmo cardíaco regular, com bulhas normofonéticas, sem sopros"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="cardiovascular"
                        value="ritmo cardíaco regular, com bulhas hipofonéticas, sem sopros"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="ritmo cardíaco regular, com bulhas hipofonéticas, sem sopros"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="cardiovascular"
                        value="ritmo cardíaco regular, com sopro diastólico em foco mitral"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="ritmo cardíaco regular, com sopro diastólico em foco mitral"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="cardiovascular"
                        value="ritmo cardíaco regular, com sopro diastólico em foco tricúspide"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="ritmo cardíaco regular, com sopro diastólico em foco tricúspide"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="cardiovascular"
                        value="ritmo cardíaco regular, com sopro sistólico em foco aórtico"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="ritmo cardíaco regular, com sopro sistólico em foco aórtico"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="cardiovascular"
                        value="ritmo cardíaco regular, com sopro sistólico em foco mitral"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="ritmo cardíaco regular, com sopro sistólico em foco mitral"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="cardiovascular"
                        value="ritmo cardíaco regular, com sopro sistólico em foco pulmonar"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="ritmo cardíaco regular, com sopro sistólico em foco pulmonar"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="cardiovascular"
                        value="ritmo cardíaco regular, com sopro sistólico em foco tricúspide"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="ritmo cardíaco regular, com sopro sistólico em foco tricúspide"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="cardiovascular"
                        value="alterado"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="alterado"
                  />
                  {errors.cardiovascular && (
                    <p>{errors.cardiovascular.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="respiratory"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Respiratório</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="respiratory"
                        value="normal"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="normal"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="respiratory"
                        value="murmúrio vesicular presente, simétrico, sem ruídos adventícios"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="murmúrio vesicular presente, simétrico, sem ruídos adventícios"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="respiratory"
                        value="alterado"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="alterado"
                  />
                  {errors.respiratory && <p>{errors.respiratory.message}</p>}
                </div>
              )}
            />

            <Controller
              name="abdominal"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Abdominal</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="abdominal"
                        value="Normal"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Normal"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="abdominal"
                        value="plano, flácido, indolor, sem massas ou viceromegalias palpáveis."
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="plano, flácido, indolor, sem massas ou viceromegalias palpáveis."
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="abdominal"
                        value="com cicatriz(es)"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="com cicatriz(es)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="abdominal"
                        value="sem cicatriz(es)"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="sem cicatriz(es)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="abdominal"
                        value="alterado"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="alterado"
                  />
                  {errors.abdominal && <p>{errors.abdominal.message}</p>}
                </div>
              )}
            />

            <Controller
              name="spine"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Coluna</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="spine"
                        value="normal"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="normal"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="spine"
                        value="amplitude articular preservada, sem desvios."
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="amplitude articular preservada, sem desvios."
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="spine"
                        value="amplit. articular preserv., com desvio (convexidade p/ a direita)"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="amplit. articular preserv., com desvio (convexidade p/ a direita)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="spine"
                        value="amplit. articular reduzida por queixas álgicas (flexão anterior)"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="amplit. articular reduzida por queixas álgicas (flexão anterior)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="spine"
                        value="amplit. articular reduzida por queixas álgicas (flexão posterior)"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="amplit. articular reduzida por queixas álgicas (flexão posterior)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="spine"
                        value="bloqueio voluntário da flexão anterior"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="bloqueio voluntário da flexão anterior"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="spine"
                        value="bloqueio voluntário da flexão posterior"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="bloqueio voluntário da flexão posterior"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="spine"
                        value="alterada"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="alterada"
                  />
                  {errors.spine && <p>{errors.spine.message}</p>}
                </div>
              )}
            />

            <Controller
              name="upperLimbs"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Membros Superiores</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="upperLimbs"
                        value="normais - sem abaulamentos, sem atrofias, sem alterações funcionais"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="normais - sem abaulamentos, sem atrofias, sem alterações funcionais"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="upperLimbs"
                        value="sem alterações funcionais"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="sem alterações funcionais"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="upperLimbs"
                        value="sem alterações funcionais e sem sinais flogísticos"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="sem alterações funcionais e sem sinais flogísticos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="upperLimbs"
                        value="sem sinais flogísticos"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="sem sinais flogísticos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="upperLimbs"
                        value="alterado"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="alterado"
                  />
                  {errors.upperLimbs && <p>{errors.upperLimbs.message}</p>}
                </div>
              )}
            />

            <Controller
              name="maneuversUpperLimbs"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Manobras Membros Superiores</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="maneuversUpperLimbs"
                        value="normal"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="normal"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="maneuversUpperLimbs"
                        value="negativo"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="negativo"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="maneuversUpperLimbs"
                        value="não realizado"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="não realizado"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="maneuversUpperLimbs"
                        value="positivo à direita"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="positivo à direita"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="maneuversUpperLimbs"
                        value="positivo à esquerda"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="positivo à esquerda"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="maneuversUpperLimbs"
                        value="positivo bilateralmente"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="positivo bilateralmente"
                  />
                  {errors.maneuversUpperLimbs && (
                    <p>{errors.maneuversUpperLimbs.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="lowerLimbs"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Membros Inferiores</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="lowerLimbs"
                        value="normais"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="normais"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="lowerLimbs"
                        value="sem abaulamentos, sem atrofias, sem alterações funcionais"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="sem abaulamentos, sem atrofias, sem alterações funcionais"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="lowerLimbs"
                        value="sem abaulamentos, sem atrofias, sem alterações funcionais, com varizes"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="sem abaulamentos, sem atrofias, sem alterações funcionais, com varizes"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="lowerLimbs"
                        value="sem abaulamentos, sem atrofias, sem alterações funcionais, sem varizes"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="sem abaulamentos, sem atrofias, sem alterações funcionais, sem varizes"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="lowerLimbs"
                        value="sem alterações funcionais"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="sem alterações funcionais"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="lowerLimbs"
                        value="sem alterações funcionais e sem sinais flogísticos"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="sem alterações funcionais e sem sinais flogísticos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="lowerLimbs"
                        value="sem sinais flogísticos"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="sem sinais flogísticos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="lowerLimbs"
                        value="alterado"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="alterado"
                  />
                  {errors.lowerLimbs && <p>{errors.lowerLimbs.message}</p>}
                </div>
              )}
            />

            <Controller
              name="complementaryExams"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Exames Complementares</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="complementaryExams"
                        value="Exames complementares anexos, com alterações clínicas"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Exames complementares anexos, com alterações clínicas"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="complementaryExams"
                        value="Exames complementares anexos, com alterações ocupacionais"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Exames complementares anexos, com alterações ocupacionais"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="complementaryExams"
                        value="Exames complementares anexos, sem alterações"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Exames complementares anexos, sem alterações"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="complementaryExams"
                        value="Exames complementares obrigatórios para a função não realizados"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Exames complementares obrigatórios para a função não realizados"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="complementaryExams"
                        value="Não realizou exames complementares"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Não realizou exames complementares"
                  />
                  {errors.complementaryExams && (
                    <p>{errors.complementaryExams.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="diagnosticHypothesis"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <h4>Hipótese diagnóstica</h4>
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.diagnosticHypothesis
                        ? "filled-error"
                        : "standard-basic"
                    }
                    label="Hipótese diagnóstica"
                    type="text"
                    variant="standard"
                    placeholder="Hipótese diagnóstica"
                    error={!!errors.diagnosticHypothesis}
                    helperText={errors.diagnosticHypothesis?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="conclusion"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Conclusão</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="conclusion"
                        value="Apto(a)"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Apto(a)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="conclusion"
                        value="Inapto(a)"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Inapto(a)"
                  />
                  {errors.conclusion && <p>{errors.conclusion.message}</p>}
                </div>
              )}
            />

            <Controller
              name="conclusionObservation"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <h4>Observação de conclusão</h4>
                  <TextField
                    className="form-input-create-admin"
                    id={
                      errors.conclusionObservation
                        ? "filled-error"
                        : "standard-basic"
                    }
                    label="Observação de conclusão"
                    type="text"
                    variant="standard"
                    placeholder="Observação de conclusão"
                    error={!!errors.conclusionObservation}
                    helperText={errors.conclusionObservation?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <Controller
              name="specialSkills"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Habilidades Especiais</h4>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="specialSkills"
                        value="Apto(a) para manipulação de alimentos"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Apto(a) para manipulação de alimentos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="specialSkills"
                        value="Apto(a) para realizar instalações e serviços em eletricidade (NR10)"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Apto(a) para realizar instalações e serviços em eletricidade (NR10)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="specialSkills"
                        value="Apto(a) para operação de máquinas autopropelidas (NR-12)"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Apto(a) para operação de máquinas autopropelidas (NR-12)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="specialSkills"
                        value="Apto(a) para uso de arma de fogo"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Apto(a) para uso de arma de fogo"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="specialSkills"
                        value="Apto(a) para trabalho em espaço confinado (NR-33)"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Apto(a) para trabalho em espaço confinado (NR-33)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="specialSkills"
                        value="Apto(a) para trabalho em altura (NR-35)"
                        defaultChecked={false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...value, e.target.value]
                            : value.filter((item) => item !== e.target.value);
                          onChange(newValue);
                        }}
                        color="primary"
                        {...control}
                      />
                    }
                    label="Apto(a) para trabalho em altura (NR-35)"
                  />
                  {errors.specialSkills && (
                    <p>{errors.specialSkills.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.location ? "filled-error" : "standard-basic"}
                    label="Local"
                    type="text"
                    variant="standard"
                    placeholder="Digite o local"
                    error={!!errors.location}
                    helperText={errors.location?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <div className="create-admin-btn-submit">
              <button className="create-unit-btn-submit" type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAnamnese;