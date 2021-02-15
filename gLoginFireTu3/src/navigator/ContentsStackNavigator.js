import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import LoginNext from '../screens/LoginNext'

const ContentsStack = createStackNavigator();

const ContentsStackNavigator = () => (
    <ContentsStack.Navigator>
        <ContentsStack.Screen name="LoginNext" component={LoginNext}/>
    </ContentsStack.Navigator>
)

export default ContentsStackNavigator;