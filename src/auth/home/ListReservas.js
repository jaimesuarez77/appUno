import React, {useState, useEffect} from 'react';
import {View, FlatList, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardComponentReservas from '../components/CardComponentReservas';
import EditarReserva from './EditarReserva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ListReservas = ({route,navigation}) => {
const [mensaje, setReservas] = useState();
/* const editarR =(item)=>{
  navigation.navigate(EditarReserva)
} */
const getReservas = async () =>{    
        const response = await fetch("https://hoteltransilvaniasapp.herokuapp.com/consultar/consultareserva");
        const responseJson = await response.json();
        setReservas(responseJson.mensaje);
 }
 const reservaInfo = ()=>{
    navigation.navigate('Editar')

 }
 
 useEffect(()=>{
  getReservas();
}, []);

  return <View>
      <FlatList 
      data={mensaje}
      renderItem={({item})=>
     
     <TouchableOpacity onPress={()=>reservaInfo(item)}>
        <CardComponentReservas mensaje={item}>
        
        </CardComponentReservas>
     </TouchableOpacity> }>

      </FlatList>
  </View>
}

export default ListReservas;