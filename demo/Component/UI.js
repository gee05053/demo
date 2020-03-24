import React, {Component} from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default class UI extends Component {
    render() {
        return(
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={{ flex: 1 }}>
                    <Text>Welcome to UI Kitten</Text>
                </Layout>
            </ApplicationProvider>
        )
    }
}