import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {GoogleLogin} from '../login/GoogleLogin'

const LoginStack = createStackNavigator();

const LoginStackNavigator = () => (
    <LoginStack.Navigator>
        <LoginStack.Screen name="GoogleLogin" component={GoogleLogin}/>
    </LoginStack.Navigator>
)

export default LoginStackNavigator;