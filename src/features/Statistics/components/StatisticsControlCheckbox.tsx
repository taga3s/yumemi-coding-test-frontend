import type { FC } from 'react';

import type { Prefecture } from '../../../api/prefectures/types';
import { statisticsControlCheckboxLabel } from './StatisticsControlCheckbox.css';

type Props = {
  prefName: string;
  prefCode: number;
  checked: boolean;
  onChangeRearrangeData: (targetPrefecture: Prefecture) => void;
};

const StatisticsControlCheckbox: FC<Props> = (props) => {
  const { prefName, prefCode, checked, onChangeRearrangeData } = props;

  return (
    <label className={statisticsControlCheckboxLabel} htmlFor={`${prefCode}`}>
      <input type='checkbox' id={`${prefCode}`} checked={checked} onChange={() => onChangeRearrangeData({ prefName, prefCode })} />
      {prefName}
    </label>
  );
};

export { StatisticsControlCheckbox };
