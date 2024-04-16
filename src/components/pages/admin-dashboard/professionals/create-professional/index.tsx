import HamburgerMenu from "../../../../admin-dashboard/hamburger-menu"
import AdminSideBar from "../../../../admin-dashboard/sidebar"
import "./index.css"
import TextField from '@mui/material/TextField'

const CreateProfessional = () => {
  return (
    <div className="main-create-professional-admin-dashboard">

      <AdminSideBar />
      <HamburgerMenu />

      <div className='create-professional-admin-dashboard-content'>
        <h2 className="create-professional-page-title">Cadastrar Profissional</h2>
        <div className='create-professional-form'>
          <form>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="Nome" variant="standard" />
            </div>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="CPF" variant="standard" />
            </div>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="NIS" variant="standard" />
            </div>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="RG" variant="standard" />
            </div>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="CBO" variant="standard" />
            </div>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="Formação" variant="standard" />
            </div>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="Órgão" variant="standard" />
            </div>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="Sigla" variant="standard" />
            </div>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="CCR" variant="standard" />
            </div>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="UF" variant="standard" />
            </div>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="Título" variant="standard" />
            </div>
            <div className="ctn-form-input-create-professional">
              <TextField className="form-input-create-professional" id="standard-basic" label="Função" variant="standard" />
            </div>
            <div className="create-professional-btn-submit">
              <button className="create-professional-btn-submit" type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default CreateProfessional
