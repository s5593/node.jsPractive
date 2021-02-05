import * as React from 'react';
import { View, Image, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Header, Left, Body,
  Right, Button, Icon, Title, Text } from 'native-base';
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator, createDrawerNavigatore} from '@react-navigation/drawer'
import {IMAGE} from './src/constants/Image'
import { initialWindowMetrics } from 'react-native-safe-area-context';
import LoginScreen from './loginScreen/Login'


function CustomHeader(props){
  let {title, isHome} = props;
  return (
      <Header>
        <Left>
          {
            isHome?
            <Button transparent>
              <Icon name="menu"/>
            </Button>:
            <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
          }
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          {/* <Button transparent>
            <Icon name='menu' />
          </Button> */}
        </Right>
      </Header>
  );
}



function Home(props) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title='Home' isHome={true}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button light onPress={() => props.navigation.navigate("HomeDetail")}>
        <Text>Go to Home Detail</Text>
      </Button>
      </View>
    </View>
  );
}

function HomeDetail(props) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title='HomeDetail' navigation={props.navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeDetail Screen!</Text>
      </View>
    </View>
  );
}

function Search(props) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title='Search' isHome={true}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search!</Text>
      <Button light onPress={() => props.navigation.navigate("SearchDetail")}>
        <Text>Go to Search Detail</Text>
      </Button>
      </View>
    </View>
  );
}

function SearchDetail(props) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title='SearchDetail' navigation={props.navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SearchDetail Screen!</Text>
      </View>
    </View>
  );
}

function profile(props) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title='profile' navigation={props.navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>profile Screen!</Text>
      </View>
    </View>
  );
}

function setting(props) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title='setting' navigation={props.navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>setting Screen!</Text>
      </View>
    </View>
  );
}
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function TabNav(){
  return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeStackNav}
        options={{
          tabBarLabel:'Home',
          tabBarIcon: ({tintColor}) => (
            <Image
              source={IMAGE.ICON_MENU}
              resizeMode="contain"
              style={{width: 20, height:20}}/>
          )
        }} />
        <Tab.Screen name="Search" component={SearchStackNav} options={{
          tabBarLabel:'Search',
          tabBarIcon: ({tintColor}) => (
            <Image
              source={IMAGE.ICON_MENU}
              resizeMode="contain"
              style={{width: 20, height:20}}/>
          )
        }} />
      </Tab.Navigator>
  );
};

function StackNav(){
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="profile" component={profile} />
      <Stack.Screen name="setting" component={setting} />
    </Stack.Navigator>
  );
}

function DrawerNav(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="LoginScreen" component={LoginScreen}/>
      <Drawer.Screen name="StackNav" component={StackNav} />            
    </Drawer.Navigator>
  )
}

function HomeStackNav(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeDetail" component={HomeDetail} />
    </Stack.Navigator>
  );
}

function SearchStackNav(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchDetail" component={SearchDetail} />
    </Stack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <>
    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>
    </>
  );
};

export default App;