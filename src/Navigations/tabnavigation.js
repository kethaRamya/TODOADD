import React from "react";
import {View,Text,Image} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator,EmployeeStackNavigator,LocationStackNavigator,MessageStackNavigator } from "./stacknavigation";
import Entypo from 'react-native-vector-icons/Entypo';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = focused
                      ? <Entypo name='home' size={15}/>
                      : <Entypo name='home' size={15}/>
                  } 
                  
                  else if (route.name === 'Capture') {
                    iconName = focused ?  <Entypo name='camera' size={15}/> : <Entypo name='camera' size={15}/>
                  }

                  else if (route.name === 'Employee') {
                    iconName = focused ?  <Entypo name='users' size={15}/> : <Entypo name='users' size={15}/>
                  }
                  else if (route.name === 'Location') {
                    iconName = focused ?  <Entypo name='location-pin' size={15}/> : <Entypo name='location-pin' size={15}/>
                  }

                  else if (route.name === 'Message') {
                    iconName = focused ?  <Entypo name='message' size={15}/> : <Entypo name='message' size={15}/>
                  }
                  

                  return iconName
      
                },
            })}
            tabBarOptions={{
              activeTintColor: 'black',
              inactiveTintColor: 'black',
            }}
          >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Capture" component={ContactStackNavigator} />
      <Tab.Screen name="Employee" component={EmployeeStackNavigator} />
      <Tab.Screen name="Location" component={LocationStackNavigator} />
      <Tab.Screen name="Message" component={MessageStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
