import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { IPrefecture } from "../../reducers/prefecture";

interface OwnProps {
  listData: IPrefecture[];
}

type Props = OwnProps;

const ListStandard: React.FC<Props> = (props: OwnProps) => {
  console.log(props);
  return (
    <div>
      <Header />
      {props.listData.map(pref => (
        <p key={pref.id}>{pref.title}</p>
      ))}
      <Footer />
    </div>
  );
};

export default ListStandard;
