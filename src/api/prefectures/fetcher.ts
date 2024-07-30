import { apiClient } from '../apiClient';
import { toPrefectureModel } from './model';
import { PrefecturesResponse } from './types';

const fetchPrefectures = async (abortController: AbortController) => {
  const response = await apiClient<PrefecturesResponse>('/prefectures', abortController).catch((error) => {
    throw error;
  });
  return toPrefectureModel(response);
};

export { fetchPrefectures };
