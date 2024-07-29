import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { type FC } from 'react';

import type { PopulationPerYear } from '../../../api/population/types';
import { statisticsLineGraphLayout, statisticsLineGraphSelectBox, statisticsLineGraphSelectBoxInner } from './StatisticsLineGraph.css';

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
  const categories = populationData[0].data.find((d) => d.label === label)?.data.map((data) => data.year) ?? [];
  const series = populationData.map((data) => ({
    name: data.prefName,
    data: data.data.find((d) => d.label === label)?.data.map((d) => d.value) ?? [],
  }));

  return {
    chart: {
      type: 'line',
    },
    title: {
      text: `${label}推移`,
    },
    xAxis: {
      categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    series,
  };
};

type Props = {
  populationData: {
    prefCode: number;
    prefName: string;
    data: {
      label: string;
      data: PopulationPerYear[];
    }[];
  }[];
  selectedPopulationDataLabel: string;
  onChangeSelectedPopulationDataLabel: (label: string) => void;
};

const StatisticsLineGraph: FC<Props> = (props) => {
  const { populationData, selectedPopulationDataLabel, onChangeSelectedPopulationDataLabel } = props;

  const populationDataLabels = populationData.length > 0 ? populationData[0].data.map((d) => d.label) : [];

  return (
    <div className={statisticsLineGraphLayout}>
      {populationData.length === 0 ? (
        <span>都道府県を選択するとグラフが表示されます</span>
      ) : (
        <div>
          <div>
            <label className={statisticsLineGraphSelectBox} htmlFor="population-data-range">
              人口範囲を選択します
              <select className={statisticsLineGraphSelectBoxInner} id="population-data-range" onChange={(e) => onChangeSelectedPopulationDataLabel(e.target.value)}>
                {populationDataLabels.map((label) => (
                  <option value={label} key={label}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <HighchartsReact highcharts={Highcharts} options={buildOptions(populationData, selectedPopulationDataLabel)} />
        </div>
      )}
    </div>
  );
};

export { StatisticsLineGraph };
