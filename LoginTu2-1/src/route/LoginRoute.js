import React from 'react';
import {View, Text, Button} from 'react-native'
import {AuthContext } from '../context/Context'
import AppNav from '../navigator/AppNav'
import { NavigationContainer } from '@react-navigation/native';
import LoginNav from '../navigator/LoginNav'

const Routes = () => {
  const Auth = React.useContext(AuthContext);

  return(
    <NavigationContainer >
      {Auth.googleInfo ?  <AppNav/> : <LoginNav/>}
    </NavigationContainer> 
  );
}
export default Routes;