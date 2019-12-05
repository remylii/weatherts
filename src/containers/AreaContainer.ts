import { connect } from "react-redux";
import { Dispatch } from "redux";

import Area from "../components/pages/Area";

export type AreaProps = {};

function mapStateToProps(appState: any) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps)(Area);
