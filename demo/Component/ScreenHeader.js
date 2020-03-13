import React, { Component } from 'react'
import { Header, Left, Body, Right, Icon, Button } from 'native-base'
import { Text } from 'react-native'

export default class ScreenHeader extends Component {
    render() {
        return(
            <Header>
                <Left>
                    <Button onPress={()=>this.props.navigation.navigate('Home')}>
                        <Icon name="ios-arrow-round-back"/>
                    </Button>
                </Left>
                <Body>
                    <Text>{this.props.screenName}</Text>
                </Body>
                <Right/>
            </Header>
        );
    }
}