import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import PrefectureContainer from "./containers/PrefectureContainer";
import AreaContainer from "./containers/AreaContainer";
import CityContainer from "./containers/CityContainer";

const App: React.FC = () => (
  <div>
    <Switch>
      <Route exact path="/" component={PrefectureContainer} />
      <Route path="/area/:id" component={AreaContainer} />
      <Route path="/city/:id" component={CityContainer} />
    </Switch>
    <div>
      <Link to="/">Pref</Link>
      <Link to="/area/1">Area</Link>
      <Link to="/city/12">City</Link>
    </div>
  </div>
);

export default App;
