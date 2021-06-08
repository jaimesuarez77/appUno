import React from "react";
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

    const editUser = async () => {
        try {
            const response = await fetch('https://hoteltransilvaniasapp.herokuapp.com/actualizar/editareservacion/60bed1062fdf910015b4a8b6', {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    NombreCliente: NombreCliente,
                    ApellidoCliente: ApellidoCliente,
                    TelefonoCliente:TelefonoCliente,
                    FechainicioReserva: FechainicioReserva,
                    FechaFinalReserva: FechaFinalReserva,
                    Numerodepersonas: Numerodepersonas,
                    Tipopaquete:Tipopaquete
                })
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse)
        } catch (e) {
            Alert.alert("Hubo un error inesperado, vuelva a intentarlo más tarde");
        }
    }

    return(
        
        <View  >
            <View>
                <TextInput style = {GeneralStyles.inputData} >Nombre:{NombreCliente}</TextInput>  
                <TextInput style = {GeneralStyles.inputData} >Apellido:{ApellidoCliente}</TextInput> 
                <TextInput style = {GeneralStyles.inputData} >Telefóno:{TelefonoCliente}</TextInput> 
                <TextInput style = {GeneralStyles.inputData} >Fecha Inicial:{FechainicioReserva}</TextInput> 
                <TextInput style = {GeneralStyles.inputData} >fecha Final:{FechaFinalReserva}</TextInput> 
                <TextInput style = {GeneralStyles.inputData} >Número de personas:{Numerodepersonas}</TextInput> 
                <TextInput style = {GeneralStyles.inputData} >Tipo de paquete:{Tipopaquete}</TextInput> 
                
               
            </View>
        <View >
            <TouchableOpacity  onPress={() => editUser()}>
            <View backgroundColor = {Colors.primary} style = {ButtonStyles.small}>
                  <Text style={GeneralStyles.textButton}>Editar</Text>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => deleteUser()}>
            <View backgroundColor = {Colors.primary} style = {ButtonStyles.small}>
                  <Text style={GeneralStyles.textButton}>Eliminar</Text>
                  </View>
            </TouchableOpacity>
        </View>
    </View>
    )

}
export default EditarReserva;