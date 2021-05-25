import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Login from '../pages/login/Login'
import SignUp from '../pages/login/SignUp'
import SearchPW from '../pages/login/SearchPW'
import EMainAuth from '../pages/login/EMainAuth'
import EmailAuth from '../pages/login/EmailAuth'
import AuthNumInput from '../pages/login/AuthNumInput'

const Stack = createStackNavigator();

const LoginNav = () => {

    return(
        <Stack.Navigator
        headerMode='none'
        initialRouteName='Login'>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='Login'
                component={Login}
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
                name='EMainAuth'
                component={EMainAuth} 
            />
            <Stack.Screen
                name='EmailAuth'
                component={EmailAuth} 
            />
            <Stack.Screen
                name='AuthNumInput'
                component={AuthNumInput} 
            />
        </Stack.Navigator>
    );
}

export default LoginNav;