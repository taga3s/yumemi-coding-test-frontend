import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { StatisticsControlCheckbox } from '../components/StatisticsControlCheckbox';

test('propsのprefNameが正しく渡されていること', () => {
  render(<StatisticsControlCheckbox prefName='東京都' prefCode={13} checked={true} onChangeRearrangeData={() => {}} />);

  expect(screen.getByText('東京都')).toBeInTheDocument();
});

test('propsのprefCodeが正しく渡されていること', () => {
  render(<StatisticsControlCheckbox prefName='東京都' prefCode={13} checked={true} onChangeRearrangeData={() => {}} />);
  const checkbox = screen.getByRole('checkbox');

  expect(checkbox.id).toEqual('13');
});

test('propsのcheckedが正しく渡されていること', () => {
  render(<StatisticsControlCheckbox prefName='東京都' prefCode={13} checked={true} onChangeRearrangeData={() => {}} />);
  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).toBeChecked();
});
