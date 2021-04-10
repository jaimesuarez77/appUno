import React from 'react';
import{View, StatusBar, Image, Text, TextInput} from 'react-native';
import LoginStyles from './LoginStyles';


const LoginSreens = ()=>{
  return <View style = {LoginStyles.container}>
      <StatusBar backgroundColor = 'orange'></StatusBar>
     <View  style={LoginStyles.logoContainer}>
        <Image source={require('./img/login1.jpg')}style = {LoginStyles.logo} ></Image>
        <View>
            <Text style = {LoginStyles.title}>Login</Text>
        </View>
     </View >
     <View style = {LoginStyles.inputDataContainer}>
        <TextInput placeholder = 'Email' style = {LoginStyles.inputData}></TextInput>
        <TextInput placeholder = 'Password' style = {LoginStyles.inputData}></TextInput>
     </View>
     
  </View>
}   
export default LoginSreens;