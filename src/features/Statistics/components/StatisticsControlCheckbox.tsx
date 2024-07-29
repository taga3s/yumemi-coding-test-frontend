import type { FC } from 'react';

import type { Prefecture } from '../../../api/prefectures/types';
import { statisticsControlCheckBoxLabel } from './StatisticsControlCheckbox.css';

type Props = {
  prefName: string;
  prefCode: number;
  checked: boolean;
  onRearrangeData: (targetPrefecture: Prefecture) => void;
};

const StatisticsControlCheckbox: FC<Props> = (props) => {
  const { prefName, prefCode, checked, onRearrangeData } = props;

  return (
    <label className={statisticsControlCheckBoxLabel} htmlFor={`${prefCode}`}>
      <input type="checkbox" id={`${prefCode}`} checked={checked} onChange={() => onRearrangeData({ prefName, prefCode })} />
      {prefName}
    </label>
  );
};

export { StatisticsControlCheckbox };
