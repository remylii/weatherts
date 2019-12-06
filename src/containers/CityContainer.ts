import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router-dom";
import { AppState } from "../store";

import CityPage from "../components/pages/CityPage";

export type CityProps = {
  id: string;
} & RouteComponentProps<{ id: string }>;

function mapStateToProps(appState: AppState, props: CityProps) {
  const { id } = props.match.params;
  return { id };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps)(CityPage);
