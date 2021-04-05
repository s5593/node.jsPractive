import React from 'react'
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import {StaticStack, SubListStack} from './PageNavigator'

const Tab = createMaterialTopTabNavigator ();

const TabNavigator = () => {
    return(
    <Tab.Navigator>
        <Tab.Screen name = "SubList" component={SubListStack} />
        <Tab.Screen name = "Static" component={StaticStack} />
    </Tab.Navigator>
    )
}

export default TabNavigator;



