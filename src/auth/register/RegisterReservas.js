import React from 'react';
import  {useState} from 'react';
import{View, StatusBar, Image, Text, TextInput,TouchableOpacity,ScrollView} from 'react-native';
import GeneralStyles from "../shared/styles/GeneralStyles"
import RegisterStyles from './RegisterStyles';
import ButtonStyles from '../shared/styles/ButtonStyles';
import Colors from '../../auth/shared/colors/Colors';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//'https://reqres.in//api/users?page=2' , secureTextEntry ={true},'https://localHost:8080/api/usuario/nuevo'


const RegisterReservas = ({route,navigation})=>{
   const {name} = route.params;
   const {source} = route.params;
   
   const [nombre, setNombre] = useState('');
   const [apellido, setApellido] = useState('');
   const [telefonoCliente, setTelefonoCliente] = useState('');
   const [fechaInicio, setFechaInicio] = useState('');
   const [fechaFinal, setFechaFinal] = useState('');
   const [numerodePersonas,setNumerodePersonas]= useState('');
   const [tipoPaquete,setTipoPaque]=useState(''); 

   const sendUser =  async ()=>{
      const respons = await fetch('https://hoteltransilvaniasapp.herokuapp.com/crear/nuevareservacion', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           
            NombreCliente: nombre,
            ApellidoCliente: apellido,
            TelefonoCliente:telefonoCliente,
            FechainicioReserva: fechaInicio,
            FechaFinalReserva: fechaFinal,
            Numerodepersonas: numerodePersonas,
            Tipopaquete:tipoPaquete
           
         })
       });
       const responsJson = await respons.json();
       console.log(responsJson);
   }
  



  return <View style = {GeneralStyles.container}>
      <StatusBar backgroundColor = {Colors.primary}></StatusBar>
     <View backgroundColor = {Colors.primary} style = {GeneralStyles.logoContainer}>
        <Image source={require('./img/account.png')}style = {GeneralStyles.logo} ></Image>
        <View>
            <Text style = {GeneralStyles.title}>Reservas</Text>
        </View>
     </View >
     <View style = {GeneralStyles.inputDataContainer}>
     <ScrollView >  
        <TextInput placeholder = 'Nombre Usuario' style = {GeneralStyles.inputData} onChangeText={(text)=>setNombre(text)}>{name}</TextInput>
        <TextInput placeholder = 'Apellidos' style = {GeneralStyles.inputData} onChangeText={(text)=>setApellido(text)}></TextInput>
        <TextInput placeholder = 'Teléfono' style = {GeneralStyles.inputData} keyboardType={Number} onChangeText={(text)=>setTelefonoCliente(text)}></TextInput>
        <TextInput placeholder = 'Fecha de Inicio' style = {GeneralStyles.inputData} keyboardType={Number} onChangeText={(text)=>setFechaInicio(text)}></TextInput>
        <TextInput placeholder = 'Fecha Final' style = {GeneralStyles.inputData} keyboardType={Number} onChangeText={(text)=>setFechaFinal(text)}></TextInput>
        <TextInput placeholder = 'Número de personas' style = {GeneralStyles.inputData} keyboardType={Number} onChangeText={(text)=>setNumerodePersonas(text)}></TextInput>
        <TextInput placeholder = 'Tipo de Paquete' style = {GeneralStyles.inputData}  onChangeText={(text)=>setTipoPaque(text)}></TextInput>
        <TextInput placeholder = 'Imagen' style = {GeneralStyles.inputData} >{source}</TextInput>
        
    </ScrollView>  
    <TouchableOpacity onPress={() => sendUser()} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.medium}>
                  <Text style={GeneralStyles.textButton}>Registar Reserva</Text>
                  </View>
               </TouchableOpacity>     
   
        
     </View>
     
  </View>
}   
export default RegisterReservas;