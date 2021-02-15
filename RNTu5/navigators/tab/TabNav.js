import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {IMAGE} from '../../src/constants/Image'
import SearchStackNav from '../stack/SearchStackNav'
import HomeStackNav from '../stack/HomeStackNav'
import { View, Image, Dimensions} from 'react-native';

const Tab = createBottomTabNavigator();

function TabNav(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home" component={HomeStackNav}
          options={{
            tabBarLabel:'Home',
            tabBarIcon: ({tintColor}) => (
              <Image
                source={IMAGE.ICON_MENU}
                resizeMode="contain"
                style={{width: 20, height:20}}/>
            )
          }} />
          <Tab.Screen name="Search" component={SearchStackNav} options={{
            tabBarLabel:'Search',
            tabBarIcon: ({tintColor}) => (
              <Image
                source={IMAGE.ICON_MENU}
                resizeMode="contain"
                style={{width: 20, height:20}}/>
            )
          }} />
        </Tab.Navigator>
    );
  };

  export default TabNav;