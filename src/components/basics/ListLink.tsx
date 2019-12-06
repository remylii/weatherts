import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  url: string;
};

const ListLink: React.FC<Props> = (props: Props) => (
  <Link to={props.url}>{props.title}</Link>
);

export default ListLink;
