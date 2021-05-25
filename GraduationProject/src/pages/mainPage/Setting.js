import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import {AuthContext} from '../../context/Context'

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
                </View>
                <Button title="Sign Out" onPress={() => Auth.signOut()}/>
                </View>
            </View>
        </View>
    );
}

export default Setting;