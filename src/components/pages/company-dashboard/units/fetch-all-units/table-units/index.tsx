import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./index.css";
import { useContext, useEffect, useState } from "react";

import { CiTrash } from "react-icons/ci";
import { BsPencilSquare, BsFillPeopleFill } from "react-icons/bs";
import { deleteUnit, fetchUnitData } from "../../api";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { AuthContext } from "../../../../../../data/contexts/AuthContext";
import { EditUnitModal } from "../../components/EditUnitModal";
import { useNavigate } from "react-router-dom";

export interface UnitProps {
  id: string;
  identification: string;
  cnpj: string;
  cep: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  email: string;
  phone: string;
}

export default function UnitsTable() {
  const [units, setUnits] = useState<UnitProps[]>([]);
  const [currentUnitId, setCurrentUnitId] = useState<string>("");
  const { userTypeId } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchAllUnits = async () => {
    try {
      if (userTypeId !== null) {
        const companyId = userTypeId;
        fetchUnitData(companyId).then((response) => {
          if (response.units.length === 0) {
            toast.error("Não foram encontrados registros!");
          }
          toast.success(`${response.units.length} registros encontrados`);
          setUnits(response.units);
        });
      } else {
        console.log("não foi possível encontrar unidades para essa empresa");
      }
    } catch (error) {
      console.log("Erro na requisição", error);
    }
  };

  const handleDeleteUnit = async (id: string) => {
    try {
      await deleteUnit(id);
      fetchAllUnits();
      toast.success("Unidade excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir unidade:", error);
      toast.error("Erro ao excluir unidade. Por favor, tente novamente mais tarde.");
    }
  };

  const handleSetIds = (unitId: string) => {
    setCurrentUnitId(unitId);
  };

  const handleNavigateToEmployees = (unitId: string) => {
    navigate(`/employees/${unitId}`);
  };

  const handleUpdateSuccess = () => {
    fetchAllUnits();
  };

  useEffect(() => {
    fetchAllUnits();
  }, []);

  return (
    <div className="container-units-table">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Identificação</TableCell>
              <TableCell align="left">CNPJ</TableCell>
              <TableCell align="left">Endereço</TableCell>
              <TableCell align="left">Cidade</TableCell>
              <TableCell align="left">Estado</TableCell>
              <TableCell align="left">E-mail</TableCell>
              <TableCell align="left">Telefone</TableCell>
              <TableCell align="left">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {units?.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.identification}
                </TableCell>
                <TableCell align="left">{row.cnpj}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{row.city}</TableCell>
                <TableCell align="left">{row.state}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">
                  <Button className="actions-btn">
                    <BsFillPeopleFill className="update-btn" onClick={() => handleNavigateToEmployees(row.id)} size={20}/>
                  </Button>
                  <Button className="actions-btn" onClick={() => handleSetIds(row.id)}>
                    <BsPencilSquare className="update-btn" size={20} />
                  </Button>
                  <Button className="actions-btn" onClick={() => handleDeleteUnit(row.id)}>
                    <CiTrash className="delete-btn" size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <EditUnitModal
        modalOpen={currentUnitId !== ""}
        handleClose={() => setCurrentUnitId("")}
        unitId={currentUnitId}
        onUpdateSuccess={handleUpdateSuccess}
      />
    </div>
  );
}
