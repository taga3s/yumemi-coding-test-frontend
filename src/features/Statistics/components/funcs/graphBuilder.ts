import { PopulationData } from '../StatisticsContainer';

const buildLabels = (populationData: PopulationData) => {
  return populationData.length > 0 ? populationData[0].data.map((d) => d.label) : [];
};

const buildCategories = (populationData: PopulationData, label: string) => {
  return populationData.length > 0 ? populationData[0].data.find((d) => d.label === label)?.data.map((data) => data.year) : [];
};

const buildSeries = (populationData: PopulationData, label: string) =>
  populationData.map((data) => ({
    name: data.prefName,
    data: data.data.find((d) => d.label === label)?.data.map((d) => d.value) ?? [],
  }));

const buildOptions = (populationData: PopulationData, label: string) => {
  return {
    chart: {
      type: 'line',
    },
    title: {
      text: `${label}推移`,
    },
    xAxis: {
      categories: buildCategories(populationData, label),
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    series: buildSeries(populationData, label),
  };
};

export { buildCategories, buildLabels, buildOptions, buildSeries };
