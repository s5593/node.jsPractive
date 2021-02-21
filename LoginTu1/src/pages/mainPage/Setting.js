import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import {AuthContext} from '../../context/Context'
import {LoginButton} from 'react-native-fbsdk'

const Setting = () => {
    const Auth = React.useContext(AuthContext);
    
    return (
        <View>
            <Text>
                Setting
            </Text>        
            <View>    
                <View>
                    <View>
                    <Text>{Auth.googleInfo.user.email}</Text>
                    <Text>{Auth.googleInfo.user.name}</Text>
                    <Image
                    source={{uri: Auth.googleInfo.user.photo}}/>
                    </View>
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
                <Button title="Sign Out" onPress={() => Auth.signOut()}/>
                </View>
            </View>
        </View>
    );
}

export default Setting;