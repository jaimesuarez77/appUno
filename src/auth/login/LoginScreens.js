import React, {useState} from 'react';

import {View, StatusBar, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity} from 'react-native';
import LoginStyles from './LoginStyles';
import Colors from '../../auth/shared/colors/Colors';
import ButtonStyles from '../shared/styles/ButtonStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const LoginSreens = ()=>{
   const [user, setUser] = useState('');
   const validateEmail = ()=>{
      if (user === '') {
         Alert.alert('Debe llenar todos los campos')
      }
   }
  return <View style = {LoginStyles.container}>
         <StatusBar backgroundColor = {Colors.primary}></StatusBar>
            <View backgroundColor = {Colors.primary} style={LoginStyles.logoContainer}>
            <Image source={require('./img/account.png')}style = {LoginStyles.logo} ></Image>
                  <View>
                        <Text style = {LoginStyles.title}>Login</Text>
                  </View>
            </View >
            <View style = {LoginStyles.inputDataContainer}>
       
            <TextInput placeholder = 'User' style = {LoginStyles.inputData} onChangeText={(text)=>setUser(text)}></TextInput>
            <Text>{user}</Text>
            <TextInput placeholder = 'Password' secureTextEntry ={true} keyboardType='numeric' style = {LoginStyles.inputData}></TextInput>
            <TouchableOpacity onPress={()=>validateEmail()} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.large}>
                     <Text style={LoginStyles.textButton}>Login</Text>
                  </View>
            </TouchableOpacity>
            </View>
     
  </View>
}   
export default LoginSreens;