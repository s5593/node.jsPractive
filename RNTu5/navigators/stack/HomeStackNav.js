import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../../pages/home/Home'
import HomeDetail from '../../pages/home/HomeDetail'
const Stack = createStackNavigator();

function HomeStackNav(){
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeDetail" component={HomeDetail} />
      </Stack.Navigator>
    );
  }

export default HomeStackNav;