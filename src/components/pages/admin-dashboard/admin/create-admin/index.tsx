import { TextField } from "@mui/material"
import HamburgerMenu from "../../../../admin-dashboard/hamburger-menu"
import AdminSideBar from "../../../../admin-dashboard/sidebar"
import "./index.css"

const CreateAdmin = () => {
  return (
    <div className="main-create-admin-admin-dashboard">

      <AdminSideBar />
      <HamburgerMenu />

      <div className='create-admin-admin-dashboard-content'>
        <h2 className="create-admin-page-title">Cadastrar Administrador</h2>
        <div className='create-admin-form'>
          <form>
            <div className="ctn-form-input-create-admin">
              <TextField className="form-input-create-admin" id="standard-basic" label="Nome" variant="standard" />
            </div>
            <div className="ctn-form-input-create-admin">
              <TextField className="form-input-create-admin" id="standard-basic" type="email" label="E-mail" variant="standard" />
            </div>
            <div className="ctn-form-input-create-admin">
              <TextField className="form-input-create-admin" id="standard-basic" type="password" label="Senha" variant="standard" />
            </div>
            <div className="create-admin-btn-submit">
              <button className="create-admin-btn-submit" type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default CreateAdmin