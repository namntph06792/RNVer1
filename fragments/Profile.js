import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Intro from '../fragments/Intro';
import Favourite from '../fragments/Favourite';
import Photo from '../fragments/Photo';

export default class Profile extends Component {
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading={<TabHeading><Icon name="person" /><Text>Intro</Text></TabHeading>}>
                        <Intro />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="heart"/><Text>Favourite</Text></TabHeading>}>
                        <Favourite />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="camera" /><Text>Photo</Text></TabHeading>}>
                        <Photo />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}