/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import DrawerNav from './navigators/drawer/DrawerNav'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './pages/Login'
import Components from './making/loginScreen'

const App: () => React$Node = () => {
  return (
    <>
    <Components/>
    </>
  );
};


export default App;
