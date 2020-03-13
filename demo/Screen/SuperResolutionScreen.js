import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Button } from 'native-base'
import ScreenHeader from '../Component/ScreenHeader'

export default class SuperResolutionScreen extends Component {
    render() {
        return (
            <View>
                <ScreenHeader
                    screenName={"SuperResolution"}
                    navigation={this.props.navigation}
                />
                <Text>This page is SuperResolution</Text>
            </View>
        );
    }
}