import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useEffect, useState } from "react";

import { IoCloudDownloadOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import { fetchAllDocumentsByEmployeeIdProfessionalData, getDocumentById, getEmployeesById } from "../../../api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export interface DocumentsProps {
  id: string,
  name: string,
  contentType: string,
}

export default function EmployeeDocumentsProfessionalTable() {
  const [documents, setDocuments] = useState<DocumentsProps[]>([]);
  const [employeeName, setEmployeeName] = useState("");
  const { employeeId } = useParams();

  const fetchEmployeeById = async () => {
    try {
      if (employeeId) {
        const response = await getEmployeesById(employeeId);
        setEmployeeName(response.employee.name);
      }
    } catch (error) {
      console.log("Não foi possível encontrar o colaborador")
    }
  }

  const fetchAllDocumentsByEmployeeId = async () => {
    try {
      if (employeeId) {
        const response = await fetchAllDocumentsByEmployeeIdProfessionalData(employeeId);
        setDocuments(response.document);
        console.log(response.document);
      } else {
        toast.error("Colaborador não reconhecido.")
      }
    } catch (error) {
      console.log("Erro na requisição", error);
    }
  };

  useEffect(() => {
    fetchAllDocumentsByEmployeeId();
    fetchEmployeeById();
  }, []);

  const handleDownloadDocument = async (documentId: string) => {
    try {
      const response = await getDocumentById(documentId);
      const signedUrl = response.signedUrl;

      const link = document.createElement('a');
      link.href = signedUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-units-table">
      <h3 className="h3-employee-name">Nome do colaborador: {employeeName}</h3>
      {documents.length === 0 ? (
        <h3>Nenhum documento encontrado para esse colaborador</h3>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Nome do documento</TableCell>
                <TableCell align="left">Tipo de arquivo</TableCell>
                <TableCell align="left">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documents.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.contentType}</TableCell>
                  <TableCell align="left">
                    <Button className="actions-btn" onClick={() => handleDownloadDocument(row.id)}>
                      <IoCloudDownloadOutline className="update-btn" size={20} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
