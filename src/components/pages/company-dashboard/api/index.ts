import { api } from "../../../../data/services/api"

export const fetchCardsData = async (companyId: string) => {
  const response = await api.get(`cards/${companyId}`);
  return response.data
}