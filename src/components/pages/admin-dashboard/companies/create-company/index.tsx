import HamburgerMenu from "../../../../admin-dashboard/hamburger-menu"
import AdminSideBar from "../../../../admin-dashboard/sidebar"
import TextField from '@mui/material/TextField'
import "./index.css"
import { useNavigate } from "react-router-dom"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateCompanyRequest, createCompanySchema } from "../types"
import { toast } from "react-toastify"
import { createCompany } from "../api"

const CreateCompany = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      cnpj: "",
      corporate_reason: "",
      fantasy_name: "",
      identification: "",
      cep: "",
      address: "",
      neighborhood: "",
      phone: "",
      dt_start_esocial: "",

    },
    resolver: zodResolver(createCompanySchema),
  });

  const onSubmit: SubmitHandler<CreateCompanyRequest> = async (data) => {
    try {
      await createCompany(data).then(() => {
        toast.success("Empresa criada com sucesso");
        navigate("/companies");
      });
    } catch (err: any) {
      console.log(err);
      toast.error(err);
    }
  };
  return (
    <div className="main-create-company-admin-dashboard">

      <AdminSideBar />
      <HamburgerMenu />

      <div className='create-company-admin-dashboard-content'>
        <h2 className="create-company-page-title">Cadastrar Empresa</h2>
        <div className='create-company-form'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.email ? "filled-error" : "standard-basic"}
                    label="E-mail"
                    type="email"
                    variant="standard"
                    placeholder="Digite o e-mail"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.password ? "filled-error" : "standard-basic"}
                    label="Senha"
                    type="password"
                    variant="standard"
                    placeholder="Digite a senha"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cnpj"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.cnpj ? "filled-error" : "standard-basic"}
                    label="CNPJ"
                    type="text"
                    variant="standard"
                    placeholder="Digite o CNPJ"
                    error={!!errors.cnpj}
                    helperText={errors.cnpj?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="corporate_reason"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.corporate_reason ? "filled-error" : "standard-basic"}
                    label="Razão Social"
                    type="text"
                    variant="standard"
                    placeholder="Razão social"
                    error={!!errors.corporate_reason}
                    helperText={errors.corporate_reason?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="fantasy_name"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.fantasy_name ? "filled-error" : "standard-basic"}
                    label="Nome fantasia"
                    type="text"
                    variant="standard"
                    placeholder="Nome fantasia"
                    error={!!errors.fantasy_name}
                    helperText={errors.fantasy_name?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="identification"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.identification ? "filled-error" : "standard-basic"}
                    label="Identificação"
                    type="text"
                    variant="standard"
                    placeholder="Identificação"
                    error={!!errors.identification}
                    helperText={errors.identification?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="cep"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.cep ? "filled-error" : "standard-basic"}
                    label="CEP"
                    type="text"
                    variant="standard"
                    placeholder="CEP"
                    error={!!errors.cep}
                    helperText={errors.cep?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.address ? "filled-error" : "standard-basic"}
                    label="Endereço"
                    type="text"
                    variant="standard"
                    placeholder="Endereço"
                    error={!!errors.address}
                    helperText={errors.address?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="neighborhood"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.neighborhood ? "filled-error" : "standard-basic"}
                    label="Bairro"
                    type="text"
                    variant="standard"
                    placeholder="Bairro"
                    error={!!errors.neighborhood}
                    helperText={errors.neighborhood?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.phone ? "filled-error" : "standard-basic"}
                    label="Telefone"
                    type="text"
                    variant="standard"
                    placeholder="Telefone"
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="dt_start_esocial"
              control={control}
              render={({ field }) => (
                <div className="ctn-form-input-create-company">
                  <TextField
                    className="form-input-create-company"
                    id={errors.dt_start_esocial ? "filled-error" : "standard-basic"}
                    label="Data de início no e-social"
                    type="text"
                    variant="standard"
                    placeholder="Data de início no e-social"
                    error={!!errors.dt_start_esocial}
                    helperText={errors.dt_start_esocial?.message}
                    {...field}
                  />
                </div>
              )}
            />
            <div className="create-company-btn-submit">
              <button className="create-company-btn-submit" type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default CreateCompany