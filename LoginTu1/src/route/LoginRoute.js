import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-community/google-signin';
import React from 'react';
import {View, Text, Button} from 'react-native'
import { LoginButton, AccessToken, LoginManager,  } from 'react-native-fbsdk';
import {AuthContext } from '../context/Context'
import GoogleLogin from '../pages/GoogleLogin'
import AppNavigator from '../navigator/AppNavigator'
import DrawerNavigator from '../navigator/DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native';
import {HomeStack, UserImageStack, SettingStack} from '../navigator/PageNavigator'


const Routes = () => {
  const navigationRef = React.useRef(null);
  const Auth = React.useContext(AuthContext);

  return(
    <NavigationContainer ref={navigationRef}>
      {Auth.googleInfo ?  <DrawerNavigator/>: <GoogleLogin/>}
    </NavigationContainer> 
  );
}
export default Routes;