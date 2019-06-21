import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import styles from '../src/styles';

export default class Photo extends Component {

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <View style={styles.photo_content}>
                    <Image source={require('../assets/fox01.jpg')} style={styles.photo_item} />
                    <Image source={require('../assets/fox02.jpg')} style={styles.photo_item} />
                </View>
            </Container>
        ) 
    }
}
