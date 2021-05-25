import React from 'react'
import {KeyboardAvoidingView, SafeAreaView, Dimensions} from 'react-native'
import styled from 'styled-components'

import {AuthContext} from '../../context/Context'
import {LoginButton, LoginInput, LoginView, LogoImage} from '../../components/LoginComponents'


const ChangePW = ({navigation}) => {
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <SafeAreaView>
                <LoginView>
                <LogoImage source={require('../../assets/react-native.png')}/>
                <LoginInput secureTextEntry={true} placeholder = "Password"/>
                <LoginInput secureTextEntry={true} placeholder = "Confirm Password"/>
                <LoginButton onPress ={() => {} } title='비밀번호 변경' />
                </LoginView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default ChangePW;