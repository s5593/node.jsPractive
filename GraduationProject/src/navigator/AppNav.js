import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import UserPage from '../pages/UserPage'

import  {MainStackNav} from './TabNavHeader'
import TabNav from './TabNav'


const Stack = createStackNavigator();


/**
 * TabNav:메인화면 네비게이션
 * UserPage: 사용자 정보 페이지
 * @returns 
 */
const AppNav = () => {

    return(
        <Stack.Navigator
        headerMode='none'>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='MainStackNav'
                component={MainStackNav}
            />
            <Stack.Screen
                name='UserPage'
                component={UserPage}
            />
        </Stack.Navigator>
    );
}

export default AppNav;