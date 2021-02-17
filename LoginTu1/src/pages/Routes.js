import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-community/google-signin';
import React from 'react';
import {View, Text, Button} from 'react-native'
import { LoginButton, AccessToken, LoginManager,  } from 'react-native-fbsdk';
import {AuthContext } from '../context/Context'
import styled from 'styled-components/native'



const ProImage = styled.Image`
  width: 50;
  height: 50;
`;

const Container = styled.View`
text-align: center;
`;



const Routes = () => {
    const Auth = React.useContext(AuthContext);

return(
<View>    
    {Auth.googleInfo ?  
        <View>
            <Button title="Sign Out" onPress={() => Auth.signOut()}/>
            <Container>
            <Text>{Auth.googleInfo.user.email}</Text>
            <Text>{Auth.googleInfo.user.name}</Text>
            <ProImage
            source={{uri: Auth.googleInfo.user.photo}}/>
             </Container>
            <View>
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
    </View>
);
}
export default Routes;