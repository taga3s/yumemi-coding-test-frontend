type PopulationPerYear = {
  year: number;
  value: number;
};

type PopulationData = {
  label: string;
  data: PopulationPerYear[];
};

type PopulationResponse = {
  message: null;
  result: {
    boundaryYear: number;
    label: string;
    data: PopulationData[];
  };
};

export type { PopulationData, PopulationPerYear, PopulationResponse };
