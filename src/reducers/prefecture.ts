import { Reducer } from "redux";

export interface PrefectureState {
  prefectures: IPrefecture[];
}

export interface IPrefecture {
  id: string;
  title: string;
  cities: [];
}

export interface IRegion {
  id: string;
  title: string;
}

const initialState: PrefectureState = {
  prefectures: [
    {
      id: "11",
      title: "埼玉県",
      cities: []
    },
    {
      id: "12",
      title: "千葉県",
      cities: []
    },
    {
      id: "13",
      title: "東京都",
      cities: []
    }
  ]
};

export const prefectureReducer: Reducer<PrefectureState> = (
  state: PrefectureState = initialState,
  action: any
): PrefectureState => {
  switch (action.type) {
    default:
      return state;
  }
};
