import { useEffect, useState } from 'react';

import { fetchPrefectures, Prefecture } from '../../../api';

const usePrefecturesData = () => {
  const [prefecturesData, setPrefecturesData] = useState<Prefecture[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetchPrefectures(abortController).then((data) => {
      setPrefecturesData(data);
    });

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    prefecturesData: prefecturesData,
    isLoading: prefecturesData.length === 0,
  };
};

export { usePrefecturesData };
