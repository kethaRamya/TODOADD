import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Platform} from 'react-native'

import Home from "../components/Home";

import Capture from "../components/Capture";
import Location from "../components/Location";
import EmployeeData from "../components/Employees";

import MessageData from "../components/message.js";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
   // backgroundColor: "#9AC4F8",
  },
  //headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
     
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Capture" component={Capture} />
    </Stack.Navigator>
  );
}

const EmployeeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Employee" component={EmployeeData} />
    </Stack.Navigator>
  );
}

const LocationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
}
const MessageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Message" component={MessageData} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator,EmployeeStackNavigator,LocationStackNavigator,MessageStackNavigator };