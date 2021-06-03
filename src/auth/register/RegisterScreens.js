import React from 'react';
import  {useState} from 'react';
import{View, StatusBar, Image, Text, TextInput,TouchableOpacity} from 'react-native';
import GeneralStyles from "../shared/styles/GeneralStyles"
import RegisterStyles from './RegisterStyles';
import ButtonStyles from '../shared/styles/ButtonStyles';
import Colors from '../../auth/shared/colors/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const RegisterSreens = ({navigation})=>{

   
   const [user, setUser] = useState('');
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const sendUser =  async ()=>{
      const respons = await fetch('https://reqres.in/api/users', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           id:id, 
           user: user,
           email:email,
           pass:pass
         })
       });
       const responsJson = await respons.json();
       console.log(responsJson);
   }
   const getUser = async ()=>{
      const respons = await fetch('https://reqres.in/api/users?page=2');
      const responsJson = await respons.json()
      console.log(responsJson);
      navigation.navigate('ListUser');
   }



  return <View style = {GeneralStyles.container}>
      <StatusBar backgroundColor = {Colors.primary}></StatusBar>
     <View backgroundColor = {Colors.primary} style = {GeneralStyles.logoContainer}>
        <Image source={require('./img/account.png')}style = {GeneralStyles.logo} ></Image>
        <View>
            <Text style = {GeneralStyles.title}>Register</Text>
        </View>
     </View >
     <View style = {GeneralStyles.inputDataContainer}>
       
        <TextInput placeholder = 'User' style = {GeneralStyles.inputData} onChangeText={(text)=>setUser(text)}></TextInput>
        <TextInput placeholder = 'Email' style = {GeneralStyles.inputData} onChangeText={(text)=>setEmail(text)}></TextInput>
        <TextInput placeholder = 'Password' style = {GeneralStyles.inputData} secureTextEntry ={true} onChangeText={(text)=>setPass(text)}></TextInput>

        <TouchableOpacity onPress={() => sendUser()} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.small}>
                  <Text style={GeneralStyles.textButton}>Register</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => getUser()} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.small}>
                  <Text style={GeneralStyles.textButton}>Lista de Usuarios</Text>
                  </View>
               </TouchableOpacity>
   
        
     </View>
     
  </View>
}   
export default RegisterSreens;