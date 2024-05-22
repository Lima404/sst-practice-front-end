import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RHFCheckbox from "../../checkbox";
import '../../checkbox/index.css'
import { CreateAnamneseDocumentRequest, createUploadDocumentRequestSchema } from "../../../../types";

// interface FormValues {
//   employer: string;
//   companyName: string;
//   cnpj: string;
//   employeeName: string;
//   employeeCpf: string;
//   employeeRg: string;
//   employeeDateBirth: string;
//   employeeRegistration: string;
//   employeeFunction: string;
//   employeeRole: string;
//   employeeSector: string;
//   physicalRisks: string;
//   chemicalRisks: string;
//   biologicalRisks: string;
//   ergonomicRisks: string;
//   mechanicalRiks: string;
//   examDate: string;
//   examName: string;
//   chiefComplaint: string;
//   clinicalHistory: string;
//   pathologicalPersonalAndFamilyHistory: string;
//   physicalExam: boolean;
//   generalCondition: boolean;
//   facies: boolean;
//   gait: boolean;
//   rombergTest: boolean;
//   visualAcuity: boolean;
//   correction: boolean;
//   cardiovascular: boolean;
//   respiratory: boolean;
//   abdominal: boolean;
//   spine: boolean;
//   upperLimbs: boolean;
//   maneuversUpperLimbs: boolean;
//   lowerLimbs: boolean;
//   complementaryExams: boolean;
//   diagnosticHypothesis: boolean;
//   conclusion: boolean;
//   specialSkills: boolean;
// }

const CreateAnamnese = () => {
  // const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
    resolver: zodResolver(createUploadDocumentRequestSchema),
  });

  const onSubmit: SubmitHandler<CreateAnamneseDocumentRequest> = async (data) => {
    console.log(data);
  };

  const visualAcuityOptions = [
    "Não realizado",
    "20/20",
    "20/25",
    "20/30",
    "20/40",
    "20/50",
    "20/70",
    "20/100",
    "20/200",
    "Conta dedos",
    "Vê vultos",
    "Enucleado",
    "C/ prótese"
  ];

  const generalConditionOptions = ["Bom", "Regular", "Ruim", "Comprometido"];

  const faciesOptions = [
    "Atípica", "Normal", "Acromegálica", "Adenoidiana", "Cushingóide", "De depressão", "De dor", "Esclerodérmica",
    "Hipertireoidea", "Hipocrática", "Leonina", "Miastênica", "Mixedematosa", "Paralisia facial periférica",
    "Renal", "Sindrômica", "Tetânica"
  ];

  const gaitOptions = [
    "Atípica", "Normal", "Anserina", "Antálgica", "Atáxica", "Ceifante à direita", "Ceifante à esquerda",
    "Claudicante à direita", "Claudicante à esquerda", "Ebriosa", "Em tesoura", "Escarvante", "Festinante",
    "Parkinsoniana", "Talonante"
  ];

  const rombergTestOptions = ["Positivo", "Negativo", "Não realizado/não aplicável"];

  const correctionOptions = [
    "C/ correção",
    "S/ correção",
    "C/ trocas"
  ];

  const cardiovascularOptions = [
    "Normal",
    "Ritmo cardíaco regular, com bulhas normofonéticas, sem sopros",
    "Ritmo cardíaco regulas, com bulhas hipofonéticas, sem sopros",
    "Ritmo cardíaco regular, com sopro diastólico em foco mitral",
    "Ritmo cardíaco regular, com sopro diastólico em foco tricúspide",
    "Ritmo cardíaco regular, com sopro sistólico em foco aórtico",
    "Ritmo cardíaco regular, com sopro sistólico em foco mitral",
    "Ritmo cardíaco regular, com sopro sistólico em foco pulmonar",
    "Ritmo cardíaco regular, com sopro sistólico em foco tricúspide",
    "Alterado"
  ];

  const respiratoryOptions = [
    "Normal",
    "Murmúrio vesicular presente, simétrico, sem ruídos adventícios",
    "Alterado"
  ];

  const abdominalOptions = [
    "Normal",
    "Plano, flácido, indolor, sem massas ou viceromegalias palpáveis",
    "Com cicatriz(es)",
    "Sem cicatriz(es)",
    "Alterado"
  ];

  const spineOptions = [
    "Normal",
    "Amplitude articular preservada, sem desvios",
    "Amplit. articular preserv., com desvio (convexidade p/ a direita)",
    "Amplit. articular preserv., com desvio (convexidade p/ a esquerda)",
    "Amplit. articular reduzida por queixas álgicas (flexão anterior)",
    "Amplit. articular reduzida por queixas álgicas (flexão posterior)",
    "Bloqueio voluntário da flexão anterior",
    "Bloqueio voluntário da flexão posterior",
    "Alterada"
  ];

  const upperLimbsOptions = [
    "Normais",
    "Sem abaulamentos, sem atrofias, sem alterações funcionais",
    "Sem alterações funcionais",
    "Sem alterações funcionais e sem sinais flogísticos",
    "Sem sinais flogísticos",
    "Alterado"
  ];

  const maneuversUpperLimbsOptions = [
    "Normal",
    "Negativo",
    "Não realizado",
    "Positivo à direita",
    "Positivo à esquerda",
    "Positivo bilateralmente"
  ];

  const lowerLimbsOptions = [
    "Normais",
    "Sem abaulamentos, sem atrofias, sem alterações funcionais",
    "Sem abaulamentos, sem atrofias, sem alterações funcionais, com varizes",
    "Sem abaulamentos, sem atrofias, sem alterações funcionais, sem varizes",
    "Sem alterações funcionais",
    "Sem alterações funcionais e sem sinais flogísticos",
    "Sem sinais flogísticos",
    "Alterado"
  ];

  const complementaryExamsOptions = [
    "Exames complementares anexos, com alterações clínicas",
    "Exames complementares anexos, com alterações ocupacionais",
    "Exames complementares anexos, sem alterações",
    "Exames complementares obrigatórios para a função não realizados",
    "Não realizou exames complementares",
    "Hipótese diagnóstica",
    "Conduta"
  ];

  const conclusionOptions = [
    "Apto",
    "Inapto",
    "Observação sobre aptidão: (campo aberto)"
  ];

  const specialSkillsOptions = [
    "Apto(a) para manipulação de alimentos",
    "Apto(a) para realizar instalações e serviços em eletricidade (NR10)",
    "Apto(a) para operação de máquinas autopropelidas (NR-12)",
    "Apto(a) para uso de arma de fogo",
    "Apto(a) para trabalho em espaço confinado (NR-33)",
    "Apto(a) para trabalho em altura (NR-35)"
  ];


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
                    type="text"
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
              {generalConditionOptions.map((label) => (
                <RHFCheckbox key={label} name="generalCondition" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Fácies</h4>
              {faciesOptions.map((label) => (
                <RHFCheckbox key={label} name="facies" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Marcha</h4>
              {gaitOptions.map((label) => (
                <RHFCheckbox key={label} name="gait" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Teste de Romberg</h4>
              {rombergTestOptions.map((label) => (
                <RHFCheckbox key={label} name="rombergTest" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Acuidade visual</h4>
              {visualAcuityOptions.map((label) => (
                <RHFCheckbox key={label} name="visualAcuity" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Correção</h4>
              {correctionOptions.map((label) => (
                <RHFCheckbox key={label} name="correction" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Cardiovascular</h4>
              {cardiovascularOptions.map((label) => (
                <RHFCheckbox key={label} name="cardiovascular" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Respiratório</h4>
              {respiratoryOptions.map((label) => (
                <RHFCheckbox key={label} name="respiratory" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Dor abdominal</h4>
              {abdominalOptions.map((label) => (
                <RHFCheckbox key={label} name="abdominal" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Coluna</h4>
              {spineOptions.map((label) => (
                <RHFCheckbox key={label} name="spine" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>MMSS</h4>
              {upperLimbsOptions.map((label) => (
                <RHFCheckbox key={label} name="upperLimbs" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Manobras MMSS</h4>
              {maneuversUpperLimbsOptions.map((label) => (
                <RHFCheckbox key={label} name="maneuversUpperLimbs" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>MMII</h4>
              {lowerLimbsOptions.map((label) => (
                <RHFCheckbox key={label} name="lowerLimbs" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Exames complementares</h4>
              {complementaryExamsOptions.map((label) => (
                <RHFCheckbox key={label} name="complementaryExams" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Conclusão</h4>
              {conclusionOptions.map((label) => (
                <RHFCheckbox key={label} name="conclusion" control={control} label={label} />
              ))}
            </div>

            <div className="checkbox-container">
              <h4>Aptidões especiais</h4>
              {specialSkillsOptions.map((label) => (
                <RHFCheckbox key={label} name="specialSkills" control={control} label={label} />
              ))}
            </div>

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