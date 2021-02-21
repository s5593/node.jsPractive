import React from 'react'
import { View, Text, Button } from 'react-native'
import {AuthContext} from '../../context/Context'
import DrawerNavigator from '../../navigator/DrawerNavigator'
import {useNavigation} from '@react-navigation/native'

const Home = () => {
    const Auth = React.useContext(AuthContext);
    const navigation = useNavigation(DrawerNavigator);

    return (
        <View>
        <Text>
            Home
        </Text>
        <Text>user Email: {Auth.googleInfo.user.email}</Text>
        <Text>{Auth.googleInfo.user.name}</Text>
        <Text>{Auth.googleInfo.user.givenName}</Text>
         <Button title='dawer bar load' onPress={()=>{ 
             navigation.openDrawer();        
        }}/>
        <Button title='logout' onPress={()=>{  
            Auth.signOut().then(console.log('Success signOut'))      
        }
        }/>
        <Button title='test 1' onPress={()=>{          
        }}/>
         <Button title='IP settings' onPress={()=>{              
        }}/>
        </View>
    );
}

export default Home;