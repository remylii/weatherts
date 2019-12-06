import { Reducer } from "redux";

export interface PrefectureState {
  prefectures: IPrefecture[];
}

export interface IPrefecture {
  id: string;
  title: string;
  cities: ICity[];
}

export interface ICity {
  id: string;
  title: string;
}

const initialState: PrefectureState = {
  prefectures: [
    {
      id: "11",
      title: "埼玉県",
      cities: [
        { id: "110010", title: "さいたま" },
        { id: "110020", title: "熊谷" },
        { id: "110030", title: "秩父" }
      ]
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
