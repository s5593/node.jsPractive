import React from 'react'
import {Button, Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

import Home from '../pages/mainPage/Home'
import Setting from '../pages/mainPage/Setting'
import UserImage from '../pages/mainPage/UserImage'
import Test from '../pages/searchPage/Test'
import UserPage from '../pages/UserPage'
import Practice from '../pages/mainPage/Practice'
import DrawerNavigator from './DrawerNavigator'
import {Header, Left, Right} from '../pages/Header'

const Stack = createStackNavigator();
const titleAlign = 'center'
const background = '#0000FF'
/*
  nav : drawer 버튼용
  name : 각 header 이름 전달용
  titleAlign: title의 위치, 기본적으로 center
  background: backgroundColor 전달용
*/

const HomeStack = ({navigation}) => {
    const nav = useNavigation(DrawerNavigator);
    const name = 'Home'

return(
        <Stack.Navigator>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name={name}
                component={Home}
                options={{
                  headerTitle: () => <Header name={name} />,
                    headerTitleAlign: {titleAlign},
                    headerStyle:{
                    // backgroundColor: {background},
                    },
                    headerLeft: () => (
                      <Left navigation={nav}/>
                    ),
                    headerRight: () => (
                      <Right navigation={nav}/>
                    )
                  }}/>
                  <Stack.Screen
              name='UserPage'
              component={UserPage}
              options={{
                headerTitle: () => <Header name='UserPage' />,
                  headerTitleAlign: {titleAlign},
                  headerLeft: () => (
                    <View style={{marginRight: 10}}>
                      <Icon.Button
                      name="md-chevron-back"
                      size={22}
                      backgroundColor="#fff"
                      color="#2e64e5"
                      onPress={() => navigation.popToTop('Home') }
                      />
                  </View>
                  ),
                }}/>
        </Stack.Navigator>
    )
}

const UserImageStack = () => {
    const nav = useNavigation(DrawerNavigator);
    const name = 'UserImage'
    return(
        <Stack.Navigator>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name={name}
                component={UserImage}
                options={{
                  headerTitle: () => <Header name={name} />,
                    headerTitleAlign: {titleAlign},
                    headerStyle:{
                      // backgroundColor: '#0000FF',
                      },
                    headerLeft: () => (
                      <Left navigation={nav}/>
                    ),
                  }}/>
        </Stack.Navigator>
    );
}

const PracticeStack = () => {
  const nav = useNavigation(DrawerNavigator);
  const name = 'Practice'

  return(
      <Stack.Navigator>
          {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
          <Stack.Screen
              name={name}
              component={Practice}
              options={{
                headerTitle: () => <Header name={name} />,
                  headerTitleAlign: {titleAlign},
                  headerLeft: () => (
                    <Left navigation={nav}/>
                  ),
                }}/>
      </Stack.Navigator>
  );
}

const SettingStack = () => {
    const nav = useNavigation(DrawerNavigator);
    const name = 'Setting'

    return(
        <Stack.Navigator>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name={name}
                component={Setting}
                options={{
                  headerTitle: () => <Header name={name} />,
                    headerTitleAlign: {titleAlign},
                    headerLeft: () => (
                      <Left navigation={nav}/>
                    ),
                  }}/>
        </Stack.Navigator>
    );
}

const TestStack = () => {
  const nav = useNavigation(DrawerNavigator);
  const name = 'Test'
  return(
      <Stack.Navigator>
          {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
          <Stack.Screen
              name={name}
              component={Test}
              options={{
                headerTitle: () => <Header name={name} />,
                  headerTitleAlign: {titleAlign},
                  headerLeft: () => (
                    <Left navigation={nav}/>
                  ),
                }}/>
      </Stack.Navigator>
  );
}


                  

export {HomeStack, PracticeStack, UserImageStack, SettingStack, TestStack};