import React, { Component } from 'react';
import { Container } from "native-base";
import UserContent from "./UserContent";
import UserFooter from "./UserFooter";
import UserHeader from './UserHeader';

export default class UserScreen extends Component {

  render() {
    return (
      <Container>
        <UserHeader />
        <UserContent />
        <UserFooter />
      </Container>
    );
  }
}
