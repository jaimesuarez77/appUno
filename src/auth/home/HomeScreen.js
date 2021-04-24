import React from 'react';
import{View, StatusBar, Image, Text, TextInput,TouchableOpacity, ScrollView} from 'react-native';
import ButtonStyles from '../shared/styles/ButtonStyles';
import GeneralStyles from '../shared/styles/GeneralStyles';
import Colors from '../../auth/shared/colors/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../login/LoginScreens";

const HomeSreen = ({navigation})=>{
  return <View style = {GeneralStyles.container}>
          <StatusBar backgroundColor = {Colors.primary}></StatusBar>
    
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



             </View>  
            

           
           <View style = {GeneralStyles.scrollList} > 
          <ScrollView >
                <View style={GeneralStyles.cardView} >
                <Image source={require('../shared/img/frente1.jpg')} style={GeneralStyles.viewImage} ></Image>
                <View>
                <Text style= {GeneralStyles.viewText}>Espaciosa</Text>
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
                <Image source={require('../shared/img/recreativa.jpg')} style={GeneralStyles.viewImage} ></Image>
                <Text  style= {GeneralStyles.viewText}>Recreativa</Text>
                </View>

              
                <View style={GeneralStyles.cardView} >
                <Image source={require('../shared/img/frente4.jpg')} style={GeneralStyles.viewImage} ></Image>
                <Text  style= {GeneralStyles.viewText}>Tranquila</Text>
                </View>

            
                <View style={GeneralStyles.cardView} >
                <Image source={require('../shared/img/frente5.jpg')} style={GeneralStyles.viewImage} ></Image>
                <Text  style= {GeneralStyles.viewText}>Familiar</Text>
                </View>




             <View>
               
               
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