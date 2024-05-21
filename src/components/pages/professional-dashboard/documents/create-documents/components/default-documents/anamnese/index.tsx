import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAdminRequest, createAdminSchema } from "../../../../../../admin-dashboard/admin/types/types"
import { createAdmin } from "../../../../../../admin-dashboard/admin/api/index"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateAnamnese = () => {
  const navigate = useNavigate();
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

      // CHECKBOX EXAME FISICO
      physicalExam: "",

      // CHECKBOX ESTADO GERAL
      generalCondition: "",

      // CHECKBOX FÁCIES
      facies: "",

      // CHECKBOX MARCHA 
      gait: "",

      // CHECKBOX ROMBERG TEST
      rombergTest: "",

      // CHECKBOX VISUAL ACUITY
      visualAcuity: "",

      // CHECKBOX CORRECTION
      correction: "",

      // CHECKBOX CARDIOVASCULAR
      cardiovascular: "",

      // CHECKBOX RESPIRATORY
      respiratory: "",

      // CHECKBOX ABDOMINAL
      abdominal: "",

      // CHECKBOX SPINE
      spine: "",

      // CHECKBOX MMSS
      upperLimbs: "",

      // CHECKBOX UPPER LIMB MANEUVERS
      maneuversUpperLimbs: "",

      // CHECKBOX MMSS
      lowerLimbs: "",

      // CHECKBOX COMPLEMENTARY EXAMS
      complementaryExams: "",

      diagnosticHypothesis: "",

      // CHECKBOX CONCLUSION
      conclusion: "",

      // CHECKBOX SPECIAL SKILLS
      specialSkills: "",
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
