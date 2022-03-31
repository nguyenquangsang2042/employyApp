import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { Button, Card, Title } from "react-native-paper";
import { clearErrors } from "react-native/Libraries/LogBox/Data/LogBoxData";
const Profile = () => {
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
            uri: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Title>Nguyễn Quang Sáng</Title>
        <Text>Mobile Developer</Text>
      </View>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="red" />
          <Text style={styles.mytext}>nguyenquangsang2042@gmail.com</Text>
        </View>
      </Card>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="phone" size={32} color="blue" />
          <Text style={styles.mytext}>123</Text>
        </View>
      </Card>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="blue" />
          <Text style={styles.mytext}>nguyenquangsang2042@gmail.com</Text>
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
