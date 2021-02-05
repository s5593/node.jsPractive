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

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <DrawerNav/>
      </NavigationContainer>
    </>
  );
};


export default App;
