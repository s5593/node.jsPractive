import React from 'react'
import {View, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions} from 'react-native'
import {AuthContext} from '../../context/Context'
import styled from 'styled-components'
import { GoogleSigninButton } from '@react-native-community/google-signin'
import {LoginButton, LoginInput, Text, TextOpocity, LoginView, BlockText, LogoImage} from '../../components/LoginComponents'
import axios from 'axios'

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

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
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
                {/* 밑에 주석은 구글로그인 버튼 다른거 */}
                {/* <TouchableOpacity onPress={() => Auth.signIn()}>
                    <LoginImage source={require('../assets/googleLoginImg.png')}/>
                </TouchableOpacity> */}
                <LoginInput
                    placeholder = "Email"
                    value={email}
                    onChangeText={value => setEmail( value )}
                    />
                <LoginInput 
                    secureTextEntry={true}
                    placeholder = "Password"
                    value={password}
                    onChangeText={value => setPassword( value )}
                    />

                <LoginButton onPress={() => {
                    Auth.signIn()
                }} title='로그인'/>
                <BlockText>또는</BlockText>
                <GoogleSigninButton
                    style={{width: Dimensions.get("window").width*0.91, alignSelf: 'center' }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => Auth.signInGoogle()} />
                <SignUpContainer>
                    <TextOpocity onPress={() => navigation.navigate('SearchPW')}>
                        <Text>비밀번호 찾기</Text>
                    </TextOpocity>
                    <TextOpocity onPress={() => navigation.navigate('EmailAuth')}>
                        <Text>가입하기</Text>
                    </TextOpocity>
                </SignUpContainer>
            </LoginView>
        </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default Login;