import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { StatisticsLineGraphSelectbox } from '../components/StatisticsLineGraphSelectbox';

test('初期値がvalueにセットされること', () => {
  render(
    <StatisticsLineGraphSelectbox
      selectedPopulationDataLabel={'総人口'}
      populationDataLabels={['総人口', '年少人口', '生産年齢人口', '老年人口']}
      onChangeSelectedPopulationDataLabel={() => {}}
    />
  );

  const select = screen.getByRole('combobox');

  expect(select).toHaveValue('総人口');
});
