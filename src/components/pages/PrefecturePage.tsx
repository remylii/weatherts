import React from "react";
import ListStandard from "../templates/ListStandard";
import { PrefectureProps } from "../../containers/PrefectureContainer";

type Props = {} & PrefectureProps;

const PrefecturePage: React.FC<Props> = (props: Props) => {
  console.log(props.prefectures);
  return <ListStandard listData={props.prefectures} />;
};

export default PrefecturePage;
