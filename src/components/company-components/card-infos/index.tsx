import { RiAdminFill } from "react-icons/ri"
import { FaBuilding } from "react-icons/fa"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../data/contexts/AuthContext";
import { fetchEmployeesDataCount, fetchUnitDataCount } from "../api";

const CardsInfos = () => {
  const [unitCount, setUnitCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const { userTypeId } = useContext(AuthContext);

  const fetchAllEmployeesCount = async () => {
    try {
      const companyId = userTypeId ?? "";
      fetchEmployeesDataCount(companyId).then((response) => {
        console.log(response)
        setEmployeeCount(response.employees.length)
      })
    } catch (error) {
      console.log("Erro ao buscar quantidade de administradores")
    }
  }

  const fetchAllUnitsCount = async () => {
    try {
      const companyId = userTypeId ?? "";
      fetchUnitDataCount(companyId).then((response) => {
        console.log(response)
        setUnitCount(response.units.length)
      })
    } catch (error) {
      console.log("Erro ao buscar quantidade de administradores")
    }
  }

  useEffect(() => {
    fetchAllEmployeesCount();
    fetchAllUnitsCount();
  }, []);

  return (
    <div className="main-cards-admin-dashboard">
      <div className="card-admin-dashboard">
        <div className="content-card-admin-dashboard">
          <div>Colaboradores</div>
          <div><RiAdminFill size={30} /></div>
        </div>
        <div className='number-card-admin-dashboard'>
          <div className='number-card-content'>
            <span>{employeeCount}</span>
          </div>
        </div>
      </div>

      <div className="card-admin-dashboard">
        <div className="content-card-admin-dashboard">
          <div>Unidades</div>
          <div><FaBuilding size={30} /></div>
        </div>
        <div className='number-card-admin-dashboard'>
          <div className='number-card-content'>
            <span>{unitCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsInfos;