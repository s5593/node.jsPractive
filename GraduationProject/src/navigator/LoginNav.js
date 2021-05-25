import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Login from '../pages/login/Login'
import SignUp from '../pages/login/SignUp'
import EMailSignUp from '../pages/login/EMailSignUp'
import EMailSearch from '../pages/login/EMailSearch'
import EMailAuthSearch from '../pages/login/EMailAuthSearch'
import EMailAuthSignUp from '../pages/login/EMailAuthSignUp'
import FailureAuth from '../pages/login/FailureAuth'
import ChangePW from '../pages/login/ChangePW'
import SuccessSignUp from '../pages/login/SuccessSignUp'

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
            {/* <Stack.Screen
                name='EMailSignUp'
                component={EMailSignUp}
            />
            <Stack.Screen
                name='EMailSearch'
                component={EMailSearch}
            /> */}
            <Stack.Screen
                name='EMailAuthSearch'
                component={EMailAuthSearch} 
            />
            <Stack.Screen
                name='EMailAuthSignUp'
                component={EMailAuthSignUp}
            />
            <Stack.Screen
                name='FailureAuth'
                component={FailureAuth} 
            />
            <Stack.Screen
                name='ChangePW'
                component={ChangePW}
            /><Stack.Screen
            name='SuccessSignUp'
            component={SuccessSignUp} 
        />
        </Stack.Navigator>
    );
}

export default LoginNav;