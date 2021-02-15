/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {InfoContext} from './src/login/GoogleLoginContext'
import AuthStackNavigator from './src/navigator/AuthStackNavigator'


const App: () => React$Node = () => {
  return(
      <>
      <InfoContext.Consumer>
        <AuthStackNavigator/>
      </InfoContext.Consumer>
      {/* <GoogleLogin/> */}
      </>
    );
};



export default App;
