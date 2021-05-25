import React from 'react'
import {View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import MainImage from '../pages/measurePage/MainImage'
import SubImage from '../pages/measurePage/SubImage'
import ResultCompare from '../pages/measurePage/ResultCompare'
import Select from '../pages/measurePage/Select'
import SelectInMainList from '../pages/measurePage/SelectInMainList'

import {Header, Left, Right} from '../pages/Header'
import Icon from 'react-native-vector-icons/Ionicons'


const Stack = createStackNavigator();
const titleAlign = 'center'


/**
 * TabNav:메인화면 네비게이션
 * UserPage: 사용자 정보 페이지
 * @returns 
 */
const MeasureStackNav = ({navigation}) => {

    return(
        <Stack.Navigator>
              <Stack.Screen
                name='Select'
                component={Select}
                options={{
                    headerTitle: () => <Header name='Measure Select' size={24}/>,
                      headerTitleAlign: {titleAlign},
                      headerLeft: () => (
                        <View style={{marginRight: 10}}>
                          <Icon.Button
                          name="md-chevron-back"
                          size={22}
                          backgroundColor="#fff"
                          color="#2e64e5"
                          onPress={() => navigation.goBack() }
                          />
                      </View>
                      ),
                    }}
            />
            <Stack.Screen
                name='SelectInMainList'
                component={SelectInMainList}
                options={{
                    headerTitle: () => <Header name='Select in List' />,
                      headerTitleAlign: {titleAlign},
                      headerLeft: () => (
                        <View style={{marginRight: 10}}>
                          <Icon.Button
                          name="md-chevron-back"
                          size={22}
                          backgroundColor="#fff"
                          color="#2e64e5"
                          onPress={() => navigation.goBack() }
                          />
                      </View>
                      ),
                    }}
            />
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
                      onPress={() => navigation.goBack() }
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
                      onPress={() => navigation.goBack() }
                      />
                  </View>
                  ),
                }}/>
                <Stack.Screen
              name='ResultCompare'
              component={ResultCompare}
              options={{
                headerTitle: () => <Header name='Maesure Result' size={24} />,
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
        </Stack.Navigator>
    );
}

export default MeasureStackNav;