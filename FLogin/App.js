/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View } from "react-native";
import Realm from "realm";
import { LoginButton, AccessToken } from "react-native-fbsdk";

const Login = ({ app }) => {
  return (
    <View>
      <LoginButton
        onLoginFinished={async (error, result) => {
          if (error) {
            console.error(`Failed to log in: ${result.error}`);
          } else if (result.isCancelled) {
            console.log("Facebook login was cancelled");
          } else {
            const { accessToken } = await AccessToken.getCurrentAccessToken();
            const credential = Realm.Credentials.facebook(accessToken);
            const user = await app.logIn(credential);
            console.log(`Logged in with id: ${user.id}`);
          }
        }}
      />
    </View>
  );
};
export default Login;

