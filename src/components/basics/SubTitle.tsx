import React from "react";

type Props = {
  title: string;
};

const SubTitle: React.FC<Props> = props => <h2>{props.title}</h2>;

export default SubTitle;
