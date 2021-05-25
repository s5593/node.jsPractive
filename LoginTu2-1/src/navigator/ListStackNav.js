import React from 'react'
import {Button, Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

// 페이지 참조
import MainList from '../pages/mainPage/MainList'
import SubList from '../pages/subPage/SubList'
import Stat from '../pages/subPage/Stat'
import Compare from '../pages/subPage/Compare'

import {Header, Left, Right} from '../pages/Header'
import {AuthContext} from '../context/Context'


const Stack = createStackNavigator();
const titleAlign = 'center'

/**
 * TabNav: 홈화면, 메인으로 측정한 결과물의 리스트가 존재함
 * SubTabNav: MainList중 하나를 누르면 해당 결과물의 SubList와 평균 Average Static정보 페이지의 TabNav가 나온다
 * Compare: SubList를 누르면 Main결과와 선택한 Sub결과를 비교하는 페이지
 * SelectNav: 측정 방식을 결정하는 페이지의 스택 네비게이션
 * MeasureNav: 실제 측정이 이루어지는 페이지의 스택 네비게이션
 * @param {*} param0 
 * @returns 
 */
const MainStackNav = (props) => {
    const Auth = React.useContext(AuthContext)
    // console.log(Auth.title)
    return(
        <Stack.Navigator
        initialRouteName="MainList"
        >
            <Stack.Screen
                  name='MainList'
                  component={MainList}
                  options={{
                    headerTitle: () => <Header name='MainList' />,
                      headerTitleAlign: {titleAlign},
                    //   headerLeft: () => (
                    //     <View style={{marginRight: 10}}>
                    //       <Icon.Button
                    //       name="md-chevron-back"
                    //       size={22}
                    //       backgroundColor="#fff"
                    //       color="#2e64e5"
                    //       onPress={() => props.navigation.popToTop() }
                    //       />
                    //   </View>
                    //   ),
                    }}/>
           <Stack.Screen
                name='SubList'
                component={SubList}
                options={{
                  headerTitle: () => <Header name='SubList' />,
                    headerTitleAlign: {titleAlign},
                    headerLeft: () => (
                      <View style={{marginRight: 10}}>
                        <Icon.Button
                        name="md-chevron-back"
                        size={22}
                        backgroundColor="#fff"
                        color="#2e64e5"
                        onPress={() => props.navigation.popToTop() }
                        />
                    </View>
                    ),
                  }}/>
                  <Stack.Screen
                name='Stat'
                component={Stat}
                options={{
                  headerTitle: () => <Header name='Stat' />,
                    headerTitleAlign: {titleAlign},
                    headerLeft: () => (
                      <View style={{marginRight: 10}}>
                        <Icon.Button
                        name="md-chevron-back"
                        size={22}
                        backgroundColor="#fff"
                        color="#2e64e5"
                        onPress={() => props.navigation.pop() }
                        />
                    </View>
                    ),
                  }}/>
                  <Stack.Screen
                name='Compare'
                component={Compare}
                options={{
                  headerTitle: () => <Header name='Compare' />,
                    headerTitleAlign: {titleAlign},
                    headerLeft: () => (
                      <View style={{marginRight: 10}}>
                        <Icon.Button
                        name="md-chevron-back"
                        size={22}
                        backgroundColor="#fff"
                        color="#2e64e5"
                        onPress={() => props.navigation.pop() }
                        />
                    </View>
                    ),
                  }}/>
        </Stack.Navigator>
    );
  }

  export default MainStackNav;