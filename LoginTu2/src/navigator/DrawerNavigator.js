import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import {MainListStack, MainList} from './PageNavigator'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
        <Drawer.Screen name='Main' component={TabNavigator} />
        <Drawer.Screen name='MainList' component={MainListStack} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;