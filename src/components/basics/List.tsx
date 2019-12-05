import React from "react";

type Props = {
  name: string;
};

const List: React.FC<Props> = (props: Props) => <li>{props.name}</li>;

export default List;
