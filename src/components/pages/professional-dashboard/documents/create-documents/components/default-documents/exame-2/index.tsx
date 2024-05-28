import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applyCpfMask } from "../../../../../../../utils/applyCpfMask";
import { applyDateMask } from "../../../../../../../utils/applyDateMask";
import { CreateExamTypeTwoDocumentsRequest, CreateExamTypeTwoDocumentsSchema } from "../../../../types";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import DocumentHeader from "../../../../../../../../assets/documents-template/documentHeader.png";

const CreateExamTypeTwoDocuments = () => {
  const contentExamTypeTwoDocumentToExport = useRef(null);
  const [formData, setFormData] = useState<CreateExamTypeTwoDocumentsRequest | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      cpf: "", 
      dt_birth: "",
      corporate_reason: "", 
      exams: [],
    },
    resolver: zodResolver(CreateExamTypeTwoDocumentsSchema),
  });

  const handlePrint = useReactToPrint({
    content: () => contentExamTypeTwoDocumentToExport.current,
    documentTitle: formData ? `EXAM_TYPE_TWO_${formData?.name}` : "EXAM_TYPE_TWO_",
  });

  const onSubmit: SubmitHandler<CreateExamTypeTwoDocumentsRequest> = async (data) => {
    console.log(data);
    setFormData(data);
  };

  useEffect(() => {
    if (formData) {
      handlePrint();
    }
  }, [formData]);

  return (
    <div className="main-create-admin-admin-dashboard">
      <div className="create-admin-admin-dashboard-content">
        <h2 className="create-admin-page-title">Cadastrar Receituário Especial</h2>
        <div className="create-admin-form">

          <div className="document-container-to-export">
            <div ref={contentExamTypeTwoDocumentToExport} className="content">

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <img alt="" height={175} src={DocumentHeader} style={{ display: "block" }} width={900} />
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width="900">
                <tbody>
                <tr>
                  <td className="td-header-export-document" colSpan={7}>
                    <p className="p-text-export-document"><center>FUNCIONÁRIO</center></p>
                  </td>
                </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">Nome: {formData?.name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">CPF: {formData?.cpf}</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">Data de nascimento: {formData?.dt_birth}</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">Empresa: {formData?.corporate_reason}</p>
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
                    placeholder="Digite o nome do paciente"
                    error={!!errors.name}
                    helperText={errors.name?.message}
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
                    placeholder="digite o CPF do paciente"
                    error={!!errors.cpf}
                    helperText={errors.cpf?.message}
                    {...field}
                    onChange={(e) => field.onChange(applyCpfMask(e.target.value))}
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
                    {...field}
                    onChange={(e) => field.onChange(applyDateMask(e.target.value))}
                  />
                </div>
              )}
            />

            <Controller
              name="corporate_reason"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.corporate_reason ? "filled-error" : "standard-basic"}
                    label="Empresa"
                    type="text"
                    variant="standard"
                    placeholder="Empresa"
                    error={!!errors.corporate_reason}
                    helperText={errors.corporate_reason?.message}
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
                          value="Audiometria tonal (ocupacional)"
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
                      label="Audiometria tonal (ocupacional)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Espirometria (prova de função pulmonar – ocupacional)"
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
                      label="Espirometria (prova de função pulmonar – ocupacional)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Radiografia de tórax (2 incidências – padrão OIT)"
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
                      label="Radiografia de tórax (2 incidências – padrão OIT)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Eletrocardiograma (ECG)"
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
                      label="Eletrocardiograma (ECG)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="exams"
                          value="Eletroencefalograma (EEG)"
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
                      label="Eletroencefalograma (EEG)"
                    />
                  </div>
                  {errors.exams && <p>{errors.exams.message}</p>}
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

export default CreateExamTypeTwoDocuments;
