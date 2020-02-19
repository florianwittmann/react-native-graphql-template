import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import screenNames from './screenNames';
import DetailPageScreen from '../screens/DetailPageScreen/DetailPageScreen';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={screenNames.HOME} component={HomeScreen} />
    <Stack.Screen name={screenNames.DETAILPAGE} component={DetailPageScreen} />
  </Stack.Navigator>
);
export default AppStack;
