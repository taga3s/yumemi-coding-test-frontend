import { apiClient } from '../apiClient';
import { toPopulationModel } from './model';
import { PopulationResponse } from './types';

const fetchPopulationData = async (prefCode: number) => {
  const response = await apiClient<PopulationResponse>(`/population/composition/perYear?prefCode=${prefCode}`).catch((error) => {
    throw error;
  });
  return toPopulationModel(response);
};

export { fetchPopulationData };
