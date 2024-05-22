import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAdminRequest, createAdminSchema } from "../../../../../../admin-dashboard/admin/types/types"
import { createAdmin } from "../../../../../../admin-dashboard/admin/api/index"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import RHFCheckbox from "../../checkbox";
import '../../checkbox/index.css'

interface FormValues {
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

const CreateAnamnese = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      employer: "",
      companyName: "",
      cnpj: "",
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
      examDate: "",
      examName: "",
      chiefComplaint: "",
      clinicalHistory: "",
      pathologicalPersonalAndFamilyHistory: "",
    
      physicalExam: false,
      generalCondition: false,
      facies: false,
      gait: false,
      rombergTest: false,
      visualAcuity: false,
      correction: false,
      cardiovascular: false,
      respiratory: false,
      abdominal: false,
      spine: false,
      upperLimbs: false,
      maneuversUpperLimbs: false,
      lowerLimbs: false,
      complementaryExams: false,
      diagnosticHypothesis: false,
      conclusion: false,
      specialSkills: false,
    },
    resolver: zodResolver(createAdminSchema),
  });

  const onSubmit: SubmitHandler<CreateAdminRequest> = async (data) => {
    try {
      await createAdmin(data).then(() => {
        toast.success("Administrador criado com sucesso");
        navigate("/admins");
      });
    } catch (err: any) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div className="main-create-admin-admin-dashboard">
      <div className="create-admin-admin-dashboard-content">
        <h2 className="create-admin-page-title">Cadastrar Anamnese</h2>
        <div className="create-admin-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="employer"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <h4>Empregador</h4>
                  <TextField
                    className="form-input-create-admin"
                    id={errors.employer ? "filled-error" : "standard-basic"}
                    label="Empregador"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome do empregador"
                    error={!!errors.employer}
                    helperText={errors.employer?.message}
                    {...field}
                  />
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
                    label="Razão social"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome da empresa"
                    error={!!errors.companyName}
                    helperText={errors.companyName?.message}
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
                    type="password"
                    variant="standard"
                    placeholder="Digite o CNPJ da empresa"
                    error={!!errors.cnpj}
                    helperText={errors.cnpj?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="employeeName"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                    <h4>Funcionário</h4>
                  <TextField
                    className="form-input-create-admin"
                    id={errors.employeeName ? "filled-error" : "standard-basic"}
                    label="Nome"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome do empregado"
                    error={!!errors.employeeName}
                    helperText={errors.employeeName?.message}
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
                    {...field}
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
                    {...field}
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
                    id={errors.employeeDateBirth ? "filled-error" : "standard-basic"}
                    label="Data de nascimento"
                    type="text"
                    variant="standard"
                    placeholder="Digite a data de nascimento do empregado"
                    error={!!errors.employeeDateBirth}
                    helperText={errors.employeeDateBirth?.message}
                    {...field}
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
                    id={errors.employeeRegistration ? "filled-error" : "standard-basic"}
                    label="Matrícula"
                    type="text"
                    variant="standard"
                    placeholder="Digite a matrícula do empregado"
                    error={!!errors.employeeRegistration}
                    helperText={errors.employeeRegistration?.message}
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
                    id={errors.employeeFunction ? "filled-error" : "standard-basic"}
                    label="Função"
                    type="text"
                    variant="standard"
                    placeholder="Digite a função do empregado"
                    error={!!errors.employeeFunction}
                    helperText={errors.employeeFunction?.message}
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
                    id={errors.employeeSector ? "filled-error" : "standard-basic"}
                    label="Setor"
                    type="text"
                    variant="standard"
                    placeholder="Digite o setor do empregado"
                    error={!!errors.employeeSector}
                    helperText={errors.employeeSector?.message}
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
                    id={errors.physicalRisks ? "filled-error" : "standard-basic"}
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
                    id={errors.chemicalRisks ? "filled-error" : "standard-basic"}
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
                    id={errors.biologicalRisks ? "filled-error" : "standard-basic"}
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
                    id={errors.ergonomicRisks ? "filled-error" : "standard-basic"}
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
                    id={errors.mechanicalRiks ? "filled-error" : "standard-basic"}
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

            <Controller
              name="examDate"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                    <h4>Exames realizados</h4>
                  <TextField
                    className="form-input-create-admin"
                    id={errors.examDate ? "filled-error" : "standard-basic"}
                    label="Data de exame"
                    type="text"
                    variant="standard"
                    placeholder="Digite a data do exame realizado"
                    error={!!errors.examDate}
                    helperText={errors.examDate?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="examName"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.examName ? "filled-error" : "standard-basic"}
                    label="Nome do exame"
                    type="text"
                    variant="standard"
                    placeholder="Digite o nome do exame realizado"
                    error={!!errors.examName}
                    helperText={errors.examName?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="chiefComplaint"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.chiefComplaint ? "filled-error" : "standard-basic"}
                    label="Queixa principal"
                    type="text"
                    variant="standard"
                    placeholder="Digite a queixa principal"
                    error={!!errors.chiefComplaint}
                    helperText={errors.chiefComplaint?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="clinicalHistory"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.clinicalHistory ? "filled-error" : "standard-basic"}
                    label="Histórico clínico"
                    type="text"
                    variant="standard"
                    placeholder="Digite o histórico clínico"
                    error={!!errors.clinicalHistory}
                    helperText={errors.clinicalHistory?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="clinicalHistory"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-admin">
                  <TextField
                    className="form-input-create-admin"
                    id={errors.clinicalHistory ? "filled-error" : "standard-basic"}
                    label="Histórico familiar"
                    type="text"
                    variant="standard"
                    placeholder="Digite o histórico familiar"
                    error={!!errors.clinicalHistory}
                    helperText={errors.clinicalHistory?.message}
                    {...field}
                  />
                </div>
              )}
            />
              <div className="checkbox-container">
                <h4>Estado geral</h4>
                <RHFCheckbox name="generalCondition" control={control} label="Bom" />
                <RHFCheckbox name="generalCondition" control={control} label="Regular" />
                <RHFCheckbox name="generalCondition" control={control} label="Ruim" />
                <RHFCheckbox name="generalCondition" control={control} label="Comprometido" />
              </div>

              <div className="checkbox-container">
                <h4>Fácies</h4>
                <RHFCheckbox name="facies" control={control} label="Atípica" />
                <RHFCheckbox name="facies" control={control} label="Normal" />
                <RHFCheckbox name="facies" control={control} label="Acromegálica" />
                <RHFCheckbox name="facies" control={control} label="Adenoidiana" />
                <RHFCheckbox name="facies" control={control} label="Cushingóide" />
                <RHFCheckbox name="facies" control={control} label="De depressão" />
                <RHFCheckbox name="facies" control={control} label="De dor" />
                <RHFCheckbox name="facies" control={control} label="Esclerodérmica" />
                <RHFCheckbox name="facies" control={control} label="Hipertireoidea" />
                <RHFCheckbox name="facies" control={control} label="Hipocrática" />
                <RHFCheckbox name="facies" control={control} label="Leonina" />
                <RHFCheckbox name="facies" control={control} label="Miastênica" />
                <RHFCheckbox name="facies" control={control} label="Mixedematosa" />
                <RHFCheckbox name="facies" control={control} label="Paralisia facial periférica" />
                <RHFCheckbox name="facies" control={control} label="Renal" />
                <RHFCheckbox name="facies" control={control} label="Sindrômica" />
                <RHFCheckbox name="facies" control={control} label="Tetânica" />
              </div>

              <div className="checkbox-container">
                <h4>Marcha</h4> 
                <RHFCheckbox name="gait" control={control} label="Atípica" />
                <RHFCheckbox name="gait" control={control} label="Normal" />
                <RHFCheckbox name="gait" control={control} label="Anserina" />
                <RHFCheckbox name="gait" control={control} label="Antálgica" />
                <RHFCheckbox name="gait" control={control} label="Atáxica" />
                <RHFCheckbox name="gait" control={control} label="Ceifante à direita" />
                <RHFCheckbox name="gait" control={control} label="Ceifante à esquerda" />
                <RHFCheckbox name="gait" control={control} label="Claudicante à direita" />
                <RHFCheckbox name="gait" control={control} label="Claudicante à esquerda" />
                <RHFCheckbox name="gait" control={control} label="Ebriosa" />
                <RHFCheckbox name="gait" control={control} label="Em tesoura" />
                <RHFCheckbox name="gait" control={control} label="Escarvante" />
                <RHFCheckbox name="gait" control={control} label="Festinante" />
                <RHFCheckbox name="gait" control={control} label="Parkinsoniana" />
                <RHFCheckbox name="gait" control={control} label="Talonante" />
              </div>

              <div className="checkbox-container">
                <h4>Teste de Romberg</h4>
                <RHFCheckbox name="rombergTest" control={control} label="Positivo" />
                <RHFCheckbox name="rombergTest" control={control} label="Negativo" />
                <RHFCheckbox name="rombergTest" control={control} label="Não realizado/não aplicável" />
              </div>

              <div className="checkbox-container">
                <h4>Acuidade visual</h4>
                <RHFCheckbox name="visualAcuity" control={control} label="Não realizado" />
                <RHFCheckbox name="visualAcuity" control={control} label="20/20" />
                <RHFCheckbox name="visualAcuity" control={control} label="20/25" />
                <RHFCheckbox name="visualAcuity" control={control} label="20/30" />
                <RHFCheckbox name="visualAcuity" control={control} label="20/40" />
                <RHFCheckbox name="visualAcuity" control={control} label="20/50" />
                <RHFCheckbox name="visualAcuity" control={control} label="20/70" />
                <RHFCheckbox name="visualAcuity" control={control} label="20/100" />
                <RHFCheckbox name="visualAcuity" control={control} label="20/200" />
                <RHFCheckbox name="visualAcuity" control={control} label="Conta dedos" />
                <RHFCheckbox name="visualAcuity" control={control} label="Vê vultos" />
                <RHFCheckbox name="visualAcuity" control={control} label="Enucleado" />
                <RHFCheckbox name="visualAcuity" control={control} label="C/ prótese" />
              </div>

              <div className="checkbox-container">
                <h4>Correção</h4>
                <RHFCheckbox name="correction" control={control} label="C/ correção" />
                <RHFCheckbox name="correction" control={control} label="S/ correção" />
                <RHFCheckbox name="correction" control={control} label="C/ trocas" />
              </div>

              <div className="checkbox-container">
                <h4>Cardiovascular</h4>
                <RHFCheckbox name="cardiovascular" control={control} label="normal" />
                <RHFCheckbox name="cardiovascular" control={control} label="ritmo cardíaco regular, com bulhas normofonéticas, sem sopros" />
                <RHFCheckbox name="cardiovascular" control={control} label="ritmo cardíaco regulas, com bulhas hipofonéticas, sem sopros" />
                <RHFCheckbox name="cardiovascular" control={control} label="ritmo cardíaco regular, com sopro diastólico em foco mitral" />
                <RHFCheckbox name="cardiovascular" control={control} label="ritmo cardíaco regular, com sopro diastólico em foco tricúspide" />
                <RHFCheckbox name="cardiovascular" control={control} label="ritmo cardíaco regular, com sopro sistólico em foco aórtico" />
                <RHFCheckbox name="cardiovascular" control={control} label="ritmo cardíaco regular, com sopro sistólico em foco mitral" />
                <RHFCheckbox name="cardiovascular" control={control} label="ritmo cardíaco regular, com sopro sistólico em foco pulmonar" />
                <RHFCheckbox name="cardiovascular" control={control} label="ritmo cardíaco regular, com sopro sistólico em foco tricúspide" />
                <RHFCheckbox name="cardiovascular" control={control} label="alterado" />
              </div>

              <div className="checkbox-container">
                <h4>Respiratório</h4>
                <RHFCheckbox name="respiratory" control={control} label="Normal" />
                <RHFCheckbox name="respiratory" control={control} label="Murmúrio vesicular presente, simétrico, sem ruídos adventícios" />
                <RHFCheckbox name="respiratory" control={control} label="Alterado" />
              </div>

              <div className="checkbox-container">
                <h4>Dor abdominal</h4>
                <RHFCheckbox name="abdominal" control={control} label="Normal" />
                <RHFCheckbox name="abdominal" control={control} label="plano, flácido, indolor, sem massas ou viceromegalias palpáveis" />
                <RHFCheckbox name="abdominal" control={control} label="com cicatriz(es" />
                <RHFCheckbox name="abdominal" control={control} label="sem cicatriz(es)" />
                <RHFCheckbox name="abdominal" control={control} label="alterado" />
              </div>

              <div className="checkbox-container">
                <h4>Coluna</h4>
                <RHFCheckbox name="spine" control={control} label="Normal" />
                <RHFCheckbox name="spine" control={control} label="Amplitude articular preservada, sem desvios" />
                <RHFCheckbox name="spine" control={control} label="Amplit. articular preserv., com desvio (convexidade p/ a direita)" />
                <RHFCheckbox name="spine" control={control} label="Amplit. articular preserv., com desvio (convexidade p/ a direita)" />
                <RHFCheckbox name="spine" control={control} label="Amplit. articular reduzida por queixas álgicas (flexão anterior)" />
                <RHFCheckbox name="spine" control={control} label="Amplit. articular reduzida por queixas álgicas (flexão posterior)" />
                <RHFCheckbox name="spine" control={control} label="Bloqueio voluntário da flexão anterior" />
                <RHFCheckbox name="spine" control={control} label="Bloqueio voluntário da flexão posterior" />
                <RHFCheckbox name="spine" control={control} label="Alterada" />
              </div>

              <div className="checkbox-container">
                <h4>MMSS</h4>
                <RHFCheckbox name="upperLimbs" control={control} label="Normais" />
                <RHFCheckbox name="upperLimbs" control={control} label="Sem abaulamentos, sem atrofias, sem alterações funcionais" />
                <RHFCheckbox name="upperLimbs" control={control} label="Sem alterações funcionais" />
                <RHFCheckbox name="upperLimbs" control={control} label="Sem alterações funcionais e sem sinais flogísticos" />
                <RHFCheckbox name="upperLimbs" control={control} label="Sem sinais flogísticos" />
                <RHFCheckbox name="upperLimbs" control={control} label="Alterado" />
              </div>

              <div className="checkbox-container">
                <h4>Cardiovascular</h4>
                <RHFCheckbox name="maneuversUpperLimbs" control={control} label="Normal" />
                <RHFCheckbox name="maneuversUpperLimbs" control={control} label="Negativo" />
                <RHFCheckbox name="maneuversUpperLimbs" control={control} label="Não realizado" />
                <RHFCheckbox name="maneuversUpperLimbs" control={control} label="Positivo à direita" />
                <RHFCheckbox name="maneuversUpperLimbs" control={control} label="Positivo à esquerda" />
                <RHFCheckbox name="maneuversUpperLimbs" control={control} label="Positivo bilateralmente" />
              </div>

              <div className="checkbox-container">
                <h4>MMII</h4>
                <RHFCheckbox name="lowerLimbs" control={control} label="Normais" />
                <RHFCheckbox name="lowerLimbs" control={control} label="Sem abaulamentos, sem atrofias, sem alterações funcionais" />
                <RHFCheckbox name="lowerLimbs" control={control} label="Sem abaulamentos, sem atrofias, sem alterações funcionais, com varizes" />
                <RHFCheckbox name="lowerLimbs" control={control} label="Sem abaulamentos, sem atrofias, sem alterações funcionais, sem varizes" />
                <RHFCheckbox name="lowerLimbs" control={control} label="Sem alterações funcionais" />
                <RHFCheckbox name="lowerLimbs" control={control} label="Sem alterações funcionais e sem sinais flogísticos" />
                <RHFCheckbox name="lowerLimbs" control={control} label="Sem sinais flogísticos" />
                <RHFCheckbox name="lowerLimbs" control={control} label="Alterado" />
              </div>

              <div className="checkbox-container">
                <h4>Exames complementares</h4>
                <RHFCheckbox name="complementaryExams" control={control} label="Exames complementares anexos, com alterações clínicas" />
                <RHFCheckbox name="complementaryExams" control={control} label="Exames complementares anexos, com alterações ocupacionais" />
                <RHFCheckbox name="complementaryExams" control={control} label="Exames complementares anexos, sem alterações" />
                <RHFCheckbox name="complementaryExams" control={control} label="Exames complementares obrigatórios para a função não realizados" />
                <RHFCheckbox name="complementaryExams" control={control} label="Não realizou exames complementares" />
                <RHFCheckbox name="complementaryExams" control={control} label="Hipótese diagnóstica" />
                <RHFCheckbox name="complementaryExams" control={control} label="Conduta" />
              </div>

              <div className="checkbox-container">
              <h4>Conclusão</h4>
                <RHFCheckbox name="conclusion" control={control} label="Apto" />
                <RHFCheckbox name="conclusion" control={control} label="Inapto" />
                <RHFCheckbox name="conclusion" control={control} label="Observação sobre aptidão: (campo aberto)" />
              </div>

              <div className="checkbox-container">
              <h4>Aptidões especiais</h4>
                <RHFCheckbox name="specialSkills" control={control} label="Apto(a) para manipulação de alimentos" />
                <RHFCheckbox name="specialSkills" control={control} label="Apto(a) para realizar instalações e serviços em eletricidade (NR10)" />
                <RHFCheckbox name="specialSkills" control={control} label="Apto(a) para operação de máquinas autopropelidas (NR-12)" />
                <RHFCheckbox name="specialSkills" control={control} label="Apto(a) para uso de arma de fogo" />
                <RHFCheckbox name="specialSkills" control={control} label="Apto(a) para trabalho em espaço confinado (NR-33)" />
                <RHFCheckbox name="specialSkills" control={control} label="Apto(a) para trabalho em altura (NR-35)" />
              </div>            

            <div className="create-admin-btn-submit">
              <button className="create-admin-btn-submit" type="submit">
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
