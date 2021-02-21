import React from 'react'
import { View, Text, Image } from 'react-native'
import {AuthContext} from '../../context/Context'

const Practice = () => {
    const Auth = React.useContext(AuthContext);

    return (
        <View>
        <Text>
            practice
        </Text>
        <Image source={{uri:Auth.googleInfo.user.photo}}/>
        </View>
    );
}

export default Practice;