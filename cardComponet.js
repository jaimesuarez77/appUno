import React from 'react';
import{View} from 'react-native';
import Styles from './Styles';

const CardComponent = ()=>{
    return <View style={Styles.card}>
    <View style={Styles.cardTitle}></View>
    <View style={Styles.cardBody}></View>
  </View>

}
export default CardComponent;