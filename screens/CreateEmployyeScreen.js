import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Modal, TextInput } from "react-native-paper";
import { Keyboard } from "react-native";

const CreateEmployy = () => {
  const [Name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const showModal = () =>{ setModal(true); Keyboard.dismiss();}
  const hideModal = () => setModal(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <View style={styles.root}>
      <TextInput
        label={"name"}
        theme={theme}
        mode={"outlined"}
        style={styles.input}
        value={Name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label={"phone"}
        mode={"outlined"}
        keyboardType="number-pad"
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        label={"email"}
        mode={"outlined"}
        style={styles.input}
        value={Email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
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
          <Button icon="image-area" mode="contained" onPress={showModal}>
          upload Image
        </Button>
        <Button icon="camera" mode="contained" onPress={showModal}>
          Take a picture
        </Button>
          </View>
          <Button style={{backgroundColor:"#fff",shadowColor:"#fff"}} icon="cancel" mode="contained" onPress={hideModal}>
          <Text style={{color:"#4f4f4f"}}>Cancel</Text>
        </Button>
        </View>
      </Modal>
      
    </View>
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
