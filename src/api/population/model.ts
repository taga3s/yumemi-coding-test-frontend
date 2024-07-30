import { PopulationPerYear, PopulationResponse } from './types';

type PopulationModel = {
  label: string;
  data: PopulationPerYear[];
};

const toPopulationModel = (response: PopulationResponse): PopulationModel[] => {
  return response.result.data;
};

export { type PopulationModel, toPopulationModel };
