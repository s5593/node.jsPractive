import React from 'react'
import {Button, Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

// 페이지 참조
import MainList from '../pages/mainPage/MainList'
import Compare from '../pages/subPage/Compare'
import {Header, Left, Right} from '../pages/Header'
import Practice from '../pages/mainPage/Practice'
import Setting from '../pages/mainPage/Setting'
import {AuthContext} from '../context/Context'

// 네비게이터 참조
import SubTabNav from './SubTabNav'
import SelectStackNav from './SelectStackNav'
import MeasureNav from './MeasureNav'
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
                    headerLeft: () => (
                      <Left navigation={nav}/>
                    ),
                  }}/>
            <Stack.Screen
                name='SubTabNav'
                component={SubTabNav}
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
                name='SelectStackNav'
                component={SelectStackNav}
                options={{headerShown: false}}/>
                  <Stack.Screen
                name='MeasureNav'
                component={MeasureNav}
                options={{headerShown: false}}/>
        </Stack.Navigator>
    );
  }

    /**
   * Practice: 표정 짓기 연습 페이지
   * @param {*} param0 
   * @returns 
   */
     const HomeStackNav = ({route, navigation}) => {
      const nav = useNavigation();
      return(
          <Stack.Navigator
          >
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
          </Stack.Navigator>
      );
    }

  /**
   * Practice: 표정 짓기 연습 페이지
   * @param {*} param0 
   * @returns 
   */
  const PracticeStackNav = ({route, navigation}) => {
    const nav = useNavigation();
    return(
        <Stack.Navigator
        >
            {/* 로그인 후 DrawerNavigator로 이동(Main으로 이동할 예정) */}
            <Stack.Screen
                name='Practice'
                component={Practice}
                options={{
                  headerTitle: () => <Header name='Practice' />,
                    headerTitleAlign: {titleAlign},
                    headerLeft: () => (
                      <Left navigation={nav}/>
                    ),
                  }}/>
        </Stack.Navigator>
    );
  }

  /**
   * Setting: 앱 사용자 설정 페이지
   * @param {*} param0 
   * @returns 
   */
  const SettingStackNav = ({route, navigation}) => {
    const nav = useNavigation();
    return(
        <Stack.Navigator
        >
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
  export {MainStackNav, HomeStackNav, PracticeStackNav, SettingStackNav};