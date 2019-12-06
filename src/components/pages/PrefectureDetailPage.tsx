import React from "react";
import { PrefectureDetailProps } from "../../containers/PrefectureDetailContainer";

import NotfoundPage from "./NotfoundPage";
import ListStandard from "../templates/ListStandard";

type Props = PrefectureDetailProps;

export default class PrefectureDetailContainer extends React.Component<Props> {
  render() {
    if (!this.props.prefecture) {
      return <NotfoundPage />;
    }

    return (
      <ListStandard
        id={this.props.id}
        title={this.props.prefecture.title}
        listData={this.props.prefecture.cities}
        linkPath="/city/"
      />
    );
  }
}
