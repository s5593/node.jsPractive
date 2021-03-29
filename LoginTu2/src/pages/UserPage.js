/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native'
import { AuthContext } from '../context/Context'



const UserPage = () => {

    const Auth = React.useContext(AuthContext);

  return (
      <View>
        <Text>
            User Page
        </Text>
        <Text>user Email: {Auth.googleInfo.user.email}</Text>
        <Text>user name : {Auth.googleInfo.user.name}</Text>
        <Text>user givenName: {Auth.googleInfo.user.givenName}</Text>
    </View>
  );
};


export default UserPage;
