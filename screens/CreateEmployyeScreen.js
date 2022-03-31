import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const CreateEmployy=()=>{
    const [Name,setName]=React.useState("")
    const [phone,setPhone]=React.useState("")
    const [Email,setEmail]=React.useState("")
    const [salary,setSalary]=React.useState("")
    const [modal,setModal]=React.useState(false)
    
    return(
        <View style={StyleSheet.root}>
            <TextInput label={"name"} theme={theme} mode={"outlined"}style={styles.input} value={Name} onChangeText={text=>setName(text)} />
            <TextInput label={"phone"} mode={"outlined"} keyboardType="number-pad" style={styles.input} value={phone} onChangeText={text=>setPhone(text)}/>
            <TextInput label={"email"} mode={"outlined"} style={styles.input} value={Email} onChangeText={text=>setEmail(text)}/>
            <TextInput label={"salary"} mode={"outlined"} keyboardType="number-pad" style={styles.input} value={salary} onChangeText={text=>setSalary(text)}/>
        </View>
    )
}

const theme={
    colors:
    {
        primary:'red'
    }
}
const styles=StyleSheet.create({
    root:{
        flex:1
    },
    input: {
        margin:5
      },
})
export default CreateEmployy;