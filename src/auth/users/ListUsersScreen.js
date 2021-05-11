import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import CardComponent from '../components/CardComponent';

const ListUsersScreen = () => {
  const [users, setUsers] = useState();
  const getUsers = async () =>{
      const response = await fetch("https://reqres.in/api/users?page=2");
      const responseJson = await response.json();
      setUsers(responseJson.data);
  }
  useEffect(()=>{
      getUsers();
  }, []);
  return <View>
      <FlatList 
      data={users}
      renderItem={({item})=><CardComponent data={item}></CardComponent>}></FlatList>
  </View>
}

export default ListUsersScreen;