import React from 'react'
import {View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'

import {Header, Left, Right} from '../pages/Header'
import Setting from '../pages/mainPage/Setting'

const Stack = createStackNavigator();
const titleAlign = 'center'


  /**
   * Setting: 앱 사용자 설정 페이지
   * @param {*} param0 
   * @returns 
   */
   const SettingStack = (props) => {
    return(
        <Stack.Navigator
        >
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='Setting'
                component={Setting}
                options={{
                  headerTitle: () => <Header name='My Page' size={30} />,
                    headerTitleAlign: {titleAlign},
                    headerLeft: () => (
                      <View style={{marginRight: 10}}>
                        <Icon.Button
                        name="md-chevron-back"
                        size={22}
                        backgroundColor="#fff"
                        color="#2e64e5"
                        onPress={() => props.navigation.goBack() }
                        />
                    </View>
                    ),
                  }}/>
        </Stack.Navigator>
    );
  }

export default SettingStack;