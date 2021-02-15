import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import LoginScreen from '../../pages/Login'
import StackNav from '../stack/StackNav'
import CustomHeader from '../../pages/CustomHeader'

const Drawer = createDrawerNavigator();

function DrawerNav(){
    return(
      <Drawer.Navigator screenOptions={({navigation}) => ({
        CustomHeader: () => <CustomHeader navigation={navigation} />,
      })}>
        {/* <Drawer.Screen name="LoginScreen" component={LoginScreen}/> */}
        <Drawer.Screen name="StackNav" component={StackNav} />            
      </Drawer.Navigator>
    )
  }

  export default DrawerNav;