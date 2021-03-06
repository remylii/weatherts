import React from "react";
import { ICity } from "../../reducers/prefecture";

type Props = {
  listData: ICity[];
};

const ListLinkPanel: React.FC<Props> = props => (
  <ul>
    {props.listData.map(data => {
      return <li key={`list-link-${data.id}`}>{data.title}</li>;
    })}
  </ul>
);

export default ListLinkPanel;
