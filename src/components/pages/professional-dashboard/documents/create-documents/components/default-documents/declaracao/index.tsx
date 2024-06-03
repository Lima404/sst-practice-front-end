import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateStatementsRequest,
  createStatementsSchema,
} from "../../../../types";
import { applyCpfMask } from "../../../../../../../utils/applyCpfMask";
import { applyDateMask } from "../../../../../../../utils/applyDateMask";

import { useReactToPrint } from "react-to-print";
import DocumentHeader from "../../../../../../../../assets/documents-template/documentHeader.png";
import { useEffect, useRef, useState } from "react";

const CreateStatements = () => {
  const contentStatementDocumentToExport = useRef(null);
  const [formData, setFormData] = useState<CreateStatementsRequest | null>(
    null
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      dt_birth: "",
      cpf: "",
      text_field: "",
    },
    resolver: zodResolver(createStatementsSchema),
  });

  const handlePrint = useReactToPrint({
    content: () => contentStatementDocumentToExport.current,
    documentTitle: formData
      ? `${formData?.title}_${formData?.name}`
      : "DECLARACAO_",
  });

  const onSubmit: SubmitHandler<CreateStatementsRequest> = async (data) => {
    console.log(data);
    setFormData(data);
  };

  useEffect(() => {
    if (formData) {
      handlePrint();
    }
  }, [formData]);

  const titles = [
    "Laudo",
    "Relatório",
    "Receituário",
    "Encaminhamento",
    "Atestado médico",
    "Declaração de comparecimento",
  ];

  return (
    <div className="main-create-unit-company-dashboard">
      <div className="create-unit-company-dashboard-content">
        <h2 className="create-unit-page-title">Cadastrar declaração</h2>
        <div className="create-unit-form">
          <div className="document-container-to-export">
            <div ref={contentStatementDocumentToExport} className="content">
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
                        <center>{formData?.title}</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Nome: {formData?.name}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">
                        Nome: {formData?.dt_birth}
                      </p>
                    </td>
                    <td>
                      <p className="p-text-export-document">
                        Nome: {formData?.cpf}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td colSpan={6} height={650}>
                      <p className="p-text-export-document">
                        <center>{formData?.text_field}</center>
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

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <p>
                        <center>
                          Avenida Engenheiro Roberto Freire nº 1962, Box 489,
                          Capim Macio, Natal/RN, CEP 59.082-095.
                          <br />
                          Telefone: 84 9 8127 7221 | e-mail:
                          praticasst@outlook.com
                        </center>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel>Declaração</InputLabel>
                      <Select
                        id={errors.title ? "filled-error" : "standard-basic"}
                        label="Declaração"
                        required
                        {...field}
                      >
                        {titles.map((title) => (
                          <MenuItem key={title} value={title}>
                            {title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              )}
            />

            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
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
              name="text_field"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.text_field ? "filled-error" : "standard-basic"}
                    label="Anotações"
                    type="text"
                    variant="standard"
                    placeholder="Anotações"
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

export default CreateStatements;
