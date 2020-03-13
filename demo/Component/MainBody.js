import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class MainBody extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginTop: 10}}>Hello</Text>
                <Text style={{marginTop: 10}}>Demo</Text>
                <Text style={{marginTop: 10}}>Version</Text>
                <Button
                    title="Super Resolution"
                    onPress={() => this.props.navigation.navigate('SuperResolution')}
                />
                <Button
                    title="Style Transfer"
                    onPress={() => this.props.navigation.navigate('StyleTransfer')}
                />
                <Button
                    title="Frame Interpolation"
                    onPress={() => this.props.navigation.navigate('FrameInterpolation')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop : 20
    }
})