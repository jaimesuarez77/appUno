import React from 'react';
import{View, StatusBar, Image, Text, TextInput} from 'react-native';
import GeneralStyles from "../shared/styles/GeneralStyles"
import RegisterStyles from './RegisterStyles';
import Colors from '../../auth/shared/colors/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RegisterSreens = ()=>{
  return <View style = {GeneralStyles.container}>
      <StatusBar backgroundColor = {Colors.primary}></StatusBar>
     <View backgroundColor = {Colors.primary} style = {GeneralStyles.logoContainer}>
        <Image source={require('./img/account.png')}style = {GeneralStyles.logo} ></Image>
        <View>
            <Text style = {GeneralStyles.title}>Register</Text>
        </View>
     </View >
     <View style = {GeneralStyles.inputDataContainer}>
        <TextInput placeholder = 'Id' style = {GeneralStyles.inputData} keyboardType='numeric' ></TextInput>
        <TextInput placeholder = 'User' style = {GeneralStyles.inputData}></TextInput>
        <TextInput placeholder = 'Email' style = {GeneralStyles.inputData}></TextInput>
        <TextInput placeholder = 'Password' style = {GeneralStyles.inputData} secureTextEntry ={true}></TextInput>
     {/*    <TouchableOpacity onPress={() => navigation.navigate('Login')} >
      <View backgroundColor = {Colors.primary} style = {ButtonStyles.large}>
               <Text style={LoginStyles.textButton}>Login</Text>
            </View>
          </TouchableOpacity> */}
        
     </View>
     
  </View>
}   
export default RegisterSreens;