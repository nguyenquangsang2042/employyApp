import React,{useEffect} from 'react';
import CreateEmployy from './screens/CreateEmployyeScreen';
import Home from './screens/Home';
import Profile from './screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import 'react-native-reanimated';
import { StyleSheet, Image, Text, View,Linking,Platform ,Picker} from "react-native";
const url="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80";

const Drawer = createDrawerNavigator();
const site = ["TCT", "DV"];
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
   <View style={{flexDirection:'row'}}>
   <Image
          style={{ width: 50, height: 50, borderRadius: 100 }}
          source={{
            uri: url
          }}
        /> 
        <Text style={{marginTop:15,marginLeft:10}}>nguyen quang sang</Text>
   </View>

   <Picker
        style={{ height: 50}}
      >
        <Picker.Item  label="TCT" value="java" />
        <Picker.Item label="DV" value="js" />
      </Picker>
      <DrawerItem icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)} label={'VB chờ xử lý'} onPress={()=>props.navigation.navigate('')}/>
      <DrawerItem icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)}  label={'Thông báo'} onPress={()=>props.navigation.navigate('')}/>
      <View style={{flexDirection:'row'}}>
      <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
      <Text style={styles.title}>Văn bản đến</Text>
      </View>
      <DrawerItem icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)} label={'Chờ cho ý kiến'} onPress={()=>props.navigation.navigate('')}/>
      <DrawerItem icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)}  label={'Chờ thực hiện'} onPress={()=>props.navigation.navigate('')}/>
      <DrawerItem  icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)} label={'Đã xử lý'} onPress={()=>props.navigation.navigate('')}/>
      <DrawerItem icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)} label={'Thông báo'} onPress={()=>props.navigation.navigate('')}/>
      <DrawerItem icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)} l label={'Tất cả'} onPress={()=>props.navigation.navigate('')}/>
         <View style={{flexDirection:'row'}}>
      <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
      <Text style={styles.title}>Văn bản đi</Text>
      </View>
      <DrawerItem icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)} label={'Chờ phê duyệt'} onPress={()=>props.navigation.navigate('')}/>
      <DrawerItem icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)} label={'Đã phê duyệt'} onPress={()=>props.navigation.navigate('')}/>
      <DrawerItem icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)} label={'Đã phát hành'} onPress={()=>props.navigation.navigate('')}/>
      <DrawerItem icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)} label={'Thông báo'} onPress={()=>props.navigation.navigate('')}/>
      <DrawerItem icon={({ focused, color, size }) => (
  <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
)} label={'Tất cả'} onPress={()=>props.navigation.navigate('')}/>
         <View style={{flexDirection:'row'}}>
      <Image
    source={{ uri: 'https://reactjs.org/logo-og.png' }}
    style={{ height: 30, width: 30 }}
    resizeMode='stretch'
  />
      <Text style={styles.logout}>Đăng xuất</Text>
      </View>
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation={false} drawerContent={props=><CustomDrawerContent{...props}/>}>
      <Drawer.Screen name="Home" component={Home} />
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
const styles=StyleSheet.create({
  title:{
    color:'#000',
    fontSize:18,
    textTransform:'uppercase',
    marginLeft:5

  },
  logout:{
    color:'#07e3eb',
    marginLeft:5,
    marginTop:5
  }
});
export default function App() {
  return (
    <NavigationContainer >
    <MyDrawer/>      
    </NavigationContainer>
    
  );
}


