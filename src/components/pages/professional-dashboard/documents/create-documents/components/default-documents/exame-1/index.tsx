import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateExamTypeOneDocumentsRequest,
  CreateExamTypeOneDocumentsSchema,
} from "../../../../types";
import { applyCpfMask } from "../../../../../../../utils/applyCpfMask";
import { applyDateMask } from "../../../../../../../utils/applyDateMask";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import DocumentHeader from "../../../../../../../../assets/documents-template/documentHeader.png";

const CreateExamTypeOneDocuments = () => {
  const contentExameTypeOneDocumentToExport = useRef(null);
  const [formData, setFormData] =
    useState<CreateExamTypeOneDocumentsRequest | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      cpf: "",
      dt_birth: "",
      company: "",
      exams: [],
      chemical_agents: [],
      text_field: "",
    },
    resolver: zodResolver(CreateExamTypeOneDocumentsSchema),
  });

  const handlePrint = useReactToPrint({
    content: () => contentExameTypeOneDocumentToExport.current,
    documentTitle: formData
      ? `EXAME_TYPE_ONE_${formData?.name}`
      : "EXAME_TYPE_ONE_",
  });

  const onSubmit: SubmitHandler<CreateExamTypeOneDocumentsRequest> = async (
    data
  ) => {
    console.log(data);
    setFormData(data);
  };

  useEffect(() => {
    if (formData) {
      handlePrint();
    }
  }, [formData]);

  return (
    <div className="main-create-unit-company-dashboard">
      <div className="create-unit-company-dashboard-content">
        <h2 className="create-unit-page-title">Solicitação de exame tipo 1</h2>
        <div className="create-unit-form">
          <div className="document-container-to-export">
            <div ref={contentExameTypeOneDocumentToExport} className="content">
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

              <table align="center" border={0} id="Tabela_01" width="900">
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={7}>
                      <p className="p-text-export-document">
                        <center>FUNCIONÁRIO</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">
                        Nome: {formData?.name}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">
                        CPF: {formData?.cpf}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">
                        Data de nascimento: {formData?.dt_birth}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">
                        Empresa: {formData?.company}
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
                        <center>EXAMES</center>
                      </p>
                    </td>
                  </tr>
                  {formData?.exams.map((skill, index) => (
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
                        <center>Agentes químicos</center>
                      </p>
                    </td>
                  </tr>
                  {formData?.chemical_agents.map((skill, index) => (
                    <tr key={index}>
                      <td>
                        <p className="p-text-export-document">{skill}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width="900">
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>OUTROS EXAMES</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">
                        Empresa: {formData?.text_field}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Funcionário</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.name ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Nome"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    required
                    {...field}
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
              name="company"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.company ? "filled-error" : "standard-basic"}
                    label="Empresa"
                    type="text"
                    variant="standard"
                    placeholder="Empresa"
                    error={!!errors.company}
                    helperText={errors.company?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="exams"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Exames</h4>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Hemograma completo"
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
                      label="Hemograma completo"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Reticulócitos"
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
                      label="Reticulócitos"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Glicemia em jejum"
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
                      label="Glicemia em jejum"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Hemoglobina glicada"
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
                      label="Hemoglobina glicada"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Triglicerídeos"
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
                      label="Triglicerídeos"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Colesterol total"
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
                      label="Colesterol total"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Colesterol HDL"
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
                      label="Colesterol HDL"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Colesterol LDL"
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
                      label="Colesterol LDL"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="TGO"
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
                      label="TGO"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="TGP"
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
                      label="TGP"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Creatinina"
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
                      label="Creatinina"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="VDRL"
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
                      label="VDRL"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Sumário de urina"
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
                      label="Sumário de urina"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Coprocultura"
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
                      label="Coprocultura"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Parasitológico de fezes "
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
                      label="Parasitológico de fezes "
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Hepatite C (anti-HCV – IgG e IgM)"
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
                      label="Hepatite C (anti-HCV – IgG e IgM)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Hepatite B (anti-HBc IgG e IgM)"
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
                      label="Hepatite B (anti-HBc IgG e IgM)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Hepatite B (anti-HBs)"
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
                      label="Hepatite B (anti-HBs)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Hepatite B (HBsAG)"
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
                      label="Hepatite B (HBsAG)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Hepatite B (anti-HBE)"
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
                      label="Hepatite B (anti-HBE)"
                    />
                  </div>
                  {errors.exams && <p>{errors.exams.message}</p>}
                </div>
              )}
            />

            <Controller
              name="chemical_agents"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Agentes químicos</h4>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Hemograma completo"
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
                      label="Hemograma completo"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Ácido metilhipúrico urinário"
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
                      label="Ácido metilhipúrico urinário"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Tolueno urinário"
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
                      label="Tolueno urinário"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Ácido trans-transmucônico (TTMA) na urina"
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
                      label="Ácido trans-transmucônico (TTMA) na urina"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Ácido s-fenilmercaptúrico (S-PMA) na urina	"
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
                      label="Ácido s-fenilmercaptúrico (S-PMA) na urina	"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Colesterol total"
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
                      label="Colesterol total"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Chumbo na urina"
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
                      label="Chumbo na urina"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Colesterol LDL"
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
                      label="Colesterol LDL"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Chumbo no sangue (Pb-S)"
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
                      label="Chumbo no sangue (Pb-S)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Ácido Delta Amino Levulínico na urina (ALA-U)"
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
                      label="Ácido Delta Amino Levulínico na urina (ALA-U)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Fenol na urina"
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
                      label="Fenol na urina"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Ácido metilhipúrico na urina"
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
                      label="Ácido metilhipúrico na urina"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="chemical_agents"
                          value="Atividade da acetilcolinesterase eritrocitária"
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
                      label="Atividade da acetilcolinesterase eritrocitária"
                    />
                  </div>
                  {errors.chemical_agents && (
                    <p>{errors.chemical_agents.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="text_field"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Outros exames</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.text_field ? "filled-error" : "standard-basic"}
                    label="Outros exames"
                    type="text"
                    variant="standard"
                    placeholder="Exames"
                    error={!!errors.text_field}
                    helperText={errors.text_field?.message}
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

export default CreateExamTypeOneDocuments;
