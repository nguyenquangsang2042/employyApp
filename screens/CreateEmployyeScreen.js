import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,PermissionsAndroid,TouchableNativeFeedback } from "react-native";
import { Button, Modal, TextInput } from "react-native-paper";
import { Keyboard } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Platform } from "expo-modules-core";
import * as Permissions from 'expo-permissions';

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
    if(!result.cancelled)
    {
      let newfile={uri:result.uri,
        type:`test/${result.uri.split(".")[1]}`,
        name:`test.${result.uri.split(".")[1]}`}
      handelUpload(newfile)
    }  }
  const pickImageFromCamera = async () => {
    
    const permission = await Permissions.getAsync(Permissions.CAMERA);
    if (permission.status !== 'granted') {
        const newPermission = await Permissions.askAsync(Permissions.CAMERA);
        if (newPermission.status === 'granted') {
          //its granted.
          let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if(!result.cancelled)
          {
            let newfile={uri:result.uri,
              type:`test/${result.uri.split(".")[1]}`,
              name:`test.${result.uri.split(".")[1]}`}
            handelUpload(newfile)
          }
        }
    } else {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if(!result.cancelled)
      {
        let newfile={uri:result.uri,
          type:`test/${result.uri.split(".")[1]}`,
          name:`test.${result.uri.split(".")[1]}`}
        handelUpload(newfile)
      }
    }
  }
  const handelUpload = (image) =>
  {
    const data= new FormData();
    data.append('file',image);
    data.append('upload_preset','employyApp_ReactNative');
    data.append('cloud_name','sangnq2903');

    fetch("https://api.cloudinary.com/v1_1/sangnq2903/image/upload",
    {
      method:"post",
      body:data
    }).then(res=>res.json()).then(data=>{console.log(data)})
  }
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
        <Button icon="camera" mode="contained" onPress={pickImageFromCamera}>
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
