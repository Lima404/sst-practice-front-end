import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './index.css'
import { api } from '../../../../../../services/api';
import { useEffect, useState } from 'react';


interface AdminProps {
  id: string,
  name: string
}

export default function AdminsTable() {
  const [admins, setAdmins] = useState <AdminProps[]>([]);

  useEffect(() => {
    const fetchAllAdmins = async () => {
      try {
        const response = await api.get("/admins")
        setAdmins(response.data.admins)
        console.log("resp", response.data.admins)
      }
      catch (error) {
        console.log("erro")
      }
    }
      fetchAllAdmins()
  }, [])

  return (
    <div className='container-admins-table'>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins?.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}