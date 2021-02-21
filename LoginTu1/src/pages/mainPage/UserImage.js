import React from 'react'
import { View, Text, Image } from 'react-native'
import {AuthContext} from '../../context/Context'

const UserImage = () => {
    const Auth = React.useContext(AuthContext);

    return (
        <View>
        <Text>
            Image
        </Text>
        <Image source={{uri:Auth.googleInfo.user.photo}}/>
        </View>
    );
}

export default UserImage;