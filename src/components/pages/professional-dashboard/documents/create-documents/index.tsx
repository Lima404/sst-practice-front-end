import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DocumentsTab from './components/documents-tabs';
import { fetchEmployeeById } from '../../api';
import { EmployeeInfoHeader } from './styles';

const CreateDocuments = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState<any>([]);

  useEffect(() => {
    const getEmployee = async () => {
      try {
        if (employeeId) {
          const response = await fetchEmployeeById(employeeId);
          setEmployee(response.employee);
        }
      } catch (error) {
        console.log("Não foi possível encontrar o colaborador");
      }
    };

    getEmployee();
  }, [employeeId]);

  return (
    <div className="main-create-admin-admin-dashboard">
      <div className="create-admin-admin-dashboard-content">
        {employee && (
          <EmployeeInfoHeader>
            <p>Nome do Colaborador: {employee.name}</p>
            <p>CPF: {employee.cpf}</p>
            <p>RG: {employee.rg}</p>
            <p>
              Data de Nascimento:{" "}
              {new Date(employee.dt_birth).toLocaleDateString()}
            </p>
            <p>Matrícula: {employee.registration}</p>
            <p>Função: {employee.employee_function}</p>
            <p>Cargo: {employee.office}</p>
            <p>Setor: {employee.sector}</p>
          </EmployeeInfoHeader>
        )}
        <h2 className="create-admin-page-title">Cadastrar Documentos</h2>
        <div className="create-admin-form">
          <DocumentsTab />
        </div>
      </div>
    </div>
  );
};

export default CreateDocuments;
