import DocumentsTab from "./components/documents-tabs"

export const CreateDocuments = () => {
  return(
    <div className="main-create-admin-admin-dashboard">
      <div className="create-admin-admin-dashboard-content">
        <h2 className="create-admin-page-title">Cadastrar Documentos</h2>
        <div className="create-admin-form">
            <DocumentsTab />
        </div>
      </div>
    </div>
  )
}