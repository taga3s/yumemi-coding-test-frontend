import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { apiClient, PopulationData, PopulationResponse } from '../../../api';
import type { Prefecture } from '../../../api/prefectures/types';
import { Message } from '../../Message';
import { StatisticsControl } from './StatisticsControl';
import { StatisticsLineGraph } from './StatisticsLineGraph';

const fetcher = async (prefCode: number, abortController: AbortController) => {
  return await apiClient<PopulationResponse>(`/population/composition/perYear?prefCode=${prefCode}`, abortController);
};

const StatisticsContainer = () => {
  const [populationData, setPopulationData] = useState<
    {
      prefCode: number;
      prefName: string;
      data: PopulationData[];
    }[]
  >([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>([]);
  const [selectedPopulationDataLabel, setSelectedPopulationDataLabel] = useState<string>('');

  const onRearrangeData = async (selectedPrefecture: Prefecture) => {
    // if the target prefecture is already selected, remove it from the list
    if (selectedPrefectures.map((pref) => pref.prefCode).includes(selectedPrefecture.prefCode)) {
      setPopulationData((prev) => prev.filter((data) => data.prefCode !== selectedPrefecture.prefCode));
      setSelectedPrefectures((prev) => prev.filter((pref) => pref.prefCode !== selectedPrefecture.prefCode));
      return;
    }

    const abortController = new AbortController();
    const response = await fetcher(selectedPrefecture.prefCode, abortController).catch((error) => {
      throw error;
    });
    abortController.abort();

    setPopulationData([
      ...populationData,
      {
        prefCode: selectedPrefecture.prefCode,
        prefName: selectedPrefecture.prefName,
        data: response.result.data,
      },
    ]);
    if (selectedPopulationDataLabel === '') {
      setSelectedPopulationDataLabel(response.result.data[0].label ?? '');
    }
    setSelectedPrefectures([...selectedPrefectures, selectedPrefecture]);
  };

  const onChangeSelectedPopulationDataLabel = (label: string) => {
    setSelectedPopulationDataLabel(label);
  };

  return (
    <ErrorBoundary fallback={<Message message='サーバーでエラーが発生しました' />}>
      <StatisticsControl selectedPrefectures={selectedPrefectures} onRearrangeData={onRearrangeData} />
      <StatisticsLineGraph
        populationData={populationData}
        selectedPopulationDataLabel={selectedPopulationDataLabel}
        onChangeSelectedPopulationDataLabel={onChangeSelectedPopulationDataLabel}
      />
    </ErrorBoundary>
  );
};

export { StatisticsContainer };
