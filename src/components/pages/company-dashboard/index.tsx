import { useContext, useEffect, useState } from 'react';
import Card from '../../company-components/cards';
import CompanySideBar from '../../company-components/sidebar';
import './index.css';
import { AuthContext } from '../../../data/contexts/AuthContext';
import { fetchCardsData } from './api';

interface CardData {
  professional: string;
  company: string;
  employee: string;
}

function CompanyDashboard() {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userTypeId } = useContext(AuthContext);

  useEffect(() => {
    const companyId = userTypeId ?? '';
    fetchCardsData(companyId)
      .then((data) => {
        setCardsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados dos cards:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main-admin-dashboard">
      <CompanySideBar />
      <div className="admin-dashboard-content">
        {isLoading ? (
          <p>Carregando...</p>
        ) : cardsData.length === 0 ? (
          <h2 className='no-cards-found'>Nenhum card encontrado</h2>
        ) : (
          cardsData.map((card, index) => (
            <Card
              key={index}
              professional={card.professional}
              company={card.company}
              employee={card.employee}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CompanyDashboard;
