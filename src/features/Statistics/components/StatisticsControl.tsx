import type { FC } from 'react';

import type { Prefecture } from '../../../api/prefectures/types';
import { usePrefecturesData } from '../hooks/usePrefecturesData';
import { statisticsControlForm, statisticsControlHeading, statisticsControlLayout } from './StatisticsControl.css';
import { StatisticsControlCheckbox } from './StatisticsControlCheckbox';

type Props = {
  selectedPrefectures: Prefecture[];
  onRearrangeData: (targetPrefecture: Prefecture) => void;
};

const StatisticsControl: FC<Props> = (props) => {
  const { selectedPrefectures, onRearrangeData } = props;
  const { prefecturesData } = usePrefecturesData();

  return (
    <div className={statisticsControlLayout}>
      <h2 className={statisticsControlHeading}>都道府県一覧</h2>
      <form className={statisticsControlForm}>
        {prefecturesData.map((prefecture) => (
          <StatisticsControlCheckbox
            key={prefecture.prefCode}
            prefName={prefecture.prefName}
            prefCode={prefecture.prefCode}
            checked={selectedPrefectures.some((pref) => pref.prefCode === prefecture.prefCode)}
            onRearrangeData={onRearrangeData}
          />
        ))}
      </form>
    </div>
  );
};

export { StatisticsControl };