import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Search from '../../pages/search/Search'
import SearchDetail from '../../pages/search/SearchDetail'
const Stack = createStackNavigator();

function SearchStackNav(){
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SearchDetail" component={SearchDetail} />
      </Stack.Navigator>
    );
  }

export default SearchStackNav;