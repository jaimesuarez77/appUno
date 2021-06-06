import React from 'react';
import{View, StatusBar, Image, Text, TextInput,TouchableOpacity, ScrollView} from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import ButtonStyles from '../shared/styles/ButtonStyles';
import GeneralStyles from '../shared/styles/GeneralStyles';
import Colors from '../../auth/shared/colors/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../login/LoginScreens";
import { render } from 'react-dom';



const HomeSreen = ({route,navigation})=>{
   const {name} = route.params;

 
 
 return <View style = {GeneralStyles.container}>
          <StatusBar backgroundColor = {Colors.primary}></StatusBar>
          <View style={GeneralStyles.user}> 
               <Text style={{fontWeight : "bold", fontSize: 20, color : "#E91E63", marginTop: 30}}>Bienvenido {name}</Text>
               </View>
            <View style = {GeneralStyles.containerInitio}>
              
            
               <View>
               
               <TouchableOpacity onPress={() => navigation.navigate('Login')}  >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.small}>
                  <Text style={GeneralStyles.textButton}>Login</Text>
                  </View>
               </TouchableOpacity>
               </View>
               <View>
               <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.small}>
                  <Text style={GeneralStyles.textButton}>Register</Text>
                  </View>
               </TouchableOpacity>
               </View> 
               <View>
               <TouchableOpacity onPress={() =>  navigation.navigate('ListUser')} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.small}>
                  <Text style={GeneralStyles.textButton}>ListUser</Text>
                  </View>
               </TouchableOpacity>
               </View> 



             </View>   
            

           
           <View style = {GeneralStyles.scrollList} > 
           
          <ScrollView >
                <View style={GeneralStyles.cardView} >
                <Image source={require('../shared/img/frente1.jpg')} style={GeneralStyles.viewImage} ></Image>
                <View>
                <Text style= {GeneralStyles.viewText}>Espaciosa</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Reservas',{name})} >
                  <View backgroundColor = {Colors.primary} style = {ButtonStyles.small}>
                  <Text style={GeneralStyles.textButton}>Reservar</Text>
                  </View>
               </TouchableOpacity>
                </View>
                
                </View>
                <View style={GeneralStyles.cardView} >
                <Image source={require('../shared/img/frente2.jpg')} style={GeneralStyles.viewImage} ></Image>
                <Text style= {GeneralStyles.viewText} >Elegante</Text>
               
                </View>
                <View style={GeneralStyles.cardView} >
                <Image source={require('../shared/img/frente3.jpg')} style={GeneralStyles.viewImage} ></Image>
                <Text  style= {GeneralStyles.viewText}>Tranquila</Text>
                </View>

             
                <View style={GeneralStyles.cardView} >
                <Image source={require('../shared/img/palacio.jpg')} style={GeneralStyles.viewImage} ></Image>
                <Text  style= {GeneralStyles.viewText}>Magestuosa</Text>
                </View>

                <View style={GeneralStyles.cardView} >
                <Image source={{uri:'https://github.com/jaimesuarez77/imagenes/blob/main/frente4.jpg ,'}} style={GeneralStyles.viewImage} ></Image>
                <Text  style= {GeneralStyles.viewText}>Recreativa</Text>
                </View>

              
                <View style={GeneralStyles.cardView} >
                <Image style={GeneralStyles.viewImage} source={{uri:'https://github.com/jaimesuarez77/imagenes/blob/main/frente1.jpg ,'}}    ></Image>
                <Text  style= {GeneralStyles.viewText}>Tranquila</Text>
                </View>

            
                <View style={GeneralStyles.cardView} >
                <Image source={{uri: 'https://github.com/jaimesuarez77/imagenes/blob/main/frente3.jpg'}} style={GeneralStyles.viewImage} ></Image>
                <Text  style= {GeneralStyles.viewText}>Familiar</Text>
                </View>




             <View>
                <View style={GeneralStyles.cardView}>
                <Image source={{uri: 'https://github.com/jaimesuarez77/imagenes/blob/main/frente5.jpg ,'}} style={GeneralStyles.viewImage} />
                </View>
             
               
                <Text style={GeneralStyles.cardView}>Texto2</Text>
                <Text style={GeneralStyles.cardView}>Texto3</Text>
                <Text style={GeneralStyles.cardView}>Texto4</Text>
                <Text style={GeneralStyles.cardView}>Texto5</Text>
                <Text style={GeneralStyles.cardView}>Texto6</Text>
                <Text style={GeneralStyles.cardView}>Texto7</Text>
                <Text style={GeneralStyles.cardView}>Texto8</Text>
                <Text style={GeneralStyles.cardView}>Texto9</Text>
                <Text style={GeneralStyles.cardView}>Texto10</Text>

            </View>
          
          </ScrollView>
            </View>
    
        
    
     
  </View>
  
}   
export default HomeSreen;