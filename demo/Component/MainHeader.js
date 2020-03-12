import React, { Component } from 'react'
import { Header, Left, Body, Right, Icon, Button } from 'native-base'
import { Text } from 'react-native'

export default class MainHeader extends Component {
    render() {
        return(
            <Header>
                <Left>
                    <Button>
                        <Icon name="menu"/>
                    </Button>
                </Left>
                <Body>
                    <Text>Demo</Text>
                </Body>
                <Right/>
            </Header>
        );
    }
}