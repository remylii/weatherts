import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import PrefectureContainer from "./containers/PrefectureContainer";
import PrefectureDetailContainer from "./containers/PrefectureDetailContainer";
import CityContainer from "./containers/CityContainer";

const App: React.FC = () => (
  <div>
    <Switch>
      <Route exact path="/" component={PrefectureContainer} />
      <Route path="/pref/:id" component={PrefectureDetailContainer} />
      <Route path="/city/:id" component={CityContainer} />
    </Switch>
    <div>
      <Link to="/">PrefectureContainer</Link>/
      <Link to="/pref/11">PrefectureDetailContainer</Link>/
      <Link to="/city/110010">CityContainer</Link>
    </div>
  </div>
);

export default App;
