import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './index.css'
import { CiTrash } from 'react-icons/ci';
import { BsPencilSquare } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { fetchProfessionalData } from '../../api';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import { EditProfessionalModal } from '../../components/editProfessionalModal';

interface professionalProps {
  id: string,
  userId: string,
  name: string,
  user: {
    email: string
  },
  cpf: string,
  rg: string,
  formation: string,
  title: string
}

export default function ProfessionalsTable() {
  const [professionals, setProfessionals] = useState<professionalProps[]>([]);
  const [currentProfessionalId, setCurrentProfessionalId] = useState<string>("");
  const [currentUserId, setCurrentUserId] = useState<string>("");


  const fetchAllProfessionals = async () => {
    try {
      const response = await fetchProfessionalData();
      if (response.professionals.length === 0) {
        toast.error("Não foram encontrados registros!");
      }
      toast.success(`${response.professionals.length} registros encontrados`);
      setProfessionals(response.professionals);
    } catch (error) {
      console.log("Erro na requisição", error);
    }
  };

  const handleUpdateSuccess = () => {
    fetchAllProfessionals();
  };

  useEffect(() => {
    fetchAllProfessionals();
  }, []);

  const handleSetIds = (professionalId: string, userId: string) => {
    setCurrentProfessionalId(professionalId);
    setCurrentUserId(userId)
  }

  return (
    <div className='container-professionals-table'>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="left">E-mail</TableCell>
              <TableCell align="left">CPF</TableCell>
              <TableCell align="left">RG</TableCell>
              <TableCell align="left">Formação</TableCell>
              <TableCell align="left">Título</TableCell>
              <TableCell align='left'>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {professionals?.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.user.email}</TableCell>
                <TableCell align="left">{row.cpf}</TableCell>
                <TableCell align="left">{row.rg}</TableCell>
                <TableCell align="left">{row.formation}</TableCell>
                <TableCell align="left">{row.title}</TableCell>
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

      <EditProfessionalModal
        modalOpen={currentProfessionalId !== ""}
        handleClose={() => setCurrentProfessionalId("")}
        professionalId={currentProfessionalId}
        userId={currentUserId}
        onUpdateSuccess={handleUpdateSuccess}
      />
    </div>
  )
}