import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { type FC } from 'react';

import type { PopulationPerYear } from '../../../api/population/types';
import { PopulationData } from './StatisticsContainer';
import { statisticsLineGraphLayout, statisticsLineGraphSelectBox, statisticsLineGraphSelectBoxInner } from './StatisticsLineGraph.css';

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

const buildOptions = (
  populationData: {
    prefCode: number;
    prefName: string;
    data: {
      label: string;
      data: PopulationPerYear[];
    }[];
  }[],
  label: string
) => {
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

type Props = {
  populationData: PopulationData;
  selectedPopulationDataLabel: string;
  onChangeSelectedPopulationDataLabel: (label: string) => void;
};

const StatisticsLineGraph: FC<Props> = (props) => {
  const { populationData, selectedPopulationDataLabel, onChangeSelectedPopulationDataLabel } = props;

  const populationDataLabels = buildLabels(populationData);

  return (
    <div className={statisticsLineGraphLayout}>
      {populationData.length === 0 ? (
        <span>都道府県を選択するとグラフが表示されます</span>
      ) : (
        <>
          <label className={statisticsLineGraphSelectBox} htmlFor='population-data-range'>
            人口範囲を選択します
            <select
              className={statisticsLineGraphSelectBoxInner}
              id='population-data-range'
              onChange={(e) => onChangeSelectedPopulationDataLabel(e.target.value)}
              defaultValue={selectedPopulationDataLabel}
            >
              {populationDataLabels.map((label) => (
                <option value={label} key={label}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <HighchartsReact highcharts={Highcharts} options={buildOptions(populationData, selectedPopulationDataLabel)} />
        </>
      )}
    </div>
  );
};

export { StatisticsLineGraph };
