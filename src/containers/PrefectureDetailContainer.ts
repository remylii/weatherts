import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router-dom";
import { AppState } from "../store";
import { IPrefecture } from "../reducers/prefecture";

import PrefectureDetailPage from "../components/pages/PrefectureDetailPage";

export type PrefectureDetailProps = {
  id: string;
  prefecture: IPrefecture | undefined;
} & RouteComponentProps<{ id: string }>;

function mapStateToProps(appState: AppState, props: PrefectureDetailProps) {
  console.log(appState);
  const { id } = props.match.params;
  const prefecture = appState.prefectures.prefectures.find(pref => {
    return pref.id === id;
  });

  return Object.assign({}, { id, prefecture });
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps)(PrefectureDetailPage);
