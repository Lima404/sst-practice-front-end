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
import { deleteEmployees, fetchEmployeesData } from "../../api";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { AuthContext } from "../../../../../../data/contexts/AuthContext";
import { EditEmployeeModal } from "../../components/EditEmployeesModal";

export interface EmployeesProps {
  id: string,
  name: string,
  cpf: string,
  nis: string,
  rg: string,
  br_pdh: string,
  sex: string,
  dt_birth: number,
  phone: string,
  phone_number: string,
  blood_type: string,
}

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<EmployeesProps[]>([]);
  const [currentEmployeesId, setCurrentEmployeesId] = useState<string>("");
  const { userTypeId } = useContext(AuthContext);

  const fetchAllEmployees = async () => {
    try {
      if (userTypeId !== null) {
        const companyId = userTypeId;
        fetchEmployeesData(companyId).then((response) => {
          if (response.employees.length === 0 ){
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


  return (
      <div className="container-units-table">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Nome</TableCell>
                <TableCell align="left">CPF</TableCell>
                <TableCell align="left">NIS</TableCell>
                <TableCell align="left">RG</TableCell>

                <TableCell align="left">br_pdh</TableCell>

                <TableCell align="left">Sexo</TableCell>
                <TableCell align="left">Data de aniversario</TableCell>
                <TableCell align="left">Telefone</TableCell>
                <TableCell align="left">Celular</TableCell>
                <TableCell align="left">Tipo Sanguineo</TableCell>
                <TableCell align="left">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.cpf}</TableCell>
                  <TableCell align="left">{row.nis}</TableCell>
                  <TableCell align="left">{row.rg}</TableCell>
                  <TableCell align="left">{row.br_pdh}</TableCell>
                  <TableCell align="left">{row.sex}</TableCell>
                  <TableCell align="left">{row.dt_birth}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">{row.phone_number}</TableCell>
                  <TableCell align="left">{row.blood_type}</TableCell>
                  <TableCell align="left">
                    <Button className="actions-btn" onClick={() => handleSetIds(row.id)}>
                      <BsPencilSquare className="update-btn" size={20} />
                    </Button>
                    <Button className="actions-btn" onClick={() => handleDeleteEmployees(row.id)}>
                      <CiTrash className="delete-btn" size={20} />
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
