import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ScreenHeader from '../Component/ScreenHeader'

export default class FrameInterpolationScreen extends Component {
    render() {
        return (
            <View>
                <ScreenHeader
                    screenName={'Frame Interpolation'}
                    navigation={this.props.navigation}
                />
                <Text>This page is Frame Interpolation</Text>
            </View>
        );
    }
}