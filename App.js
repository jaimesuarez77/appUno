import React from 'react';
import{View, StyleSheet, Text} from 'react-native';
const App = ()=>{
  return <View style={styles.container}>
    <View style = {styles.container2}>
      <View style = {styles.container5}>
        <Text>Hola mundo</Text>
      </View>
      <View style = {styles.container6}></View>
    </View>

    <View style = {styles.container3}>
      <View style = {styles.container7}></View>
      <View style = {styles.container8}></View>
    </View>
     
     
    <View style = {styles.container4}>
      <View style = {styles.container5}></View>
      <View style = {styles.container6}></View>

    </View>
  </View>


}

const styles = StyleSheet.create({
  container: {
    
    flex : 1,
    flexDirection: 'column'

  },
  container2:{
    backgroundColor:'white',
    flex : 1,
    flexDirection:'row'
  },
  container3 : {
    backgroundColor:'blue',
    flex : 1 ,
    flexDirection:'row'
  },
  container4 :{
    backgroundColor: 'yellow',
    flex : 1,
    flexDirection:'row'

  },
  container5:{
    backgroundColor: 'red',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  container6:{
    backgroundColor: 'orange',
    flex:1,
    borderRadius: 25
  },
  container7:{
    backgroundColor: 'purple',
    flex:1,
    borderRadius: 50
  },

  container8:{
    backgroundColor: 'brown',
    flex:1,
    borderRadius: 50

  }


})
export default App;