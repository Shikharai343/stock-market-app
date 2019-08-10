import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import StockPriceScreen from '../screens/StockPriceScreen';
import {RouteNames} from './routes';

const homeStack = createStackNavigator({
    [RouteNames.home]: HomeScreen,
    [RouteNames.stock]: StockPriceScreen,
});

export const AppNavigator = (homeStack);

AppNavigator.navigationOptions = {
    header: null,
};
