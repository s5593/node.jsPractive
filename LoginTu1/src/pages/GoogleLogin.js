import React from 'react'
import {Button, View, Text} from 'react-native'
import {AuthContext} from '../context/Context'

const GoogleLogin = () => {
    /**
     * useContext로 context/Context.js에서 정의한
     * Context 사용 가능
     */
    const Auth = React.useContext(AuthContext);

    return(
        //구글 로그인 버튼
        <View>
            <Text>papagogo</Text>
            <Button title="Sign In" onPress={() => Auth.signIn()} />
            <Text>Not login</Text>
        </View>
    );
}

export default GoogleLogin;