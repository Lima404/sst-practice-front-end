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

interface CompanyProps {
  id: string,
  cnpj: string,
  user: {
    email: string
  },
  corporate_reason: string,
  fantasy_name: string,
  address: string,
  phone: string
}

export default function CompaniesTable() {
  const [companies, setCompanies] = useState<CompanyProps[]>([]);

  useEffect(() => {
    const fetchAllCompanies = async () => {
      try {
        const response = await api.get("/companies")
        setCompanies(response.data.companies)
      }
      catch(error) {
        console.log("Erro na requisição", error)
      }
    }
    fetchAllCompanies()
  }, [])

  return (
    <div className='container-companies-table'>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>CNPJ</TableCell>
              <TableCell align="left">E-mail</TableCell>
              <TableCell align="left">Razão Social</TableCell>
              <TableCell align="left">Nome Fantasia</TableCell>
              <TableCell align="left">Endereço</TableCell>
              <TableCell align="left">Telefone</TableCell>
              <TableCell align='left'>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies?.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell component="th" scope="row">
                  {row.cnpj}
                </TableCell>
                <TableCell align="left">{row.user.email}</TableCell>
                <TableCell align="left">{row.corporate_reason}</TableCell>
                <TableCell align="left">{row.fantasy_name}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
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