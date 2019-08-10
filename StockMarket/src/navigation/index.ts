import {
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';
import { AppNavigator } from './mainNavigation';
import SplashScreen from '../screens/SplashScreen';
import {RouteNames} from './routes';

export default createAppContainer(createSwitchNavigator(
    {
        [RouteNames.splash]: SplashScreen,
        [RouteNames.app]: AppNavigator,
    },
    {
        initialRouteName: RouteNames.splash,
    },
));
