/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, createContext} from 'react';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-community/google-signin';
import {Text,View,Button } from 'react-native';
import {Loading} from '../components/Loading'
import { GoogleLoginContext } from './GoogleLoginContext';

// const InfoContext = createContext(null);
const {signIn, googleInfo} = React.useContext(GoogleLoginContext);

function GoogleLogin() {
  // const [googleInfo, setGoogleInfo] = React.useState();     //로그인 정보
  const [loaded , setLoaded] = React.useState(false);       //로딩
  const [login, setLogin] = React.useState(false)           //로그인 상태

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId : '985356881887-8ivnbvrnppcnilp41ii9kl9bvqmvne6i.apps.googleusercontent.com' ,
  //     offlineAccess: true,
  //   })
  // })


  // const signIn = async () => {
  //   try {
  //       setLoaded(false);
  //       await GoogleSignin.hasPlayServices();
  //       const userInfo = await GoogleSignin.signIn();
  //       console.log(1)
  //       console.log(userInfo.idToken)
  //       //   this.setState({ userInfo });
  //       console.log(1.5)
  //       setGoogleInfo(userInfo);
  //       console.log(googleInfo.idToken)
  //       console.log('load true')
  //       setLoaded(true);
  //       setLogin(true);
  //       } catch (error) {
  //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //           // user cancelled the login flow
  //           console.log(error)
  //       } else if (error.code === statusCodes.IN_PROGRESS) {
  //           // operation (e.g. sign in) is in progress already
  //           console.log(error+' :: progress')
  //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //           // play services not available or outdated
  //           console.log(error+' :: available')
  //       } else {
  //           // some other error happened
  //           console.log(error+' :: other')
  //       }
  //       }
  //   };

  return (
    <View>
      <GoogleSigninButton
      style={{ width: 380, height: 48, alignItems:'center' }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn()} />
        {loaded ?  
        <View>
            <Text>{googleInfo.user.name}</Text>
            <Text>{googleInfo.user.email}</Text>
        </View>  :

        <Text>Not login</Text>
        }
        {/* <Loading loading={loaded} /> */}
        </View>
  );
};



export default GoogleLogin;
