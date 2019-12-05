import { connect } from "react-redux";
import { Dispatch } from "redux";

import City from "../components/pages/City";

export type CityProps = {};

function mapStateToProps(appState: any) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps)(City);
