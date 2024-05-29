import "../index.css";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateAsoDocumentRequest,
  createAsoDocumentSchema,
} from "../../../../types";
import { applyCpfMask } from "../../../../../../../utils/applyCpfMask";
import { applyRgMask } from "../../../../../../../utils/applyRgMask";
import { applyCnpjMask } from "../../../../../../../utils/applyCnpjMask";
import { applyDateMask } from "../../../../../../../utils/applyDateMask";

import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import DocumentHeader from "../../../../../../../../assets/documents-template/documentHeader.png";

const CreateAsoDocuments = () => {
  const contentAsoDocumentToExport = useRef(null);
  const [exams, setExams] = useState([
    { exam_name: "", exam_date: "" },
  ]);
  const [formData, setFormData] = useState<CreateAsoDocumentRequest | null>(
    null
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      corporate_reason: "",
      cnpj: "",
      name: "",
      cpf: "",
      rg: "",
      dt_birth: "",
      registration: "",
      employeeFunction: "",
      office: "",
      sector: "",
      physicalRisks: "",
      chemicalRisks: "",
      biologicalRisks: "",
      ergonomicRisks: "",
      mechanicalRiks: "",
      conclusion: "",
      observation: "",
      location: "",
      special_skills: [],
      exams: [
        {
          exam_name: "",
          exam_date: "",
        },
      ],
    },
    resolver: zodResolver(createAsoDocumentSchema),
  });

  const handlePrint = useReactToPrint({
    content: () => contentAsoDocumentToExport.current,
    documentTitle: formData ? `ASO_DOCUMENT_${formData?.name}` : "ASO_DOCUMENT",
  });

  const addExams = () => {
    setExams([
      ...exams,
      {
        exam_name: "",
        exam_date: "",
      },
    ]);
  };

  const onSubmit: SubmitHandler<CreateAsoDocumentRequest> = async (data) => {
    setFormData(data);
    console.log(formData);
  };

  useEffect(() => {
    if (formData) {
      handlePrint();
    }
  }, [formData]);

  return (
    <div className="main-create-unit-company-dashboard">
      <div className="create-unit-company-dashboard-content">
        <h2 className="create-unit-page-title">Cadastrar ASO</h2>
        <div className="create-unit-form">
          <div className="document-container-to-export">
            <div ref={contentAsoDocumentToExport} className="content">
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
                        <center>ATESTADO DE SAÚDE OCUPACIONAL</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>EMPREGADOR</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Razão social: {formData?.corporate_reason}
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
                        Nome: {formData?.name}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        CPF: {formData?.cpf}
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
                        RG: {formData?.rg}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        Data de Nascimento: {formData?.dt_birth}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        Matrícula: {formData?.registration}
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
                        Função: {formData?.employeeFunction}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        Cargo: {formData?.office}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        Setor: {formData?.sector}
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
                      <td className="td-header-export-document" colSpan={6}>
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
                  </tbody>
                </table>
              ))}

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
                      <p className="p-text-export-document">
                        {formData?.conclusion}
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
                        <center>OBSERVAÇÃO</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        {formData?.observation}
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
                  {formData?.special_skills.map((skill, index) => (
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
                      <p>Local: {formData?.location}</p>
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
              name="corporate_reason"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Empregador</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={
                      errors.corporate_reason
                        ? "filled-error"
                        : "standard-basic"
                    }
                    label="Empresa"
                    type="text"
                    variant="standard"
                    placeholder="Empresa"
                    error={!!errors.corporate_reason}
                    helperText={errors.corporate_reason?.message}
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
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.cnpj ? "filled-error" : "standard-basic"}
                    label="CNPJ"
                    type="text"
                    variant="standard"
                    placeholder="CNPJ"
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
              name="name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Colaborador</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.cnpj ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Nome"
                    error={!!errors.cnpj}
                    helperText={errors.cnpj?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.cpf ? "filled-error" : "standard-basic"}
                    label="CPF"
                    type="text"
                    variant="standard"
                    placeholder="CPF"
                    error={!!errors.cpf}
                    helperText={errors.cpf?.message}
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
              name="rg"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.rg ? "filled-error" : "standard-basic"}
                    label="RG"
                    type="text"
                    variant="standard"
                    placeholder="RG"
                    error={!!errors.rg}
                    helperText={errors.rg?.message}
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
              name="dt_birth"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.dt_birth ? "filled-error" : "standard-basic"}
                    label="Data de nascimento"
                    type="text"
                    variant="standard"
                    placeholder="Data de nascimento"
                    error={!!errors.dt_birth}
                    helperText={errors.dt_birth?.message}
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
              name="registration"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.registration ? "filled-error" : "standard-basic"}
                    label="Matrícula"
                    type="text"
                    variant="standard"
                    placeholder="Matrícula"
                    error={!!errors.registration}
                    helperText={errors.registration?.message}
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
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={
                      errors.employeeFunction
                        ? "filled-error"
                        : "standard-basic"
                    }
                    label="Função"
                    type="text"
                    variant="standard"
                    placeholder="Função"
                    error={!!errors.employeeFunction}
                    helperText={errors.employeeFunction?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="office"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.office ? "filled-error" : "standard-basic"}
                    label="Cargo"
                    type="text"
                    variant="standard"
                    placeholder="Cargo"
                    error={!!errors.office}
                    helperText={errors.office?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="sector"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.sector ? "filled-error" : "standard-basic"}
                    label="Setor"
                    type="text"
                    variant="standard"
                    placeholder="Setor"
                    error={!!errors.sector}
                    helperText={errors.sector?.message}
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
              name="conclusion"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Conclusão</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.conclusion ? "filled-error" : "standard-basic"}
                    label="Conclusão"
                    type="text"
                    variant="standard"
                    placeholder="Conclusão"
                    error={!!errors.conclusion}
                    helperText={errors.conclusion?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="observation"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.observation ? "filled-error" : "standard-basic"}
                    label="Observação"
                    type="text"
                    variant="standard"
                    placeholder="Observação"
                    error={!!errors.observation}
                    helperText={errors.observation?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="special_skills"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Aptidões especiais</h4>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="special_skills"
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
                          name="special_skills"
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
                          name="special_skills"
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
                          name="special_skills"
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
                          name="special_skills"
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
                          name="special_skills"
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
                  </div>
                  {errors.special_skills && (
                    <p>{errors.special_skills.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h3>Local</h3>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.location ? "filled-error" : "standard-basic"}
                    label="Local"
                    type="text"
                    variant="standard"
                    placeholder="Local"
                    error={!!errors.location}
                    helperText={errors.location?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <div className="create-unit-btn-submit">
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

export default CreateAsoDocuments;
