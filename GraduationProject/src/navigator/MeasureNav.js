import React from 'react'
import {View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import UserPage from '../pages/UserPage'
import MainImage from '../pages/measurePage/MainImage'
import SubImage from '../pages/measurePage/SubImage'
import ResultCompare from '../pages/measurePage/ResultCompare'

import {Header, Left, Right} from '../pages/Header'
import Icon from 'react-native-vector-icons/Ionicons'


const Stack = createStackNavigator();
const titleAlign = 'center'


/**
 * TabNav:메인화면 네비게이션
 * UserPage: 사용자 정보 페이지
 * @returns 
 */
const MeasureNav = ({navigation}) => {

    return(
        <Stack.Navigator>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
              name='MainImage'
              component={MainImage}
              options={{
                headerTitle: () => <Header name='Main Select' />,
                  headerTitleAlign: {titleAlign},
                  headerLeft: () => (
                    <View style={{marginRight: 10}}>
                      <Icon.Button
                      name="md-chevron-back"
                      size={22}
                      backgroundColor="#fff"
                      color="#2e64e5"
                      onPress={() => navigation.pop() }
                      />
                  </View>
                  ),
                }}/>
                <Stack.Screen
              name='SubImage'
              component={SubImage}
              options={{
                headerTitle: () => <Header name='Sub Select' />,
                  headerTitleAlign: {titleAlign},
                  headerLeft: () => (
                    <View style={{marginRight: 10}}>
                      <Icon.Button
                      name="md-chevron-back"
                      size={22}
                      backgroundColor="#fff"
                      color="#2e64e5"
                      onPress={() => navigation.pop() }
                      />
                  </View>
                  ),
                }}/>
                <Stack.Screen
              name='ResultCompare'
              component={ResultCompare}
              options={{
                headerTitle: () => <Header name='Maesure Result' />,
                  headerTitleAlign: {titleAlign},
                  headerLeft: () => (
                    <View style={{marginRight: 10}}>
                      <Icon.Button
                      name="md-chevron-back"
                      size={22}
                      backgroundColor="#fff"
                      color="#2e64e5"
                      onPress={() => navigation.pop() }
                      />
                  </View>
                  ),
                }}/>
          {/* <Stack.Screen name='ImageView' component={ImageView} options={{title : 'Image analysis view'}}/> */}

        </Stack.Navigator>
    );
}

export default MeasureNav;