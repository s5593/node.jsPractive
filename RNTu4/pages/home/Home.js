import React from 'react'
import {View} from 'react-native'
import { Container, Header, Left, Body,
    Right, Button, Icon, Title, Text } from 'native-base';
    import CustomHeader from '../CustomHeader'
  
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

  export default Home;