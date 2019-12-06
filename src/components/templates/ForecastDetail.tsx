import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import SubTitle from "../basics/SubTitle";

type Props = {
  id: string;
  title: string;
};

class ForecastDetail extends React.Component<Props> {
  render() {
    return (
      <div>
        <Header />
        <main>
          <SubTitle title={`ID: ${this.props.id}, ${this.props.title}`} />
          <section>forecast template</section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default ForecastDetail;
