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

function createData(
  name: string,
  emaiL: string,
  cpf: string,
  rg: string,
  formation: string,
  title: string,
  professionalFunction: string,
) {
  return { name, emaiL, cpf, rg, formation, title, professionalFunction };
}

const rows = [
  createData('Ricardo', 'professional@professional.com', '111.111.111-11', '1111.111', 'Médico', 'Médico Cardiologista', 'Examinar pacientes'),
  createData('Ricardo', 'professional@professional.com', '111.111.111-11', '1111.111', 'Médico', 'Médico Cardiologista', 'Examinar pacientes'),
  createData('Ricardo', 'professional@professional.com', '111.111.111-11', '1111.111', 'Médico', 'Médico Cardiologista', 'Examinar pacientes'),
  createData('Ricardo', 'professional@professional.com', '111.111.111-11', '1111.111', 'Médico', 'Médico Cardiologista', 'Examinar pacientes'),
  createData('Ricardo', 'professional@professional.com', '111.111.111-11', '1111.111', 'Médico', 'Médico Cardiologista', 'Examinar pacientes'),
];

export default function ProfessionalsTable() {
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
              <TableCell align="left">Função</TableCell>
              <TableCell align='left'>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.emaiL}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.cpf}</TableCell>
                <TableCell align="left">{row.rg}</TableCell>
                <TableCell align="left">{row.formation}</TableCell>
                <TableCell align="left">{row.professionalFunction}</TableCell>
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