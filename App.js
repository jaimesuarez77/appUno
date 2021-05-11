import React from 'react';
import 'react-native-gesture-handler';
import LoginSreens from './src/auth/login/LoginScreens';
import RegisterSreens from './src/auth/register/RegisterScreens';
import HomeScreen from './src/auth/home/HomeScreen';
import ListUsersScreen from './src/auth/users/ListUsersScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './src/auth/shared/colors/Colors';
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
           <Stack.Screen  name="Home" component={HomeScreen} />
           <Stack.Screen  name="ListUser" component={ListUsersScreen} options={{headerShown: false}} />
           <Stack.Screen screenOptions={{
          headerStyle:{
            backgroundColor: '#F3671C',
          },
          headerTintColor: '#F3671C',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} options={{title:'Home'}} name="Login" component={LoginSreens} />
           <Stack.Screen options={{title:'Home'}} name="Register" component={RegisterSreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );}   
export default App;