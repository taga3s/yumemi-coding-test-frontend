type PopulationPerYear = {
  year: number;
  value: number;
};

type PopulationResponse = {
  message: null;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: PopulationPerYear[];
    }[];
  };
};

export type { PopulationPerYear, PopulationResponse };
