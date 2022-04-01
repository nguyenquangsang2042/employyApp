import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,PermissionsAndroid,TouchableNativeFeedback } from "react-native";
import { Button, Modal, TextInput } from "react-native-paper";
import { Keyboard } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const CreateEmployy = () => {
  const [Name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const showModal = () =>{ setModal(true); Keyboard.dismiss();}
  const hideModal = () => setModal(false);
  const hideKeyboard= ()=>{Keyboard.dismiss();}
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const [rippleColor, setRippleColor] = React.useState("#fff");
  const [rippleOverflow, setRippleOverflow] = React.useState(false);
  
  //get image 
  const pickImageFromGallery = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
  }
  const pickImageFromCamera = async () => {
    
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
   
  }
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        pickImageFromCamera();
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  return (
    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)} onPress = {()=>{ 
       setRippleColor("#fff");
       setRippleOverflow(!rippleOverflow);
      hideKeyboard();
      } }>
    <View style={styles.root} >
      <TextInput
        label={"name"}
        theme={theme}
        mode={"outlined"}
        style={styles.input}
        value={Name}
        onPressIn={hideModal}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label={"phone"}
        mode={"outlined"}
        keyboardType="number-pad"
        style={styles.input}
        value={phone}
        onPressIn={hideModal}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
      onPressIn={hideModal}
        label={"email"}
        mode={"outlined"}
        style={styles.input}
        value={Email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
      onPressIn={hideModal}
        label={"salary"}
        mode={"outlined"}
        keyboardType="number-pad"
        style={styles.input}
        value={salary}
        onChangeText={(text) => setSalary(text)}
      />
    <View style={{margin:10}}      >
        <Button style={{marginBottom:10}} icon="upload" mode="contained" onPress={showModal}>
          upload Image
        </Button>
        <Button icon="content-save" mode="contained" onPress={showModal}>
         Save
        </Button>
      </View>
      <Modal
      style={styles.modal}
        visible={modal}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
          <Button icon="image-area" mode="contained" onPress={pickImageFromGallery}>
          upload Image
        </Button>
        <Button icon="camera" mode="contained" onPress={requestCameraPermission}>
          Take a picture
        </Button>
          </View>
          <Button style={{backgroundColor:"#fff",shadowColor:"#fff"}} icon="cancel" mode="contained" onPress={hideModal}>
          <Text style={{color:"#4f4f4f"}}>Cancel</Text>
        </Button>
        </View>
      </Modal>
      
    </View>
    </TouchableNativeFeedback>
  );
};

const theme = {
  colors: {
    primary: "red",
  },
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:"#fff"
  },
  input: {
    margin: 5,
  },
  modal:{
    justifyContent: 'flex-end',
    width:"100%",
    

  },
  modalView:{
      
      },
  modalButtonView:{
      flexDirection:"row",
      justifyContent:"space-around",
      padding:10
        }
});
export default CreateEmployy;
