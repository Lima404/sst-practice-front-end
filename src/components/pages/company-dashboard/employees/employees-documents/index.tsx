import EmployeeDocumentsTable from "./table-employee-documents";

const EmployeeDocuments = () => {
  return (
    <div className="main-admins-admin-dashboard">
      <div className="admins-admin-dashboard-content">
        <div className="admins-table">
          <EmployeeDocumentsTable />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDocuments;
