import React, {useEffect, createContext} from 'react';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-community/google-signin';
import {Text,View,Button } from 'react-native';




const InfoContext = createContext(null);

function GoogleLoginContext (){
const [googleInfo, setGoogleInfo] = React.useState();     //로그인 정보

useEffect(() => {
    GoogleSignin.configure({
      webClientId : '985356881887-8ivnbvrnppcnilp41ii9kl9bvqmvne6i.apps.googleusercontent.com' ,
      offlineAccess: true,
    })
  })


const signIn = async () => {
try {
    setLoaded(false);
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(1)
    console.log(userInfo.idToken)
    //   this.setState({ userInfo });
    console.log(1.5)
    setGoogleInfo(userInfo);
    console.log(googleInfo.idToken)
    console.log('load true')
    setLoaded(true);
    setLogin(true);
    } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error)
    } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error+' :: progress')
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error+' :: available')
    } else {
        // some other error happened
        console.log(error+' :: other')
    }
    }
};

const signOut = async (props) => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
        } catch (error) {
            console.error(error);
        }
        };

    return(
        <InfoContext.Provider
            value={{
                googleInfo,
                signIn,
                signOut
            }}>
        </InfoContext.Provider>
    );
};

export {GoogleLoginContext, InfoContext};