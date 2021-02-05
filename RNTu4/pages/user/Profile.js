import React from 'react'
import {View} from 'react-native'
import { Container, Header, Left, Body,
    Right, Button, Icon, Title, Text } from 'native-base';
    import CustomHeader from '../CustomHeader'

function profile(props) {
    return (
        <View style={{ flex: 1 }}>
        <CustomHeader title='profile' navigation={props.navigation}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>profile Screen!</Text>
        </View>
        </View>
    );
}

  export default profile;