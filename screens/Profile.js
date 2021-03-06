import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Image, Text, View,Linking,Platform } from "react-native";
import { Button, Card, Title } from "react-native-paper";
import { clearErrors } from "react-native/Libraries/LogBox/Data/LogBoxData";
const Profile = (props) => {
  const {id,name,picture,phone,salary,email,postion}=props.route.params.item
  const openDial=()=>{
    if(Platform.OS==="android")
    {
      Linking.openURL("tel:123")
    }
    else if(Platform.OS==="ios")
    {
      Linking.openURL("telprompt:456")
    }
  }
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#4d92ff", "#cddef7"]}
        style={{ height: "20%" }}
      />
      <View style={{ alignItems: "center", marginTop: -70 }}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 100 }}
          source={{
            uri: picture
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Title>{name}</Title>
        <Text>{postion}</Text>
      </View>
      <Card style={styles.mycard} onPress={()=>{Linking.openURL("mailto:someone@gmail.com")}}>
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="red" />
          <Text style={styles.mytext}>{email}</Text>
        </View>
      </Card>
      <Card style={styles.mycard} onPress={()=>openDial()}>
        <View style={styles.cardContent}>
          <MaterialIcons name="phone" size={32} color="blue" />
          <Text style={styles.mytext}>{phone}</Text>
        </View>
      </Card>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="blue" />
          <Text style={styles.mytext}>{salary}</Text>
        </View>
      </Card>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",justifyContent:"space-around",margin:10}}>
          <Button icon={"account-edit"} mode="contained" theme={theme}><Text style={{color:"white"}}>Edit</Text></Button>
          <Button icon={"delete"} mode="contained" theme={theme}><Text style={{color:"white"}}>Fire Employyee</Text></Button>
      </View>
    </View>
  );
};
const theme={
    colors:{
        primary:"#37abe6"
    }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#bababa",
  },
  mycard: {
    margin: 3,
  },
  cardContent: {
    flexDirection: "row",
    padding: 8,
  },
  mytext: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
});
export default Profile;
