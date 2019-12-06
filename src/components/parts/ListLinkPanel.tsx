import React from "react";
import ListLink from "../basics/ListLink";
import { ICity } from "../../reducers/prefecture";

type Props = {
  linkPath: string;
  listData: ICity[];
};

const ListLinkPanel: React.FC<Props> = props => (
  <ul>
    {props.listData.map(data => {
      return (
        <li key={`list-link-${data.id}`}>
          <ListLink title={data.title} url={`${props.linkPath}${data.id}`} />
        </li>
      );
    })}
  </ul>
);

export default ListLinkPanel;
