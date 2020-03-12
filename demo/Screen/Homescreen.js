import React, { Component } from 'react'
import { View } from 'react-native'
import MainHeader from '../Component/MainHeader'
import MainBody from '../Component/MainBody'

export default class Homescreen extends Component {
    render() {
        return (
            <View>
                <MainHeader />
                <MainBody />
            </View>
        );
    }
}