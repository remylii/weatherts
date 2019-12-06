import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import SubTitle from "../basics/SubTitle";
import { IPrefecture, ICity } from "../../reducers/prefecture";
import ListLinkPanel from "../parts/ListLinkPanel";
import ListPanel from "../parts/ListPanel";

type Props = {
  id?: string;
  title: string;
  listData: IPrefecture[] | ICity[];
  linkPath?: string;
};

const ListStandard: React.FC<Props> = props => {
  console.log(props);
  const Panel = props.linkPath ? (
    <ListLinkPanel listData={props.listData} linkPath={props.linkPath} />
  ) : (
    <ListPanel listData={props.listData} />
  );
  return (
    <div>
      <Header />
      <main>
        <SubTitle title={props.title} />
        {Panel}
      </main>
      <Footer />
    </div>
  );
};

export default ListStandard;
