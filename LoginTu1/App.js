/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ContextProvider } from './src/context/Context'
import Routes from './src/pages/Routes'




const App = () => {


  // const [googleInfo, setGoogleInfo] = React.useState();     //로그인 정보

  // GoogleSignin.configure({
  //   webClientId: '985356881887-8ivnbvrnppcnilp41ii9kl9bvqmvne6i.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // });

  // const signIn = async () => {
  //   try {
  //       await GoogleSignin.hasPlayServices();
  //       const userInfo = await GoogleSignin.signIn();
  //       //   this.setState({ userInfo });
  //       console.log(userInfo)
  //       setGoogleInfo(userInfo);
  //       console.log(googleInfo+' :: userInfo')
  //       console.log('load true')
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

  //   const fbLogin = async () => {
  //     try {
  //       LoginManager.logInWithPermissions(["public_profile"]).then(
  //         function(result) {
  //           if (result.isCancelled) {
  //             console.log("Login cancelled");
  //           } else {
  //             console.log(
  //               "Login success with permissions: " +
  //                 result.grantedPermissions.toString()
  //             );
  //           }
  //         },
  //         function(error) {
  //           console.log("Login fail with error: " + error);
  //         }
  //       );
  //     } catch(error) {
  //       console.log({error});
  //     }
  //   }

  //   // const loginExecute = () => {
  //   //   LoginManager.logInWithPermissions(['public_profile']).then(
  //   //     function(result) {
  //   //       if (result.isCancelled) {
  //   //         console.log('Login was cancelled');
  //   //       } else {
  //   //         console.log(
  //   //           'Login was successful with permissions: ' +
  //   //             result.grantedPermissions.toString(),
  //   //         );
  //   //         console.log(result);
  
  //   //         const infoRequest = new GraphRequest(
  //   //           '/me?fields=id,name,picture{url},email',
  //   //           null,
  //   //           (error, result) => {
  //   //             console.log(result);
  //   //           },
  //   //         );
  //   //         // Start the graph request.
  //   //         new GraphRequestManager().addRequest(infoRequest).start();
  //   //         AccessToken.getCurrentAccessToken().then(accessToken =>
  //   //           console.log(accessToken),
  //   //         );
  //   //       }
  //   //     },
  //   //     function(error) {
  //   //       console.log('Login failed with error: ' + error);
  //   //     },
  //   //   );
  //   // };

  //   const signOut = async () => {
  //     try {
  //       await GoogleSignin.revokeAccess();
  //       await GoogleSignin.signOut();
  //       setGoogleInfo(null);
  //       console.log('Success Signout')
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <ContextProvider>
      <Routes/>
    {/* <View>    
    {Auth.googleInfo ?  
        <View>
          <Button title="Sign Out" onPress={() => Auth.signOut()}/>
            <Text>Success</Text>
            <View>
              <Button title="facebook Login" onPress={loginExecute}/>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {                
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data)
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
      </View>  :
      <View>
 <GoogleSigninButton
    style={{ width: 380, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={() => Auth.signIn()} />
        <Text>Not login</Text>
        </View>
        }
    </View> */}
    </ContextProvider>
  );
};


export default App;
