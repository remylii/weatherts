import { connect } from "react-redux";
import { Dispatch } from "redux";
import { PrefectureState } from "../reducers/prefecture";
import PrefecturePage from "../components/pages/PrefecturePage";

export type PrefectureProps = {} & PrefectureState;

function matpStateToProps(appState: PrefectureProps) {
  return { ...appState.prefectures };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(matpStateToProps)(PrefecturePage);
