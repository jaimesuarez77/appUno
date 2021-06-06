import React, {useState} from 'react';

import {View, StatusBar, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity} from 'react-native';
import LoginStyles from './LoginStyles';
import GeneralStyles from "../shared/styles/GeneralStyles"
import Colors from '../../auth/shared/colors/Colors';
import ButtonStyles from '../shared/styles/ButtonStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ListUsersScreen} from '../users/ListUsersScreen.js';
const LoginSreens = ({navigation})=>{
  
   const [name, setName] = useState('');
   const [pass, setPass] = useState('');


   const sendUser =  async ()=>{
      const respons = await fetch('https://reqres.in/api/users', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           name: name,
           pass: pass
         })
       });
       const responsJson = await respons.json();
       console.log(responsJson);
   }
  

  return <View style = {GeneralStyles.container}>
         <StatusBar backgroundColor = {Colors.primary}></StatusBar>
            <View backgroundColor = {Colors.primary} style={GeneralStyles.logoContainer}>
            <Image source={require('./img/account.png')}style = {GeneralStyles.logo} ></Image>
                  <View>
                        <Text style = {GeneralStyles.title}>Login</Text>
                  </View>
            </View >
            <View style = {GeneralStyles.inputDataContainer}>
       
            <TextInput placeholder = 'User Name' style = {GeneralStyles.inputData} onChangeText={(text)=>setName(text)}></TextInput>
            
            <TextInput placeholder = 'Password' /*secureTextEntry ={true}*/  style = {GeneralStyles.inputData} onChangeText={(text)=>setPass(text)} ></TextInput>
           <TouchableOpacity  onPress={() => navigation.navigate('Register')}>
            <Text style={ {fontSize : 18}}>Forget User?</Text>
           </TouchableOpacity>

           {/*  getUser()     */ }
            <TouchableOpacity onPress={()=> navigation.navigate('Home',{name})} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.large}>
                     <Text style={GeneralStyles.textButton}>Login</Text>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.medium}>
                  <Text style={GeneralStyles.textButton}>Go Register</Text>
                  </View>
               </TouchableOpacity>
            
            </View>
     
  </View>
}   
export default LoginSreens;