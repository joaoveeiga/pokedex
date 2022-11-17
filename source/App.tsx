import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeNavigator} from './home';

const {Screen, Navigator} = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="HomeScreen" component={HomeNavigator} />
      </Navigator>
    </NavigationContainer>
  );
}
