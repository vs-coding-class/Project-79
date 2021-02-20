import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/homescreen';
import ExchangeScreen from '../screens/exchangescreen';

const BottomTabNavigator = createBottomTabNavigator({
    ExchangeScreen: {
        screen: ExchangeScreen,
        navigationOptions: { tabBarLabel: 'Exchange Items' },
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: { tabBarLabel: 'Home' },
    },
});

export default BottomTabNavigator;