import React from 'react'
import {View} from 'react-native'
import { Container, Header, Left, Body,
    Right, Button, Icon, Title, Text } from 'native-base';
    import CustomHeader from '../CustomHeader'
  
function Search(props, {navigation}) {
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

  export default Search;