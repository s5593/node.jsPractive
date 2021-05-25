import React from 'react'
import {Button, Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {useNavigation} from '@react-navigation/native'

// 페이지 참조
import {Header, Left, Right} from '../pages/Header'
import {AuthContext} from '../context/Context'

// 네비게이터 참조
import MeasureStackNav from './MeasureStackNav'
import TabNav from './TabNav'

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
const MainStackNav = ({ navigation}) => {
    const Auth = React.useContext(AuthContext)
    const nav = useNavigation(TabNav);
    // console.log(Auth.title)
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='TabNav'
                component={TabNav}
                options={{headerShown: false,
                  headerTitle: () => <Header name={Auth.title} />,
                    headerTitleAlign: {titleAlign},
                    // headerLeft: () => (
                    //   <Left navigation={nav}/>
                    // ),
                  }}/>
                  <Stack.Screen
                name='MeasureStackNav'
                component={MeasureStackNav}
                options={{headerShown: false}}/>
        </Stack.Navigator>
    );
  }
  

  export default MainStackNav;