import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Homescreen from '../Screen/Homescreen'
import SuperResolutionScreen from '../Screen/SuperResolutionScreen'
import StyleTransferScreen from '../Screen/StyleTransferScreen'
import FrameInterpolationScreen from '../Screen/FrameInterpolationScreen'

export default createAppContainer(createSwitchNavigator({
    Home: {
        screen: Homescreen
    },
    SuperResolution: {
        screen: SuperResolutionScreen
    },
    FrameInterpolation: {
        screen: FrameInterpolationScreen
    },
    StyleTransfer: {
        screen: StyleTransferScreen
    }
}));