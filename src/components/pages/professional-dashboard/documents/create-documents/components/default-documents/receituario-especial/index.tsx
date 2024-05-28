import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applyCpfMask } from "../../../../../../../utils/applyCpfMask";
import { CreateEspecialDocumentsRequest, CreateEspecialDocumentsSchema } from "../../../../types";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import DocumentHeader from "../../../../../../../../assets/documents-template/documentHeader.png";
import { applyRgMask } from "../../../../../../../utils/applyRgMask";
import { applyDateMask } from "../../../../../../../utils/applyDateMask";
import { applyPhoneMask } from "../../../../../../../utils/applyPhoneMask";

const CreateEspecialDocuments = () => {
  const contentEspecialDocumentToExport = useRef(null);
  const [formData, setFormData] = useState<CreateEspecialDocumentsRequest | null>(null);
  const [medications, setMedications] = useState([
    { drugs_name: "", quantity: "", use_mode: "" },
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEspecialDocumentsRequest>({
    defaultValues: {
      name: "",
      cpf: "",
      adress: "",
      buyer_name: "",
      buyer_rg: "",
      buyer_phone: "",
      buyer_address: "",
      date: "",
      pharmacist_signature: "",
      medications: [{ drugs_name: "", use_mode: "", quantity: "" }],
    },
    resolver: zodResolver(CreateEspecialDocumentsSchema),
  });

  const handlePrint = useReactToPrint({
    content: () => contentEspecialDocumentToExport.current,
    documentTitle: formData 
    ? `RECEITUARIO_ESPECIAL${formData?.name}` 
    : "RECEITUARIO_ESPECIAL",
  });

  const onSubmit: 
  SubmitHandler<CreateEspecialDocumentsRequest> = async (data) => {
    console.log(data);
    setFormData(data);
  };

  useEffect(() => {
    if (formData) {
      handlePrint();
    }
  }, [formData]);

  const addMedication = () => {
    setMedications([
      ...medications,
      { drugs_name: '', quantity: '', use_mode: '' },
    ]);
  };

  return (
    <div className="main-create-admin-admin-dashboard">
      <div className="create-admin-admin-dashboard-content">
        <h2 className="create-admin-page-title">
          Cadastrar Receituário Especial
        </h2>
        <div className="create-admin-form">

          <div className="document-container-to-export">
            <div ref={contentEspecialDocumentToExport} className="content">

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
                        <center>RECEITUÁRIO ESPECIAL</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>IDENTIFICAÇÃO DO EMITENTE</center>
                      </p>
                    </td>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>RECEITUÁRIO CONTROLE ESPECIAL</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">Nome: ARTUR NOBREGA DE OLIVEIRA</p>
                    </td>
                    <td colSpan={6}>
                      <p className="p-text-export-document">Data: </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">CRM: 7597 RN</p>
                    </td>
                    <td colSpan={6}>
                      <p className="p-text-export-document">1a. via farmácia</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">
                        Endereço: AV ENGENHEIRO ROBERTO FREIRE, 1962, LOJA 13 BOX 48.
                      </p>
                    </td>
                    <td colSpan={6}>
                      <p className="p-text-export-document">2a. via paciente</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">Telefone: (84) 98127-7271</p>
                    </td>
                    <td colSpan={6}>
                      <p className="p-text-export-document">ASSINATURA: </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={7}>
                      <p className="p-text-export-document">Cidade e UF: Natal - RN</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document"><center>FUNCIONÁRIO</center></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Nome: {formData?.name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">CPF: {formData?.cpf}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="p-text-export-document">Endereço: {formData?.adress}</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              {formData?.medications?.map((medication, index) => (
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
                          <p className="p-text-export-document"><center>MEDICAMENTO {index+1}</center></p>
                        </td>
                      </tr>
                      <tr>
                        <p className="p-text-export-document">Nome do medicamento: {medication.drugs_name}</p>
                      </tr>
                      <tr>
                        <p className="p-text-export-document">Quantidade: {medication.quantity}</p>
                      </tr>
                      <tr>
                        <p className="p-text-export-document">Modo de uso: {medication.use_mode}</p>
                      </tr>
                    </tbody>
                  </table>
              ))}

              <table align="center" border={0} id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>IDENTIFICAÇÃO DO COMPRADOR</center>
                      </p>
                    </td>
                    <td className="td-header-export-document" colSpan={6}>
                      <p className="p-text-export-document">
                        <center>IDENTIFICAÇÃO DO FORNECEDOR</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">Nome: {formData?.buyer_name}</p>
                    </td>
                    <td colSpan={6}>
                      <p className="p-text-export-document">Data: {formData?.date}</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p className="p-text-export-document">RG: {formData?.buyer_rg}</p>
                    </td>
                    <td colSpan={6}>
                      <p className="p-text-export-document">
                        Assinatura do farmacêutico: {formData?.pharmacist_signature}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={7}>
                      <p className="p-text-export-document">Telefone: {formData?.buyer_phone}</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={7}>
                      <p className="p-text-export-document">Cidade e UF: {formData?.buyer_address}</p>
                    </td>
                  </tr>
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
                        <center>IDENTIFICAÇÃO DO MÉDICO RESPONSÁVEL PELO PCMSO</center>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <p>
                        <center>Exame médico admissional/periódico/demissional/ de mudança de risco/ de retorno ao trabalho/ de monitoração pontual (de acordo com a seleção)</center>
                      </p>
                    </td>
                    <td colSpan={6}>
                      <p>
                        <center>Dr. Artur Nóbrega de Oliveira | CRM-RN 7597 | CPF: 064.642.844-60</center>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table align="center" id="Tabela_01" width={900}>
                <tbody>
                  <tr>
                    <td height={200} colSpan={6}>
                      <p style={{ textAlign: 'center' }}><center>Dr. Artur Nóbrega de Oliveira<br />
                        MÉDICO DO TRABALHO<br />
                        CRM-RN 7597
                      </center></p>
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
                  <h4>Paciente</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.name ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome do paciente"
                    error={!!errors.name}
                    helperText={errors.name?.message}
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
                    placeholder="digite o CPF do paciente"
                    error={!!errors.cpf}
                    helperText={errors.cpf?.message}
                    required
                    {...field}
                    onChange={(e) => field.onChange(applyCpfMask(e.target.value))}
                  />
                </div>
              )}
            />

            <Controller
              name="adress"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.adress ? "filled-error" : "standard-basic"}
                    label="Endereço"
                    type="text"
                    variant="standard"
                    placeholder="Digite o endereço do paciente"
                    error={!!errors.adress}
                    helperText={errors.adress?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            {medications.map((_, index) => (
              <div key={index}>
                <Controller
                  name={`medications.${index}.drugs_name` as const}
                  control={control}
                  render={({ field }) => (
                    <div className="ctn-form-input-create-unit">
                      <h4>Medicamento</h4>
                      <TextField
                        className="form-input-create-unit"
                        id={errors.medications?.[index]?.drugs_name ? "filled-error" : "standard-basic"}
                        label="Medicamento"
                        type="text"
                        variant="standard"
                        placeholder="Digite o nome do medicamento"
                        error={!!errors.medications?.[index]?.drugs_name}
                        helperText={errors.medications?.[index]?.drugs_name?.message}
                        required
                        {...field}
                      />
                    </div>
                  )}
                />
                <Controller
                  name={`medications.${index}.quantity` as const}
                  control={control}
                  render={({ field }) => (
                    <div className="ctn-form-input-create-unit">
                      <TextField
                        className="form-input-create-unit"
                        id={errors.medications?.[index]?.quantity ? "filled-error" : "standard-basic"}
                        label="Quantidade"
                        type="text"
                        variant="standard"
                        placeholder="Digite a quantidade do medicamento"
                        error={!!errors.medications?.[index]?.quantity}
                        helperText={errors.medications?.[index]?.quantity?.message}
                        required
                        {...field}
                      />
                    </div>
                  )}
                />
                <Controller
                  name={`medications.${index}.use_mode` as const}
                  control={control}
                  render={({ field }) => (
                    <div className="ctn-form-input-create-unit">
                      <TextField
                        className="form-input-create-unit"
                        id={errors.medications?.[index]?.use_mode ? "filled-error" : "standard-basic"}
                        label="Modo de uso"
                        type="text"
                        variant="standard"
                        placeholder="Digite o modo de uso do medicamento"
                        error={!!errors.medications?.[index]?.use_mode}
                        helperText={errors.medications?.[index]?.use_mode?.message}
                        required
                        {...field}
                      />
                    </div>
                  )}
                />
              </div>
            ))}

            <div className="create-unit-btn-submit">
              <button type="button" onClick={addMedication} className="create-unit-btn-submit">
                Adicionar Medicamento
              </button>
            </div>

            <Controller
              name="buyer_name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Informações do comprador</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.buyer_name ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome do comprador"
                    error={!!errors.buyer_name}
                    helperText={errors.buyer_name?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="buyer_rg"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.buyer_rg ? "filled-error" : "standard-basic"}
                    label="RG"
                    type="text"
                    variant="standard"
                    placeholder="Digite o RG do comprador"
                    error={!!errors.buyer_rg}
                    helperText={errors.buyer_rg?.message}
                    required
                    {...field}
                    onChange={(e) => field.onChange(applyRgMask(e.target.value))}
                  />
                </div>
              )}
            />

            <Controller
              name="buyer_phone"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.buyer_phone ? "filled-error" : "standard-basic"}
                    label="Telefone"
                    type="text"
                    variant="standard"
                    placeholder="Digite o telefone do comprador"
                    error={!!errors.buyer_phone}
                    helperText={errors.buyer_phone?.message}
                    required
                    {...field}
                    onChange={(e) => field.onChange(applyPhoneMask(e.target.value))}
                  />
                </div>
              )}
            />

            <Controller
              name="buyer_address"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.buyer_address ? "filled-error" : "standard-basic"}
                    label="Endereço"
                    type="text"
                    variant="standard"
                    placeholder="Digite o endereço do comprador"
                    error={!!errors.buyer_address}
                    helperText={errors.buyer_address?.message}
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <h4>Informações do fornecedor</h4>
                  <TextField
                    className="form-input-create-unit"
                    id={errors.date ? "filled-error" : "standard-basic"}
                    label="Data"
                    type="text"
                    variant="standard"
                    placeholder="Digite a data"
                    error={!!errors.date}
                    helperText={errors.date?.message}
                    required
                    {...field}
                    onChange={(e) => field.onChange(applyDateMask(e.target.value))}
                  />
                </div>
              )}
            />

            <Controller
              name="pharmacist_signature"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-unit">
                  <TextField
                    className="form-input-create-unit"
                    id={errors.pharmacist_signature ? "filled-error" : "standard-basic"}
                    label="Assinatura"
                    type="text"
                    variant="standard"
                    placeholder="Digite a assinatura do farmacêutico"
                    error={!!errors.pharmacist_signature}
                    helperText={errors.pharmacist_signature?.message}
                    required
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

export default CreateEspecialDocuments;