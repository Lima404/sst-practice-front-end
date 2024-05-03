import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./index.css";
import { useEffect, useState } from "react";

import { CiTrash } from "react-icons/ci";
import { BsPencilSquare } from "react-icons/bs";
import { fetchAdminData } from "../../api";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { EditAdminModal } from "../../components/EditAdminModal";

export interface AdminProps {
  id: string;
  name: string;
  userId: string;
  user: {
    email: string;
  };
}

export default function AdminsTable() {
  const [admins, setAdmins] = useState<AdminProps[]>([]);
  const [currentAdminId, setCurrentAdminId] = useState<string>("");
  const [currentUserId, setCurrentUserId] = useState<string>("");

  const fetchAllAdmins = async () => {
    try {
      fetchAdminData().then((response) => {
        if (response.admins.length === 0) {
          toast.error("Não foram encontrados registros!");
        }
        toast.success(`${response.admins.length} registros encontrados`);
        setAdmins(response.admins);
      });
    } catch (error) {
      console.log("Erro na requisição", error);
    }
  };

  const handleSetIds = (adminId: string, userId: string) => {
    setCurrentAdminId(adminId);
    setCurrentUserId(userId);
  };

  const handleUpdateSuccess = () => {
    fetchAllAdmins();
  };

  useEffect(() => {
    fetchAllAdmins();
  }, []);

  return (
    <div className="container-admins-table">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="left">E-mail</TableCell>
              <TableCell align="left">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins?.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.user.email}</TableCell>
                <TableCell align="left">
                  <Button className="actions-btn" onClick={() => handleSetIds(row.id, row.userId)}>
                    <BsPencilSquare className="update-btn" size={20} />
                  </Button>
                  <Button className="actions-btn">
                    <CiTrash className="delete-btn" size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <EditAdminModal
        modalOpen={currentAdminId !== ""}
        handleClose={() => setCurrentAdminId("")}
        adminId={currentAdminId}
        userId={currentUserId}
        onUpdateSuccess={handleUpdateSuccess}
      />
    </div>
  );
}
