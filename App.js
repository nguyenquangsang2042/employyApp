import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateEmployy from './screens/CreateEmployyeScreen';
import Home from './screens/Home';
import Profile from './screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack= createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='CreateUser' component={CreateEmployy}/>
        <Stack.Screen name='profile' component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


