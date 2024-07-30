import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { fetchPopulationData, PopulationModel, PrefectureModel } from '../../../api';
import { Message } from '../../Message';
import { StatisticsControl } from './StatisticsControl';
import { StatisticsLineGraph } from './StatisticsLineGraph';

export type PopulationData = { prefCode: number; prefName: string; data: PopulationModel[] }[];

const StatisticsContainer = () => {
  const [populationData, setPopulationData] = useState<PopulationData>([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<PrefectureModel[]>([]);
  const [selectedPopulationDataLabel, setSelectedPopulationDataLabel] = useState<string>('');

  const onChangeRearrangeData = async (selectedPrefecture: PrefectureModel) => {
    // if the input prefecture is already selected, remove it from the list
    if (selectedPrefectures.map((pref) => pref.prefCode).includes(selectedPrefecture.prefCode)) {
      setPopulationData(populationData.filter((data) => data.prefCode !== selectedPrefecture.prefCode));
      setSelectedPrefectures(selectedPrefectures.filter((pref) => pref.prefCode !== selectedPrefecture.prefCode));
      return;
    }

    const data = await fetchPopulationData(selectedPrefecture.prefCode);

    setPopulationData([
      ...populationData,
      {
        prefCode: selectedPrefecture.prefCode,
        prefName: selectedPrefecture.prefName,
        data: data,
      },
    ]);
    if (selectedPopulationDataLabel === '') {
      setSelectedPopulationDataLabel(data[0].label ?? '');
    }
    setSelectedPrefectures([...selectedPrefectures, selectedPrefecture]);
  };

  const onChangeSelectedPopulationDataLabel = (label: string) => {
    setSelectedPopulationDataLabel(label);
  };

  return (
    <ErrorBoundary fallback={<Message message='サーバーでエラーが発生しました' />}>
      <StatisticsControl selectedPrefectures={selectedPrefectures} onChangeRearrangeData={onChangeRearrangeData} />
      <StatisticsLineGraph
        populationData={populationData}
        selectedPopulationDataLabel={selectedPopulationDataLabel}
        onChangeSelectedPopulationDataLabel={onChangeSelectedPopulationDataLabel}
      />
    </ErrorBoundary>
  );
};

export { StatisticsContainer };
