import React from 'react';
import{View, StyleSheet} from 'react-native';
const App = ()=>{
  return <View style={styles.container}>
    <View style = {styles.container2}></View>
    <View style = {styles.container3}></View>
  </View>


}

const styles = StyleSheet.create({
  container: {
    
    flex : 1,
    flexDirection: 'column'

  },
  container2:{
    backgroundColor:'red',
    flex : 1
  },
  container3 : {
    backgroundColor:'blue',
    flex : 1 
  }


})
export default App;