import React from "react";
import DetailsCriada from "../components/DetailsCriada";

export default class PageDetailsCriada extends React.Component {
  render() {
     const { vaga } = this.props.navigation.state.params;
    return (
      <DetailsCriada vaga={vaga}/>
    );
  }
}
