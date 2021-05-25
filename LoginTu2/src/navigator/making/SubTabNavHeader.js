import React from 'react'
import {Button, Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

const SubListStack  = () => {
    const name = 'SubList'
    return(
        <Stack.Navigator
          screenOptions={{headerShown:false}}>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name={name}
                component={SubList}
                options={{
                  headerTitle: () => <Header name={name} />,
                    headerTitleAlign: {titleAlign},
                    headerLeft: () => (
                      <View style={{marginRight: 10}}>
                        <Icon.Button
                        name="md-chevron-back"
                        size={22}
                        backgroundColor="#fff"
                        color="#2e64e5"
                        onPress={() => navigation.popToTop() }
                        />
                    </View>
                    ),
                  }}/>
            
        </Stack.Navigator>
    );
  }
  
  const StaticStack  = () => {
    const name = 'Static'
    return(
        <Stack.Navigator
        screenOptions={{headerShown:false}}>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name={name}
                component={Static}
                options={{
                  headerTitle: () => <Header name={name} />,
                    headerTitleAlign: {titleAlign},
                    headerLeft: () => (
                      <View style={{marginRight: 10}}>
                        <Icon.Button
                        name="md-chevron-back"
                        size={22}
                        backgroundColor="#fff"
                        color="#2e64e5"
                        onPress={() => navigation.popToTop() }
                        />
                    </View>
                    ),
                  }}/>
        </Stack.Navigator>
    );
  }