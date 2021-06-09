import React from "react";
import  {useState} from 'react';
import {View, Text,TouchableOpacity,TextInput, Alert}from 'react-native';
import GeneralStyles from '../shared/styles/GeneralStyles';
import ButtonStyles from '../shared/styles/ButtonStyles';
import Colors from '../../auth/shared/colors/Colors';
const EditarReserva=({route,navigation})=>{
const { NombreCliente, ApellidoCliente,
    TelefonoCliente,
    FechainicioReserva,
    FechaFinalReserva,
    Numerodepersonas,
    Tipopaquete,_id} = route.params.user;

    const [nombre,setNombre]= useState('');
    const [apellido, setApellido] = useState('');
   const [telefono, setTelefonoCliente] = useState('');
   const [fechaInicio, setFechaInicio] = useState('');
   const [fechaFinal, setFechaFinal] = useState('');
   const [numerodePersonas,setNumerodePersonas]= useState('');
   const [tipoPaquete,setTipoPaque]=useState(''); 

    const editUser = async () => {
        try {
            const response = await fetch(`https://hoteltransilvaniasapp.herokuapp.com/actualizar/editareservacion/${_id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  
                    NombreCliente: nombre,
                    ApellidoCliente: apellido,
                    TelefonoCliente:telefono,
                    FechainicioReserva: fechaInicio,
                    FechaFinalReserva: fechaFinal,
                    Numerodepersonas: numerodePersonas,
                    Tipopaquete:tipoPaquete
                })
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            Alert.alert("Reserva Editada con exito...");
        } catch (e) {
            Alert.alert("Hubo un error inesperado, vuelva a intentarlo más tarde");
        }
    }
    const deleteUser = async () => {
        try {
            const response = await fetch(`https://hoteltransilvaniasapp.herokuapp.com/eliminar/Eliminareserva/${_id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: _id,
                })
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            Alert.alert("Reserva Eliminada con exito");
        } catch (e) {
            Alert.alert("Hubo un error inesperado, vuelva a intentarlo más tarde");
        }
    }

    return(
        
        <View  style={{ flex:1,alignItems:'center'}}>
            <View>
                {/*<TextInput style = {GeneralStyles.inputDataEditar} >Id:{_id}</TextInput>*/}
                <Text>Nombres:</Text> 
                <TextInput style = {GeneralStyles.inputDataEditar} onChangeText={(text)=>setNombre(text)}>{NombreCliente}</TextInput>
                <Text>Apellidos:</Text>   
                <TextInput style = {GeneralStyles.inputDataEditar} onChangeText={(text)=>setApellido(text)} >{ApellidoCliente}</TextInput>
                <Text>Teléfono:</Text>  
                <TextInput style = {GeneralStyles.inputDataEditar} onChangeText={(text)=>setTelefonoCliente(text)} keyboardType="numeric" >{TelefonoCliente}</TextInput> 
                <Text>Fecha Incial:</Text> 
                <TextInput style = {GeneralStyles.inputDataEditar} onChangeText={(text)=>setFechaInicio(text)} keyboardType="numeric">{FechainicioReserva}</TextInput> 
                <Text>Fecha Final:</Text> 
                <TextInput style = {GeneralStyles.inputDataEditar} onChangeText={(text)=>setFechaFinal(text)} keyboardType="numeric">{FechaFinalReserva}</TextInput> 
                <Text>Numero de personas:</Text> 
                <TextInput style = {GeneralStyles.inputDataEditar} onChangeText={(text)=>setNumerodePersonas(text)} keyboardType="numeric">{Numerodepersonas}</TextInput> 
                <Text>Tipo de Paquete:</Text> 
                <TextInput style = {GeneralStyles.inputDataEditar} onChangeText={(text)=>setTipoPaque(text)}>{Tipopaquete}</TextInput> 
                
               
            </View>
        <View >
            <TouchableOpacity  onPress={() => editUser()}>
            <View backgroundColor = {Colors.primary} style = {ButtonStyles.medium} >
                  <Text style={GeneralStyles.textButton}>Editar</Text>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => deleteUser()}>
            <View backgroundColor = {Colors.primary} style = {ButtonStyles.medium}>
                  <Text style={GeneralStyles.textButton}>Eliminar</Text>
                  </View>
            </TouchableOpacity>
        </View>
    </View>
    )

}
export default EditarReserva;