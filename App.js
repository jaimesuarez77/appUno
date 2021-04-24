import React from 'react';
import LoginSreens from './src/auth/login/LoginScreens';
import RegisterSreens from './src/auth/register/RegisterScreens';
import HomeScreen from './src/auth/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import{View, StatusBar, Image, Text, TextInput,TouchableOpacity} from 'react-native';

/*  function HomeScreen({ navigation }) {
  return  <HomeScreen></HomeScreen>
  
} 
 function LoginScreen({ navigation }) {
  return   <LoginSreens></LoginSreens>
  
}
function DetailsScreen({ navigation }){
  return <RegisterSreens></RegisterSreens>
}  */

const Stack = createStackNavigator();
const App = ()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Login" component={LoginSreens} />
           <Stack.Screen name="Register" component={RegisterSreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );}   
export default App;