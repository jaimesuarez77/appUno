import React from 'react';
import 'react-native-gesture-handler';
import LoginSreens from './src/auth/login/LoginScreens';
import RegisterSreens from './src/auth/register/RegisterScreens';
import HomeScreen from './src/auth/home/HomeScreen';
import ListUsersScreen from './src/auth/users/ListUsersScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from './src/auth/shared/colors/Colors';
import{View, StatusBar, Image, Text, TextInput,TouchableOpacity} from 'react-native';
import ListReservas from './src/auth/home/ListReservas';
import RegisterReservas from './src/auth/register/RegisterReservas';
import EditarReserva from './src/auth/home/EditarReserva';
/*  function HomeScreen({ navigation }) {
  return  <HomeScreen></HomeScreen>
  
} 
 function LoginScreen({ navigation }) {
  return   <LoginSreens></LoginSreens>
  
}
function DetailsScreen({ navigation }){
  return <RegisterSreens></RegisterSreens>
}  */
const Drawer = createDrawerNavigator();



//const Stack = createStackNavigator();
const App = ()=>{
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginSreens} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="ListUser" component={ListUsersScreen} />
        <Drawer.Screen name="Register" component={RegisterSreens} />
        <Drawer.Screen name="Lista de reservas" component={ListReservas} />
        <Drawer.Screen name="Reservas" component={RegisterReservas} options={ {headerShown:false}} />
        <Drawer.Screen name="Editar" component={EditarReserva} options={ {headerShown:false}} />
      </Drawer.Navigator>
    
   {/*    <Stack.Navigator >
      <Stack.Screen screenOptions={{
          headerStyle:{
            backgroundColor: '#F3671C',
          },
          headerTintColor: '#F3671C',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} options={ {headerShown:false}} name="Login" component={LoginSreens} />
           <Stack.Screen  name="Home" component={HomeScreen} />
           <Stack.Screen  name="ListUser" component={ListUsersScreen} options={{headerShown: false}} />
          
           <Stack.Screen options={{headerShown:false}} name="Register" component={RegisterSreens} />
      </Stack.Navigator>  */}
    </NavigationContainer>
  );}   
export default App; 