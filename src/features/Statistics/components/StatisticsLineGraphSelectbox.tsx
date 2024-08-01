import { FC } from 'react';

import { statisticsLineGraphSelectbox, statisticsLineGraphSelectboxInner } from './StatisticsLineGraphSelectbox.css';

type Props = {
  selectedPopulationDataLabel: string;
  populationDataLabels: string[];
  onChangeSelectedPopulationDataLabel: (value: string) => void;
};

const StatisticsLineGraphSelectbox: FC<Props> = (props) => {
  const { selectedPopulationDataLabel, populationDataLabels, onChangeSelectedPopulationDataLabel } = props;
  return (
    <label className={statisticsLineGraphSelectbox} htmlFor='population-data-range'>
      人口範囲を選択します
      <select
        className={statisticsLineGraphSelectboxInner}
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
  );
};

export { StatisticsLineGraphSelectbox };
