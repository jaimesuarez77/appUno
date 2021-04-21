import React from 'react';


import LoginSreens from './src/auth/login/LoginScreens';
import RegisterSreens from './src/auth/register/RegisterScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return   <LoginSreens></LoginSreens>
  
}
function DetailsScreen(){
  return <RegisterSreens></RegisterSreens>
}

const Stack = createStackNavigator();
const App = ()=>{
  return (
    <NavigationContainer>
    
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Register" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );}   
export default App;