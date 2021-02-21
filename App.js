import * as React from 'react';
import SignUpLoginScreen from './screens/signuploginscreen';
import BottomTabNavigator from './components/apptabnavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default function App() {
  return <AppContainer />;
}

const SwitchNavigator = createSwitchNavigator({
  SignUpLoginScreen: SignUpLoginScreen,
  BottomTabNavigator: { screen: BottomTabNavigator }
});

const AppContainer = createAppContainer(SwitchNavigator);