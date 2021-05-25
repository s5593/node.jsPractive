import React from 'react'
import {Button, Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'


/**
 * MainList: 홈화면, 메인으로 측정한 결과물의 리스트가 존재함
 * SubTabNav: MainList중 하나를 누르면 해당 결과물의 SubList와 평균 Average Static정보 페이지의 TabNav가 나온다
 * Compare: SubList를 누르면 Main결과와 선택한 Sub결과를 비교하는 페이지
 * SelectNav: 측정 방법을 선택하는 페이지의 네비게이션
 * MeasureNav: 실제 측정하는 페이지의 네비게이션
 * @param {*} param0 
 * @returns 
 */
const HomeStackNav = ({route, navigation}) => {
    const nav = useNavigation();
    return(
        <Stack.Navigator>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='MainList'
                component={MainList}
                options={{
                  headerTitle: () => <Header name='MainList' />,
                    headerTitleAlign: {titleAlign},
                    headerLeft: () => (
                      <Left navigation={nav}/>
                    ),
                  }}/>
            <Stack.Screen
                name='MainTabNavigator'
                component={MainTabNavigator}
                options={{
                  headerTitle: () => <Header name='(title part)' />,
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
                        onPress={() => navigation.pop() }
                        />
                    </View>
                    ),
                  }}/>
                   <Stack.Screen
                name='Select'
                component={Select}
                options={{
                  headerTitle: () => <Header name='Select' />,
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
                name='SelectInMainList'
                component={SelectInMainList}
                options={{
                  headerTitle: () => <Header name='Select in MainList' size={27} />,
                    headerTitleAlign: {titleAlign},
                    headerTitleStyle:{
                      fontSize:"20",
                    },
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
                name='SelectInMainList'
                component={SelectInMainList}
                options={{
                  headerTitle: () => <Header name='Select in MainList' size={27} />,
                    headerTitleAlign: {titleAlign},
                    headerTitleStyle:{
                      fontSize:"20",
                    },
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
        </Stack.Navigator>
    );
  }

  const PracticeStackNav = ({route, navigation}) => {
    const nav = useNavigation();
    return(
        <Stack.Navigator>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='Practive'
                component={Practice}
                options={{
                  headerTitle: () => <Header name='Practive' />,
                    headerTitleAlign: {titleAlign},
                    headerLeft: () => (
                      <Left navigation={nav}/>
                    ),
                  }}/>
        </Stack.Navigator>
    );
  }

  const SettingStackNav = ({route, navigation}) => {
    const nav = useNavigation();
    return(
        <Stack.Navigator>
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='Setting'
                component={Setting}
                options={{
                  headerTitle: () => <Header name='Setting' />,
                    headerTitleAlign: {titleAlign},
                    headerLeft: () => (
                      <Left navigation={nav}/>
                    ),
                  }}/>
        </Stack.Navigator>
    );
  }
  export {HomeStackNav, PracticeStackNav, SettingStackNav};