import React from 'react'
import {Button, Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import DrawerNavigator from './DrawerNavigator'
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native'
import Home from '../pages/mainPage/Home'
import Setting from '../pages/mainPage/Setting'
import UserImage from '../pages/mainPage/UserImage'
import Test from '../pages/searchPage/Test'
import UserPage from '../pages/UserPage'
import Practice from '../pages/mainPage/Practice'

const Stack = createStackNavigator();

const HomeStack = () => {
    const navigation = useNavigation(DrawerNavigator);

    return(
        <Stack.Navigator>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                      color: '#2e64e5',
                      fontSize: 18,
                    },
                    headerStyle: {
                      shadowColor: '#fff',
                      elevation: 0,
                    },
                    headerLeft: () => (
                      <View style={{marginRight: 10}}>
                        <Icon.Button
                          name="md-list"
                          size={22}
                          backgroundColor="#fff"
                          color="#2e64e5"
                          onPress={() => navigation.openDrawer() }
                        />
                      </View>
                    ),
                    headerRight: () => (
                      <View style={{marginRight: 10}}>
                        <Icon.Button
                          name="md-person-circle"
                          size={22}
                          backgroundColor="#fff"
                          color="#2e64e5"
                          onPress={() => navigation.navigate(UserPage) }
                        />
                      </View>
                    )
                  }}/>
                  <Stack.Screen
              name='UserPage'
              component={UserPage}
              options={{
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#2e64e5',
                    fontSize: 18,
                  },
                  headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                  },
                  headerLeft: () => (
                    <View style={{marginRight: 10}}>
                      <Icon.Button
                        name="md-list"
                        size={22}
                        backgroundColor="#fff"
                        color="#2e64e5"
                        onPress={() => navigation.openDrawer() }
                      />
                    </View>
                  ),
                }}/>
        </Stack.Navigator>
    );
}

const UserImageStack = () => {
    const navigation = useNavigation(DrawerNavigator);

    return(
        <Stack.Navigator>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='UserImage'
                component={UserImage}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                      color: '#2e64e5',
                      fontSize: 18,
                    },
                    headerStyle: {
                      shadowColor: '#fff',
                      elevation: 0,
                    },
                    headerLeft: () => (
                      <View style={{marginRight: 10}}>
                        <Icon.Button
                          name="md-list"
                          size={22}
                          backgroundColor="#fff"
                          color="#2e64e5"
                          onPress={() => navigation.openDrawer() }
                        />
                      </View>
                    ),
                  }}/>
        </Stack.Navigator>
    );
}

const PracticeStack = () => {
  const navigation = useNavigation(DrawerNavigator);

  return(
      <Stack.Navigator>
          {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
          <Stack.Screen
              name='Practice'
              component={Practice}
              options={{
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#2e64e5',
                    fontSize: 18,
                  },
                  headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                  },
                  headerLeft: () => (
                    <View style={{marginRight: 10}}>
                      <Icon.Button
                        name="md-list"
                        size={22}
                        backgroundColor="#fff"
                        color="#2e64e5"
                        onPress={() => navigation.openDrawer() }
                      />
                    </View>
                  ),
                }}/>
      </Stack.Navigator>
  );
}

const SettingStack = () => {
    const navigation = useNavigation(DrawerNavigator);

    return(
        <Stack.Navigator>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='Setting'
                component={Setting}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                      color: '#2e64e5',
                      fontSize: 18,
                    },
                    headerStyle: {
                      shadowColor: '#fff',
                      elevation: 0,
                    },
                    headerLeft: () => (
                      <View style={{marginRight: 10}}>
                        <Icon.Button
                          name="md-list"
                          size={22}
                          backgroundColor="#fff"
                          color="#2e64e5"
                          onPress={() => navigation.openDrawer() }
                        />
                      </View>
                    ),
                  }}/>
        </Stack.Navigator>
    );
}

const TestStack = () => {
  const navigation = useNavigation(DrawerNavigator);

  return(
      <Stack.Navigator>
          {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
          <Stack.Screen
              name='Test'
              component={Test}
              options={{
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    color: '#2e64e5',
                    fontSize: 18,
                  },
                  headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                  },
                  headerLeft: () => (
                    <View style={{marginRight: 10}}>
                      <Icon.Button
                        name="md-list"
                        size={22}
                        backgroundColor="#fff"
                        color="#2e64e5"
                        onPress={() => navigation.openDrawer() }
                      />
                    </View>
                  ),
                }}/>
      </Stack.Navigator>
  );
}


                  

export {HomeStack, PracticeStack, UserImageStack, SettingStack, TestStack};