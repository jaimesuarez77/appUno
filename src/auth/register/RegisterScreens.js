import React from 'react';
import  {useState} from 'react';
import{View, StatusBar, Image, Text, TextInput,TouchableOpacity} from 'react-native';
import GeneralStyles from "../shared/styles/GeneralStyles"
import RegisterStyles from './RegisterStyles';
import ButtonStyles from '../shared/styles/ButtonStyles';
import Colors from '../../auth/shared/colors/Colors';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//'https://reqres.in/api/users' , secureTextEntry ={true}


const RegisterSreens = ({navigation})=>{

   
   const [nombre, setNombre] = useState('');
   const [email, setEmail] = useState('');
   const [tipoUsuario, setTipoUsuario] = useState('');
   
   const sendUser =  async ()=>{
      const respons = await fetch('https://192.168.0.9:8080/reservas/usuarios', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           
           nombre: nombre,
           email: email,
           tipoUsuario:tipoUsuario
         })
       });
       const responsJson = await respons.json();
       console.log(responsJson);
   }
   const getUser = async ()=>{
      const respons = await fetch('192.168.0.9:8080/usuarios');
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
       
        <TextInput placeholder = 'Nombre Usuario' style = {GeneralStyles.inputData} onChangeText={(text)=>setNombre(text)}></TextInput>
        <TextInput placeholder = 'Email@' style = {GeneralStyles.inputData} onChangeText={(text)=>setEmail(text)}></TextInput>
        <TextInput placeholder = 'Tipo Usuario' style = {GeneralStyles.inputData}  onChangeText={(text)=>setTipoUsuario(text)}></TextInput>

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