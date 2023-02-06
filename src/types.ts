import { AxiosResponse } from 'axios';

export type PrefData = {
  prefCode: number;
  prefName: string;
};

export type AxiosType = AxiosResponse & {
  result: PrefData[];
};

export type ReturnPopulationData = {
  message: null;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: {
        year: number;
        value: number;
      }[];
    }[];
  };
};

export type PrefPopulationData = {
  type: 'line';
  data: number[];
  name: string;
};
