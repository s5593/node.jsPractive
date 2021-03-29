import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import {SettingStack, UserImageStack, HomeStack, PracticeStack} from './PageNavigator'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
        tabBarVisible: 'false',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Image'){
            iconName = focused ? 'images' : 'images-outline';
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
        <Tab.Screen name = "Home" component={HomeStack} />
        <Tab.Screen name = "Image" component={UserImageStack} />
        <Tab.Screen name = "Practice" component={PracticeStack} />
        <Tab.Screen name = "Setting" component={SettingStack} />
    </Tab.Navigator>
    )
}

export default TabNavigator;



