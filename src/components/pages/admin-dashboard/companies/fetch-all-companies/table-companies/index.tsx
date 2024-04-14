import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './index.css'

function createData(
  cnpj: string,
  corporate_reason: string,
  fantasy_name: string,
  cep: string,
  address: string,
  phone: string,
) {
  return { cnpj, corporate_reason, fantasy_name, cep, address, phone };
}

const rows = [
  createData('132324345', 'SST Prática', 'Prática SST', '59300-00', 'Rua Coronel Martiniano', '84 99999-9999'),
  createData('132324345', 'SST Prática', 'Prática SST', '59300-00', 'Rua Coronel Martiniano', '84 99999-9999'),
  createData('132324345', 'SST Prática', 'Prática SST', '59300-00', 'Rua Coronel Martiniano', '84 99999-9999'),
  createData('132324345', 'SST Prática', 'Prática SST', '59300-00', 'Rua Coronel Martiniano', '84 99999-9999'),
  createData('132324345', 'SST Prática', 'Prática SST', '59300-00', 'Rua Coronel Martiniano', '84 99999-9999'),
];

export default function CompaniesTable() {
  return (
    <div className='container-companies-table'>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>CNPJ</TableCell>
              <TableCell align="right">Razão Social</TableCell>
              <TableCell align="right">Nome Fantasia</TableCell>
              <TableCell align="right">CEP</TableCell>
              <TableCell align="right">Endereço</TableCell>
              <TableCell align="right">Telefone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.cnpj}
              >
                <TableCell component="th" scope="row">
                  {row.cnpj}
                </TableCell>
                <TableCell align="right">{row.corporate_reason}</TableCell>
                <TableCell align="right">{row.fantasy_name}</TableCell>
                <TableCell align="right">{row.cep}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}