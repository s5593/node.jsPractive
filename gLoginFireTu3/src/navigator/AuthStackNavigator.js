import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {InfoContext} from '../login/GoogleLoginContext';
import LoginNext from '../screens/LoginNext';
import ContentsStackNavigator from './ContentsStackNavigator'
import LoginStackNavigator from './LoginStackNavigator'
import { NavigationContainer } from '@react-navigation/native';


function AuthStackNavigator() {
  const {googleInfo} = useContext(InfoContext);

  return (
    <>
    <NavigationContainer>
    {googleInfo ? <ContentsStackNavigator/> : <LoginStackNavigator/> }
    </NavigationContainer>
    </>
  );  
}

export default AuthStackNavigator;