import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TabNav from '../tab/TabNav'
import profile from '../../pages/user/Profile'
import setting from '../../pages/user/Setting'

const Stack = createStackNavigator();

function StackNav(){
    return (
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen name="profile" component={profile} />
        <Stack.Screen name="setting" component={setting} />
      </Stack.Navigator>
    );
  }

export default StackNav;