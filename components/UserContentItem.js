import React, { Component } from 'react';
import { Image } from 'react-native';
import { Left, Body, Right, Card, CardItem, Thumbnail, Button, Icon, Text } from "native-base";
import styles from '../src/styles';

export default class UserContentItem extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            com: 'React Native',
            author: 'itachi',
        }
    }

    render() {
        let pic = [
            'https://www.innofied.com/wp-content/uploads/2018/12/2018-12-06.jpg',
            'https://cdn-images-1.medium.com/max/1200/1*NfPUYmXKR-duZ2vu9F6-Nw.png',
            'https://www.titechglobal.com/wp-content/uploads/2018/08/react-native-banner-1200x600.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAU9Th4Y8yZ2KLrsFLWoEtI3KWZRaeCVMDwuyvea9jGgeCVqA28Q',
            'https://cdn-az.allevents.in/banners/306d7b30-1773-11e9-aa0c-915da2bdce45-rimg-w1200-h600-gmir.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jqsxbwwHxJ1x63YH4HKrWCu29-gqvbuUq2DhIMFhydbegKNi',
            'https://cdn-images-1.medium.com/max/1200/1*1hs3HAKYqoUpPzomTkA0-w.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDe1F7NW5dHp5dVg69NbNJQm2ElQ-mjOa1v9HiI0RSsqXCkKp',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBazFA9olrV0sjNaTiGLcPjZO4spm5VuuTOXUKnyz3agwH_1m',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevR04W4tdQEnY0tiIycNXvlphZqSQtcsbvDqI7M3yBP352eMw'
        ]
        var image = pic[Math.floor(Math.random() * pic.length)];

        return (
            <Card style={styles.user_item}>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/react-native.png')} />
                        <Body>
                            <Text>{this.state.com}</Text>
                            <Text note>{this.state.author}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: image}} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem cardBody>
                    <Text>{this.props.dat.title}</Text>
                </CardItem>
                <CardItem cardBody>
                    <Text note>{this.props.dat.content}</Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="heart" style={{ color: '#ED4A6A' }} />
                            <Text>{this.props.dat.like}</Text>
                        </Button>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>{this.props.dat.comment}</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon active name="share" />
                            <Text>Share</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}