import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { type FC } from 'react';

import { PopulationData } from './StatisticsContainer';
import { statisticsLineGraphLayout, statisticsLineGraphSelectBox, statisticsLineGraphSelectBoxInner } from './StatisticsLineGraph.css';
import { buildLabels, buildOptions } from './funcs/graphBuilder';

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
