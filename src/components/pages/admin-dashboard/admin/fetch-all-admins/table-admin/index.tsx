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
  email: string,
) {
  return { name, email };
}

const rows = [
  createData('Ricardo', 'admin@admin.com'),
  createData('Ricardo', 'admin@admin.com'),
  createData('Ricardo', 'admin@admin.com'),
  createData('Ricardo', 'admin@admin.com'),
  createData('Ricardo', 'admin@admin.com'),
];

export default function AdminsTable() {
  return (
    <div className='container-admins-table'>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="left">E-mail</TableCell>
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
                <TableCell align="left">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}