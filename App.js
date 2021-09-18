import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './Screens/Home'
import DailyPicScreen from './Screens/DailyPic'
import SpaceCraftScreen from './Screens/SpaceCraft'
import StarMapScreen from './Screens/StarMap'

const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown:false
  }}>
  <Stack.Screen name="Home" component={Home}/>
  <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}/>
  <Stack.Screen name="StarMap" component={StarMapScreen}/>
  <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
</Stack.Navigator>
  </NavigationContainer>
  )
 }

export default App;
