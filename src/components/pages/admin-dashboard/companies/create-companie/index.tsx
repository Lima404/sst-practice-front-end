import HamburgerMenu from "../../../../admin-dashboard/hamburger-menu"
import AdminSideBar from "../../../../admin-dashboard/sidebar"
import TextField from '@mui/material/TextField'
import "./index.css"

const CreateCompany = () => {
  return (
    <div className="main-create-company-admin-dashboard">

      <AdminSideBar />
      <HamburgerMenu />

      <div className='create-company-admin-dashboard-content'>
        <h2 className="create-company-page-title">Cadastrar Empresa</h2>
        <div className='create-company-form'>
          <form>
            <div className="ctn-form-input-create-company">
              <TextField className="form-input-create-company" id="standard-basic" label="CNPJ" variant="standard" />
            </div>
            <div className="ctn-form-input-create-company">
              <TextField className="form-input-create-company" id="standard-basic" label="Razão Social" variant="standard" />
            </div>
            <div className="ctn-form-input-create-company">
              <TextField className="form-input-create-company" id="standard-basic" label="Nome Fantasia" variant="standard" />
            </div>
            <div className="ctn-form-input-create-company">
              <TextField className="form-input-create-company" id="standard-basic" label="Identificação" variant="standard" />
            </div>
            <div className="ctn-form-input-create-company">
              <TextField className="form-input-create-company" id="standard-basic" label="CEP" variant="standard" />
            </div>
            <div className="ctn-form-input-create-company">
              <TextField className="form-input-create-company" id="standard-basic" label="Endereço" variant="standard" />
            </div>
            <div className="ctn-form-input-create-company">
              <TextField className="form-input-create-company" id="standard-basic" label="Bairro" variant="standard" />
            </div>
            <div className="ctn-form-input-create-company">
              <TextField className="form-input-create-company" id="standard-basic" label="Telefone" variant="standard" />
            </div>
            <div className="ctn-form-input-create-company">
              <TextField className="form-input-create-company" id="standard-basic" label="Data de Início E-Social" variant="standard" />
            </div>
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