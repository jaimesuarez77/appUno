import React, {useState} from 'react';

import {View, StatusBar, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity} from 'react-native';
import LoginStyles from './LoginStyles';
import Colors from '../../auth/shared/colors/Colors';
import ButtonStyles from '../shared/styles/ButtonStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const LoginSreens = ()=>{
   const [name, setName] = useState('');
   const [job, setJob] = useState('');
 /*   const validateEmail = ()=>{
      if (user === '') {
         Alert.alert('Debe llenar todos los campos')
      }
   } */

   const sendUser =  async ()=>{
      const respons = await fetch('https://reqres.in/api/users', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           name: name,
           job: job
         })
       });
       const responsJson = await respons.json();
       console.log(responsJson);
   }
   const getUser = async ()=>{
      const respons = await fetch('https://reqres.in/api/users/2');
      const responsJson = await respons.json()
      console.log(responsJson);
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
       
            <TextInput placeholder = 'name' style = {LoginStyles.inputData} onChangeText={(text)=>setName(text)}></TextInput>
            
            <TextInput placeholder = 'job' /*secureTextEntry ={true}*/  style = {LoginStyles.inputData} onChangeText={(text)=>setJob(text)} ></TextInput>
            <Text>Forget User?</Text>
            <TouchableOpacity onPress={()=>getUser()} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.large}>
                     <Text style={LoginStyles.textButton}>Login</Text>
                  </View>
            </TouchableOpacity>
            
            </View>
     
  </View>
}   
export default LoginSreens;