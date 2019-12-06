import React from "react";
import { CityProps } from "../../containers/CityContainer";
import ForecastDetail from "../templates/ForecastDetail";

type Props = CityProps;

const CityPage: React.FC<Props> = props => (
  <ForecastDetail id={props.id} title="city detail" />
);

export default CityPage;
