import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ScreenHeader from '../Component/ScreenHeader'

export default class StyleTransferScreen extends Component {
    render() {
        return (
            <View>
                <ScreenHeader
                    screenName={'Style Transfer'}
                    navigation={this.props.navigation}
                />
                <Text>This page is StyleTransferScreen</Text>
            </View>
        );
    }
}