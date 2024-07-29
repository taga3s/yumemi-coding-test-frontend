import { useEffect, useState } from 'react';

import { apiClient, Prefecture, type PrefecturesResponse } from '../../../api';

const fetcher = async (abortController: AbortController) => {
  return await apiClient<PrefecturesResponse>('/prefectures', abortController);
};

const usePrefecturesData = () => {
  const [prefecturesData, setPrefecturesData] = useState<Prefecture[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetcher(abortController)
      .then((response) => setPrefecturesData(response.result))
      .catch((error) => {
        throw error;
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    prefecturesData: prefecturesData,
  };
};

export { usePrefecturesData };
