import React from 'react';
import {View, Text,Image} from 'react-native';
import GeneralStyles from '../shared/styles/GeneralStyles';


const CardComponent =(props)=>{
    const {data}= props;
    return <View style = {GeneralStyles.cardView}>
         <View>
         <Image source={require('../shared/img/frente1.jpg')} style={GeneralStyles.viewImage}></Image>
         </View>
         <View>
            <Text style= {GeneralStyles.viewText}>{data.id}</Text>
            <Text style= {GeneralStyles.viewText}>{data.first_name}</Text>
            <Text style= {GeneralStyles.viewText}>{data.last_name}</Text>
            <Text style= {GeneralStyles.viewText}>{data.email}</Text>
         </View>
        
       {/* <Image source={require('../shared/img/frente1.jpg')} style={GeneralStyles.viewImage} ></Image> */ } 
    </View>

}
export default CardComponent;