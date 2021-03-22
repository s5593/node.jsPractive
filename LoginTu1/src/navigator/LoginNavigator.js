import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import GoogleLogin from '../pages/login/GoogleLogin'
import SignUp from '../pages/login/SignUp'
import SearchPW from '../pages/login/SearchPW'
import MailPhoneAuth from '../pages/login/MailPhoneAuth'

const Stack = createStackNavigator();

const LoginNavigator = () => {

    return(
        <Stack.Navigator
        headerMode='none'>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='GoogleLogin'
                component={GoogleLogin}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUp}
            />
            <Stack.Screen
                name='SearchPW'
                component={SearchPW}
            />
            <Stack.Screen
                name='MailPhoneAuth'
                component={MailPhoneAuth}
            />
        </Stack.Navigator>
    );
}

export default LoginNavigator;