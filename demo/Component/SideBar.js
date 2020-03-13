import React, { Component } from 'react'
import { List, ListItem, Text } from 'native-base'
import { View } from 'react-native'

export default class SideBar extends Component {
    render() {
        return(
            <View>
                <List>
                    <ListItem>
                        <Text>Super Resolution</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Stlye Transfer</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Frame Interpolation</Text>
                    </ListItem>
                </List>
            </View>
        );
    }
}