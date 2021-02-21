import React from 'react'
import {Button, Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import DrawerNavigator from './DrawerNavigator'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import UserPage from '../pages/UserPage'

const Stack = createStackNavigator();

const AppNavigator = () => {
    const navigation = useNavigation(DrawerNavigator);

    return(
        <Stack.Navigator
        initialRouteName='DrawerNavigator'>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='DrawerNavigator'
                component={DrawerNavigator}
                />
            <Stack.Screen name='UserPage' component={UserPage}/>
        </Stack.Navigator>
    );
}

export default AppNavigator;