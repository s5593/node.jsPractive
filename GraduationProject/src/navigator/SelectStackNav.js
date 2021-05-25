import React from 'react'
import {View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import Select from '../pages/measurePage/Select'
import SelectInMainList from '../pages/measurePage/SelectInMainList'
import Icon from 'react-native-vector-icons/Ionicons'
import {Header, Left, Right} from '../pages/Header'

const Stack = createStackNavigator();
const titleAlign = 'center'


/**
 * TabNav:메인화면 네비게이션
 * UserPage: 사용자 정보 페이지
 * @returns 
 */
const SelectStackNav = ({navigation}) => {

    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Select'
                component={Select}
                options={{
                    headerTitle: () => <Header name='Maesure Select' />,
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
        </Stack.Navigator>
    );
}

export default SelectStackNav;