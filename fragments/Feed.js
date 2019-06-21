import React, { Component } from 'react';
import { Container } from "native-base";
import FContent from "../components/FContent";
// import FFooter from "../components/FFooter";
// import FHeader from '../components/FHeader';

export default class Feed extends Component {

  render() {
    return (
      <Container>
        {/* <FHeader /> */}
        <FContent />
        {/* <FFooter /> */}
      </Container>
    );
  }
}
