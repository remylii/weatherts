import React from "react";
import { IPrefecture } from "../../reducers/prefecture";
import List from "../../components/basics/List";

type Props = {
  listData: IPrefecture[];
};

const ListPanel: React.FC<Props> = (props: Props) => (
  <ul>
    {props.listData.map(val => {
      <List key={`list-${val.id}`} name={val.title} />;
    })}
  </ul>
);
export default ListPanel;
