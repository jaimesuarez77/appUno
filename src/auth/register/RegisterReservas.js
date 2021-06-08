import React from 'react';
import  {useState} from 'react';
import{View, StatusBar, Image, Text, TextInput,TouchableOpacity,ScrollView, Alert} from 'react-native';
import GeneralStyles from "../shared/styles/GeneralStyles"
import ButtonStyles from '../shared/styles/ButtonStyles';
import Colors from '../../auth/shared/colors/Colors';
import ListReservas from '../home/ListReservas';

const RegisterReservas = ({route,navigation})=>{
  const {name} = route.params;
    
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
           
            NombreCliente: name,
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
       Alert.alert(responsJson.mensaje)
      const editarR = ({navigation})=>{navigation.navigate('Editar')
   }    
   }
  



  return <View style = {GeneralStyles.container}>
      
     
    
     <View style = {GeneralStyles.inputDataContainer}>
        <StatusBar backgroundColor = {Colors.primary}></StatusBar>
     
        <TextInput placeholder = 'Nombre Usuario' style = {GeneralStyles.inputData} >{name}</TextInput>
        <TextInput placeholder = 'Apellidos' style = {GeneralStyles.inputData} onChangeText={(text)=>setApellido(text)}></TextInput>
        <TextInput placeholder = 'Teléfono' style = {GeneralStyles.inputData} keyboardType="numeric" onChangeText={(text)=>setTelefonoCliente(text)}></TextInput>
        <TextInput placeholder = 'Fecha de Inicio' style = {GeneralStyles.inputData} keyboardType="numeric" onChangeText={(text)=>setFechaInicio(text)}></TextInput>
        <TextInput placeholder = 'Fecha Final' style = {GeneralStyles.inputData} keyboardType="numeric" onChangeText={(text)=>setFechaFinal(text)}></TextInput>
        <TextInput placeholder = 'Número de personas' style = {GeneralStyles.inputData} keyboardType="numeric" onChangeText={(text)=>setNumerodePersonas(text)}></TextInput>
        <TextInput placeholder = 'Tipo de Paquete' style = {GeneralStyles.inputData}  onChangeText={(text)=>setTipoPaque(text)}></TextInput>
        
        
     
    <TouchableOpacity onPress={() => sendUser()} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.medium}>
                  <Text style={GeneralStyles.textButton}>Registar Reserva</Text>
                  </View>
               </TouchableOpacity>     
   
        
     </View>
     
  </View>
}   
export default RegisterReservas;