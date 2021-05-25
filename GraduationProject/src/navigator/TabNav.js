import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import {HomeStackNav, PracticeStackNav, SettingStackNav} from './TabNavHeader'
import MainList from '../pages/mainPage/MainList'

const Tab = createMaterialBottomTabNavigator();


/**
 * Home: 메인 리스트들이 있는 페이지의 해더스택
 * Practice: 연습 페이지의 해더스택
 * Setting: 사용자 설정 페이지의 해더스택
 * 해더스택은 페이지의 해더를 만들기 위해 거쳐가는 스택 네비게이션
 * @returns 
 */
const TabNav = () => {
    return(
    <Tab.Navigator
    initialRouteName="Home"
    shifting={true}
    screenOptions={({ route }) => ({
        tabBarVisible: 'false',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Practice'){
            iconName = focused ? 'barbell' : 'barbell-outline'; 
          } else if (route.name === 'Setting'){
            iconName = focused ? 'settings' : 'settings-outline';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={20}  color={color}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showLabel: 'true',
        keyboardHidesTabBar:'false'
      }}>
        <Tab.Screen name = "Home" component={HomeStackNav} />
        <Tab.Screen name = "Practice" component={PracticeStackNav} />
        <Tab.Screen name = "Setting" component={SettingStackNav} />
    </Tab.Navigator>
    )
}

export default TabNav;



