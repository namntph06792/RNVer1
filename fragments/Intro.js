import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Separator } from 'native-base';
import styles from '../src/styles';

export default class Intro extends Component {

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Separator bordered>
                        <Text styles={{color: 'blue'}}>Name</Text>
                    </Separator>
                    <ListItem>
                        <Text>Nguyen Thanh</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Nam</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text styles={{ color: 'blue' }}>Birth</Text>
                    </Separator>
                    <ListItem>
                        <Text>16/11/1990</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Scropions</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text styles={{ color: 'blue' }}>Address</Text>
                    </Separator>
                    <ListItem last>
                        <Text>.....</Text>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}
