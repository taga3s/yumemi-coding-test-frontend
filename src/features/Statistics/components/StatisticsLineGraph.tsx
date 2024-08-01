import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { type FC } from 'react';

import { buildLabels, buildOptions } from './funcs/graphBuilder';
import { PopulationData } from './StatisticsContainer';
import { statisticsLineGraphLayout } from './StatisticsLineGraph.css';
import { StatisticsLineGraphSelectbox } from './StatisticsLineGraphSelectbox';

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
          <StatisticsLineGraphSelectbox
            selectedPopulationDataLabel={selectedPopulationDataLabel}
            populationDataLabels={populationDataLabels}
            onChangeSelectedPopulationDataLabel={onChangeSelectedPopulationDataLabel}
          />
          <HighchartsReact highcharts={Highcharts} options={buildOptions(populationData, selectedPopulationDataLabel)} />
        </>
      )}
    </div>
  );
};

export { StatisticsLineGraph };
