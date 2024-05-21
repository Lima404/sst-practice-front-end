import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./index.css";
import { useEffect, useState } from "react";

import { IoCloudDownloadOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import { fetchAllDocumentsByEmployeeIdData } from "../../api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export interface DocumentsProps {
  id: string,
  name: string,
  contentType: string,
}

export default function EmployeeDocumentsTable() {
  const [documents, setDocuments] = useState<DocumentsProps[]>([]);
  const { employeeId } = useParams();

  const fetchAllDocumentsByEmployeeId = async () => {
    try {
      if (employeeId) {
        const response = await fetchAllDocumentsByEmployeeIdData(employeeId);
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
  }, []);


  return (
    <div className="container-units-table">
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
            {documents?.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.contentType}</TableCell>
                <TableCell align="left">
                  <Button className="actions-btn">
                    <IoCloudDownloadOutline className="update-btn" size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
