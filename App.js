import React,{useEffect} from 'react';
import CreateEmployy from './screens/CreateEmployyeScreen';
import Home from './screens/Home';
import Profile from './screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import 'react-native-reanimated';
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation={false} drawerContent={props=><CustomDrawerContent{...props}/>}>
      <Drawer.Screen name="Feed" component={Home} />
      <Drawer.Screen name="CreateUser" component={CreateEmployy} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
}
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
    <MyDrawer/>      
    </NavigationContainer>
    
  );
}


