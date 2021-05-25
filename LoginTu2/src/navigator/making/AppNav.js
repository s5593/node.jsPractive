import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TabNav from './TabNav'
import UserPage from '../../pages/UserPage'


const Stack = createStackNavigator();


/**
 * TabNav:메인화면 네비게이션
 * UserPage: 사용자 정보 페이지
 * @returns 
 */
const AppNavigator = () => {

    return(
        <Stack.Navigator
        headerMode='none'>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='TabNav'
                component={TabNav}
            />
            <Stack.Screen
                name='UserPage'
                component={UserPage}
            />
        </Stack.Navigator>
    );
}

export default AppNavigator;