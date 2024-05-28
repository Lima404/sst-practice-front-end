import './index.css'

import { RiAdminFill } from "react-icons/ri"
import { FaUserDoctor } from "react-icons/fa6"
import { FaBuilding  } from "react-icons/fa"
import { useEffect, useState } from 'react';
import { fetchAdminDataCount, fetchCompanyDataCount, fetchProfessionalDataCount } from '../api';

const Cards = () => {
  const [adminCount, setAdminCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  const [professionalCount, setProfessionalCount] = useState(0);

  const fetchAllAdminCount = async () => {
    try {
      fetchAdminDataCount().then((response) => {
        setAdminCount(response.admins.length)
      })
    } catch (error) {
      console.log("Erro ao buscar quantidade de administradores")
    }
  }

  const fetchAllCompanyCount = async () => {
    try {
      fetchCompanyDataCount().then((response) => {
        setCompanyCount(response.companies.length)
      })
    } catch (error) {
      console.log("Erro ao buscar quantidade de empresas")
    }
  }

  const fetchAllProfessionalCount = async () => {
    try {
      fetchProfessionalDataCount().then((response) => {
        setProfessionalCount(response.professionals.length)
      })
    } catch (error) {
      console.log("Erro ao buscar quantidade de profissionais")
    }
  }

  useEffect(() => {
    fetchAllAdminCount();
    fetchAllCompanyCount();
    fetchAllProfessionalCount();
  }, []);

  return (
    <div className="main-cards-admin-dashboard">
      <div className="card-admin-dashboard">
        <div className="content-card-admin-dashboard">
          <div>Administradores</div>
          <div><RiAdminFill size={30}/></div>
        </div>
        <div className='number-card-admin-dashboard'>
          <div className='number-card-content'>
            <span>{adminCount}</span>
          </div>
        </div>
      </div>

      <div className="card-admin-dashboard">
        <div className="content-card-admin-dashboard">
          <div>Profissionais de Saúde</div>
          <div><FaUserDoctor size={30}/></div>
        </div>
        <div className='number-card-admin-dashboard'>
          <div className='number-card-content'>
            <span>{professionalCount}</span>
          </div>
        </div>
      </div>

      <div className="card-admin-dashboard">
        <div className="content-card-admin-dashboard">
          <div>Empresas</div>
          <div><FaBuilding size={30}/></div>
        </div>
        <div className='number-card-admin-dashboard'>
          <div className='number-card-content'>
            <span>{companyCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;