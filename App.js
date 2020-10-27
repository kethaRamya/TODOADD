/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import TODOApp from './src/ToDoApp'
//import ShaadiLogin from './src/Screens/ShaadiLogin'
import Home from './src/components/Home'
import BottomTabNavigator from './src/Navigations/tabnavigation'
import { NavigationContainer } from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    flex: 1,
  }
});


export default App;
