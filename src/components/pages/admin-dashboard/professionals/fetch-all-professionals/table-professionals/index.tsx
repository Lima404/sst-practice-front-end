import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './index.css'
import { CiSearch, CiTrash } from 'react-icons/ci';
import { BsPencilSquare } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { api } from '../../../../../../services/api';

interface professionalProps {
  id: string,
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

  useEffect(() => {
    const fetchAllProfessionals = async () => {
      try {
        const response = await api.get("/professionals")
        setProfessionals(response.data.professionals)
        console.log(response.data.professionals)
      }
      catch (error) {
        console.log("Erro na requisição", error)
      }
    }
    fetchAllProfessionals()
  }, [])

  return (
    <div className='container-companies-table'>
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
                  <CiSearch /> <BsPencilSquare /> <CiTrash />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}