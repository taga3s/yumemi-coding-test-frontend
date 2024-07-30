import { Prefecture, PrefecturesResponse } from './types';

type PrefectureModel = Prefecture;

const toPrefectureModel = (response: PrefecturesResponse): PrefectureModel[] => {
  return response.result;
};

export { type PrefectureModel, toPrefectureModel };
