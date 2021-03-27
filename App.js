import React from 'react';
import{View, StyleSheet, Text} from 'react-native';
import Styles from './Styles';
import CardComponent from './cardComponet'

const App = ()=>{
  return <View style={Styles.container}>
    <View style={Styles.section1}>
    <View style={Styles.cardContainer1}>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    </View>
    </View>
    <View style={Styles.section2}>
      <Text>Contenedor2</Text>
    </View>

  </View>
}   
export default App;