import React from 'react';
import {View, Text,Image, TouchableOpacity, Alert, Button} from 'react-native';
import GeneralStyles from '../shared/styles/GeneralStyles';
import ButtonStyles from '../shared/styles/ButtonStyles';
import Colors from '../../auth/shared/colors/Colors';
{/* <Image source={{uri: data.avatar}} style={GeneralStyles.viewImage} /> */}
const CardComponentReservas =(props)=>{
    const{mensaje}= props;
    console.log(props);

   /*  const eliminarUsuario= async () => {
        try{
          const response = await fetch('', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              id: id
              
            })
          });
          const json = await response.json();
          Alert.alert("Usuario Eliminado");
        }catch(error){
          console.log(error);
        } 
  
      } */
  
    return <View style = {GeneralStyles.cardViewReservas}>
        <View>
        <Image source={require('../shared/img/frente2.jpg')} style={GeneralStyles.viewImage} ></Image>
        </View>
         
         <View>
            <Text style= {GeneralStyles.viewText}>Nombre: {mensaje.NombreCliente}</Text>
            <Text style= {GeneralStyles.viewText}>Apellidos: {mensaje.ApellidoCliente}</Text>
            <Text style= {GeneralStyles.viewText}>Telefono: {mensaje.TelefonoCliente}</Text>
            <Text style= {GeneralStyles.viewText}>Fecha Inicial: {mensaje.FechainicioReserva}</Text>
            <Text style= {GeneralStyles.viewText}>Fecha Final: {mensaje.FechaFinalReserva}</Text>
            <Text style= {GeneralStyles.viewText}>Numero de personas: {mensaje.Numerodepersonas}</Text>
            <Text style= {GeneralStyles.viewText}>Tipo de tiquete: {mensaje.Tipopaquete}</Text> 
            <View style={GeneralStyles.viewBotton }>
            <TouchableOpacity onPress={() => Alert.alert(`Desea Eliminar Usuario ${mensaje.NombreCliente}`)} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.small}>
                  <Text style={GeneralStyles.textButton}>Eliminar</Text>
                  </View>
               </TouchableOpacity> 
               <TouchableOpacity onPress={() => Alert.alert(`Desea Editar Usuario ${mensaje.NombreCliente}`)} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.small}>
                  <Text style={GeneralStyles.textButton}>Editar</Text>
                  </View>
               </TouchableOpacity>   
             </View>
              
         </View>
         
        
      
    </View>

}
export default CardComponentReservas;