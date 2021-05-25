import React from 'react'
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import {StatStack, SubListStack} from './SubTabNavHeader'
import {AuthContext} from '../context/Context'
const Tab = createMaterialTopTabNavigator ();

/**
 * SubList 선택한 MainList의 SubList 해더를 만들기 위한 스택
 * Static: 선택한 MainList의 평균 통계를 보여주는 페이지의 해더를 만들기 위한 스택
 * @returns 
 */
const SubTabNav = ({route, navigation}) => {
    const Auth = React.useContext(AuthContext);

    return(
    <Tab.Navigator>
        <Tab.Screen name = "SubList" component={SubListStack} />
        <Tab.Screen name = "Stat" component={StatStack} />
    </Tab.Navigator>
    )
}

export default SubTabNav;



