import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-community/google-signin';
import React from 'react';
import {View, Text, Button} from 'react-native'
import { LoginButton, AccessToken, LoginManager,  } from 'react-native-fbsdk';
import {AuthContext } from '../context/Context'
import GoogleLogin from '../pages/login/GoogleLogin'
import AppNavigator from '../navigator/AppNavigator'
import DrawerNavigator from '../navigator/DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native';
import {HomeStack, UserImageStack, SettingStack} from '../navigator/PageNavigator'
import SplashScreen from 'react-native-splash-screen'
import LoginNavigator from '../navigator/LoginNavigator'

const Routes = () => {
  const Auth = React.useContext(AuthContext);

  return(
    <NavigationContainer >
      {Auth.googleInfo ?  <AppNavigator/> : <LoginNavigator/>}
    </NavigationContainer> 
  );
}
export default Routes;