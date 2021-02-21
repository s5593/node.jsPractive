/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native'
import {ContextProvider } from './src/context/Context'
import LoginRoutes from './src/route/LoginRoute'



const App = () => {

  return (
    <ContextProvider>
      <LoginRoutes/>
    </ContextProvider>
  );
};


export default App;
