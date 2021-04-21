import React from 'react';
import{View, StatusBar, Image, Text, TextInput} from 'react-native';
import RegisterStyles from './RegisterStyles';


const RegisterSreens = ()=>{
  return <View style = {RegisterStyles.container}>
      <StatusBar backgroundColor = 'orange'></StatusBar>
     <View  style={RegisterStyles.logoContainer}>
        <Image source={require('./img/account.png')}style = {RegisterStyles.logo} ></Image>
        <View>
            <Text style = {RegisterStyles.title}>Register</Text>
        </View>
     </View >
     <View style = {RegisterStyles.inputDataContainer}>
        <TextInput placeholder = 'Id' style = {RegisterStyles.inputData}></TextInput>
        <TextInput placeholder = 'User' style = {RegisterStyles.inputData}></TextInput>
        <TextInput placeholder = 'Email' style = {RegisterStyles.inputData}></TextInput>
        <TextInput placeholder = 'Password' style = {RegisterStyles.inputData}></TextInput>
        
     </View>
     
  </View>
}   
export default RegisterSreens;