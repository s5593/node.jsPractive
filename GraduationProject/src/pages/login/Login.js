import React from 'react'
import {View, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions} from 'react-native'
import {AuthContext} from '../../context/Context'
import styled from 'styled-components'
import { GoogleSigninButton } from '@react-native-community/google-signin'
import {LoginButton, Text, LoginInput, TextOpocity, LoginView, BlockText, LogoImage} from '../../components/LoginComponents'

const SignUpContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-content: center;
    margin: 5% 20%;
`;

const MainLogoImage = styled.Image`
    flex:1;
    width: 100%;
    height: 10%;
    padding: 15%;
    margin-top: 15%;
    margin-bottom:15%;
`;


const Login = ({navigation}) => {
    /**
     * useContext로 context/Context.js에서 정의한
     * Context 사용 가능
     */
    const Auth = React.useContext(AuthContext);

    return(
        //구글 로그인 버튼
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
        <SafeAreaView>
            <LoginView>
                <MainLogoImage source={require('../../assets/react-native.png')}
                />
                <LoginInput placeholder = "Email or PhoneNumber"/>
                <LoginInput secureTextEntry={true} placeholder = "Password"/>
                <LoginButton onPress={() => {navigation.navigate('FailureAuth')}} title='로그인'/>
                <BlockText>또는</BlockText>
                <GoogleSigninButton
                    style={{width: Dimensions.get("window").width*0.91, alignSelf: 'center' }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => Auth.signIn()} />
                <SignUpContainer>
                    <TextOpocity onPress={() => navigation.navigate('EMailAuthSearch')}>
                        <Text>비밀번호 찾기</Text>
                    </TextOpocity>
                    <TextOpocity onPress={() => navigation.navigate('EMailAuthSignUp')}>
                        <Text>가입하기</Text>
                    </TextOpocity>
                </SignUpContainer>
            </LoginView>
        </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default Login;