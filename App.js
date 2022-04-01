import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateEmployy from './screens/CreateEmployyeScreen';
import Home from './screens/Home';
import Profile from './screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Title } from 'react-native-paper';

const Stack= createNativeStackNavigator();
const mycustomOptionsHeader={
  title:"home",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#006aff"
  }
}
export default function App() {
  
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Home' component={Home} options={mycustomOptionsHeader}/>
        <Stack.Screen name='CreateUser' options={{...mycustomOptionsHeader,title:"Create Employye"}} component={CreateEmployy}/>
        <Stack.Screen name='profile' options={{...mycustomOptionsHeader,title:"Profile"}} component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


