type Prefecture = {
  prefCode: number;
  prefName: string;
};

type PrefecturesResponse = {
  message: null;
  result: Prefecture[];
};

export type { Prefecture,PrefecturesResponse };
