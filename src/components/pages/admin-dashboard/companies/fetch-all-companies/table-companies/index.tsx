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
import { Button } from '@mui/material';
import { fetchCompanyData } from '../../api';
import { toast } from 'react-toastify';
import { EditCompanyModal } from '../../components/editCompanyModal';

interface CompanyProps {
  id: string,
  cnpj: string,
  userId: string,
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
  const [currentCompanyId, setCurrentCompanyId] = useState<string>("");
  const [currentUserId, setCurrentUserId] = useState<string>("");

  const fetchAllCompanies = async () => {
    try {
      fetchCompanyData().then((response) => {
        if (response.companies.length === 0) {
          toast.error("Não foram encontrados registros!");
        }
        toast.success(`${response.companies.length} registros encontrados`);
        setCompanies(response.companies);
      })
    } catch (error) {
      console.log("Erro na requisição", error);
    }
  };

  const handleUpdateSuccess = () => {
    fetchAllCompanies();
  };

  useEffect(() => {
    fetchAllCompanies();
  }, []);

  const handleSetIds = (companyId: string, userId: string) => {
    setCurrentCompanyId(companyId);
    setCurrentUserId(userId)
  }

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

      <EditCompanyModal
        modalOpen={currentCompanyId !== ""}
        handleClose={() => setCurrentCompanyId("")}
        companyId={currentCompanyId}
        userId={currentUserId}
        onUpdateSuccess={handleUpdateSuccess}
      />
    </div>
  )
}