import React from 'react';
import {View, Text,Image, TouchableOpacity, Alert, Button} from 'react-native';
import GeneralStyles from '../shared/styles/GeneralStyles';
import ButtonStyles from '../shared/styles/ButtonStyles';
import Colors from '../../auth/shared/colors/Colors';
{/* <Image source={{uri: data.avatar}} style={GeneralStyles.viewImage} /> */}
const CardComponent =(props)=>{
    const{data}= props;
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
  
    return <View style = {GeneralStyles.cardView}>
          <View>
          <Image source={{uri: data.avatar}} style={GeneralStyles.viewImage} />
          </View>
         
         <View>

            <Text style= {GeneralStyles.viewText}>{data.id}</Text>
            <Text style= {GeneralStyles.viewText}>{data.email}</Text>
            <Text style= {GeneralStyles.viewText}>{data.first_name}</Text>
            <Text style= {GeneralStyles.viewText}>{data.last_name}</Text>
            
            <TouchableOpacity onPress={() => Alert.alert(`Desea Eliminar Usuario ${data.first_name}`)} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.small}>
                  <Text style={GeneralStyles.textButton}>Eliminar Usuario</Text>
                  </View>
               </TouchableOpacity>
         </View>
        
      
    </View>

}
export default CardComponent;