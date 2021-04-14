import React from 'react'
import {KeyboardAvoidingView, SafeAreaView} from 'react-native'
import {AuthContext} from '../../context/Context'
import {LoginButton, LoginInput, Text, TextOpocity, LoginView, BlockText, LogoImage} from '../../components/LoginComponents'

const SignUp = ({navigation}) => {
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <SafeAreaView>
                <LoginView>
                <LogoImage source={require('../../assets/react-native.png')}/>
                <LoginInput placeholder = "Email or PhoneNumber"/>
                <LoginInput placeholder = "Name"/>
                <LoginInput placeholder = "Nicname"/>
                <LoginInput secureTextEntry={true} placeholder = "Password"/>
                <LoginButton onPress ={() => {} } title='가입' />
                <BlockText>계정이 있으신가요?</BlockText>
                <TextOpocity onPress={() => navigation.goBack()}>
                    <Text>로그인</Text>
                </TextOpocity>
                </LoginView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default SignUp;