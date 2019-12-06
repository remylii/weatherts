import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../store";
import { PrefectureState } from "../reducers/prefecture";
import PrefecturePage from "../components/pages/PrefecturePage";

export type PrefectureProps = PrefectureState;

function mapStateToProps(appState: AppState) {
  return { ...appState.prefectures };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps)(PrefecturePage);
