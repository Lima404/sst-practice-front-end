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
import { BsPencilSquare } from "react-icons/bs";
import { fetchUnitData } from "../../api";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { AuthContext } from "../../../../../../data/contexts/AuthContext";

export interface UnitProps {
  id: string;
  identification: string;
  cnpj: string;
  cep: string;
  adress: string;
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
        console.log("userTypeId is null");
      }
    } catch (error) {
      console.log("Erro na requisição", error);
    }
  };

  const handleSetIds = (unitId: string) => {
    setCurrentUnitId(unitId);
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
              <TableCell>Nome</TableCell>
              <TableCell align="left">E-mail</TableCell>
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
                <TableCell align="left">{row.cep}</TableCell>
                <TableCell align="left">{row.adress}</TableCell>
                <TableCell align="left">{row.neighborhood}</TableCell>
                <TableCell align="left">{row.city}</TableCell>
                <TableCell align="left">{row.state}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">
                  <Button className="actions-btn" onClick={() => handleSetIds(row.id)}>
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

      {/* <EditAdminModal
        modalOpen={currentUnitId !== ""}
        handleClose={() => setCurrentUnitId("")}
        adminId={currentUnitId}
        onUpdateSuccess={handleUpdateSuccess}
      /> */}
    </div>
  );
}
