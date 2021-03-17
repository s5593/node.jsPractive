import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import {TestStack} from './PageNavigator'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
        <Drawer.Screen name='Main' component={TabNavigator} />
        <Drawer.Screen name='Test' component={TestStack} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;