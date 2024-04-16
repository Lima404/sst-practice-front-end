import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './index.css'

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
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">CPF</TableCell>
              <TableCell align="right">RG</TableCell>
              <TableCell align="right">Formação</TableCell>
              <TableCell align="right">Título</TableCell>
              <TableCell align="right">Função</TableCell>
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
                <TableCell align="right">{row.emaiL}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.cpf}</TableCell>
                <TableCell align="right">{row.rg}</TableCell>
                <TableCell align="right">{row.formation}</TableCell>
                <TableCell align="right">{row.professionalFunction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}