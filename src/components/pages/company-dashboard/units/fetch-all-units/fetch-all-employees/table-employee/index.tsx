import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./index.css";
import { useContext, useEffect, useState } from "react";

import { CiTrash } from "react-icons/ci";
import { BsPencilSquare } from "react-icons/bs";
import { IoDocumentOutline } from "react-icons/io5";
import { deleteEmployees, fetchAllEmployeesByUnitIdData } from "../../../../employees/api";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { AuthContext } from "../../../../../../../data/contexts/AuthContext";
import { EditEmployeeModal } from "../../../../employees/components/EditEmployeesModal";
import { useNavigate } from "react-router-dom";
import { FetchAllEmployeesByUnitIdProps } from "../../../types";

export interface EmployeesProps {
  id: string,
  name: string,
  cpf: string,
  nis: string,
  rg: string,
  br_pdh: string,
  sex: string,
  dt_birth: string,
  phone: string,
  phone_number: string,
  blood_type: string,
}

export default function EmployeeTable({ unitId }: FetchAllEmployeesByUnitIdProps) {
  const [employees, setEmployees] = useState<EmployeesProps[]>([]);
  const [currentEmployeesId, setCurrentEmployeesId] = useState<string>("");
  const { userTypeId } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchAllEmployees = async () => {
    try {
      if (userTypeId !== null) {
        fetchAllEmployeesByUnitIdData(unitId).then((response) => {
          if (response.employees.length === 0) {
            toast.error("Não foram encontrados registros!");
          }
          toast.success(`${response.employees.length} registros encontrados`);
          setEmployees(response.employees);
        });
      } else {
        console.log("não foi possível encontrar colaboradores para essa empresa");
      }
    } catch (error) {
      console.log("Erro na requisição", error);
    }
  };

  const handleDeleteEmployees = async (id: string) => {
    try {
      await deleteEmployees(id);
      fetchAllEmployees();
      toast.success("Colaborador inativado com sucesso!");
    } catch (error) {
      console.error("Erro ao inativar colaborador:", error);
      toast.error("Erro ao inativar colaborador. Por favor, tente novamente mais tarde.");
    }
  };

  const handleSetIds = (employeeId: string) => {
    setCurrentEmployeesId(employeeId);
  };

  const handleUpdateSuccess = () => {
    fetchAllEmployees();
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);

  const handleViewDocuments = (employeeId: string) => {
    navigate(`/employee/documents/${employeeId}`);
  };


  return (
    <div className="container-units-table">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">CPF</TableCell>
              <TableCell align="left">RG</TableCell>
              <TableCell align="left">Celular</TableCell>
              <TableCell align="left">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.cpf}</TableCell>
                <TableCell align="left">{row.rg}</TableCell>
                <TableCell align="left">{row.phone_number}</TableCell>
                <TableCell align="left">
                  <Button className="actions-btn" onClick={() => handleSetIds(row.id)}>
                    <BsPencilSquare className="update-btn" size={20} />
                  </Button>
                  <Button className="actions-btn" onClick={() => handleDeleteEmployees(row.id)}>
                    <CiTrash className="delete-btn" size={20} />
                  </Button>
                  <Button className="actions-btn" onClick={() => handleViewDocuments(row.id)}>
                    <IoDocumentOutline size={20}/>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <EditEmployeeModal
        modalOpen={currentEmployeesId !== ""}
        handleClose={() => setCurrentEmployeesId("")}
        employeeId={currentEmployeesId}
        onUpdateSuccess={handleUpdateSuccess}
      />
    </div>
  );
}
