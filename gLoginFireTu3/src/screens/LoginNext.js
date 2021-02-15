import React from 'react'
import {Button, Text} from 'react-native' 
import {GoogleSignin} from '@react-native-community/google-signin'
import {GoogleLogin} from '../login/GoogleLogin'

function LoginNext(){
    // const signOut = async (props) => {
    //     try {
    //       await GoogleSignin.revokeAccess();
    //       await GoogleSignin.signOut();
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    return(
        <>
        {/* <Text>로그인 다음 페이지</Text>
        <Button title='로그아웃' onPress={() => {signOut}}/> */}
        <Text>LoginNext Page</Text>
        </>
    );
}

export default LoginNext;