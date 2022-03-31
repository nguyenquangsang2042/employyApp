import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
const Profile = () => {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#446291", "#025ff0"]}
        style={{ height: "20%" }}
      />
      <View style={{alignItems:"center",marginTop:-70}}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 100 }}
          source={{
            uri: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default Profile;
