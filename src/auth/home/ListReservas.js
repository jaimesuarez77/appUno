import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import CardComponentReservas from '../components/CardComponentReservas';
import CardComponent from '../components/CardComponentReservas';

const ListReservas = () => {
const [reservas, setReservas] = useState();

const getREservas = async () =>{    
        const response = await fetch("https://hoteltransilvaniasapp.herokuapp.com/consultar/consultareserva");
        const responseJson = await response.json();
        setReservas(responseJson.mensaje);
 } 
  useEffect(()=>{
    getREservas();
  }, []);
  return <View>
      <FlatList 
      data={reservas}
      renderItem={({item})=><CardComponentReservas mensaje={item}></CardComponentReservas>}></FlatList>
  </View>
}

export default ListReservas;