import React from 'react';
import {View, Text,Image} from 'react-native';
import GeneralStyles from '../shared/styles/GeneralStyles';

const CardComponentReservas =(props)=>{
    const{mensaje}= props;
    console.log(props);

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
         </View>  
        </View>       
    </View>
    }
export default CardComponentReservas;