import React from 'react'
import {View, TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native'
import {AuthContext} from '../../context/Context'
import styled from 'styled-components'
import { GoogleSigninButton } from '@react-native-community/google-signin'

const LogoImage = styled.Image`
    flex:1;
    width: 100%;
    height: 10%;
    padding: 15%;
    margin-top: 15%;
    margin-bottom:15%;
`;

const LoginImage = styled.Image`
    flex:1;
    width: 80%;
    padding: 8%;
    margin-top: 5%;
    margin-bottom:5%;
    align-self: center;
`;

const LoginBox = styled.TextInput`
    border: 1px solid #DCDCDC;
    border-radius: 3px;
    background-color: #F5F5F5;
    width: 85%;
    padding: 3%;
    margin-bottom:5%;
    align-self: center;
    font-size:15px;
`;

const LoginButton = styled.View`
    width: 85%;
    align-self: center;
    align-content: center;
    font-size:15px;
`;

const LoginText = styled.TouchableOpacity`
    width: 100%;
    padding: 3%;
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 5px;
    background-color: #1E90FF;
    color:#F5F5F5;
`;

const Line = styled.View`
    flex-grow: 1;
    flex-direction: row;
    align-items: flex-start;
`;

const SignUpContents = styled.TouchableOpacity`
    text-align: center;
`;

const SignUpContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-content: center;
    margin: 5% 20%;
`;

const TouchText = styled.Text`
    margin: 5%;
    text-align: center;
`;


const GoogleLogin = ({navigation}) => {
    /**
     * useContext로 context/Context.js에서 정의한
     * Context 사용 가능
     */
    const Auth = React.useContext(AuthContext);

    return(
        //구글 로그인 버튼
        <SafeAreaView>
            <ScrollView>
                <LogoImage source={require('../../assets/react-native.png')}
                />
                {/* 밑에 주석은 구글로그인 버튼 다른거 */}
                {/* <TouchableOpacity onPress={() => Auth.signIn()}>
                    <LoginImage source={require('../assets/googleLoginImg.png')}/>
                </TouchableOpacity> */}
                <LoginBox placeholder = "Email or PhoneNumber"/>
                <LoginBox secureTextEntry={true} placeholder = "Password"/>
                <LoginButton>
                    <LoginText onPress ={() => {} }>
                        <Text style = {{color:'white'}}>로그인</Text>
                    </LoginText>
                    <TouchText>또는</TouchText>
                </LoginButton>
                <GoogleSigninButton
                    style={{ width: 380, height: 50, alignSelf: 'center' }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => Auth.signIn()} />
                <SignUpContainer>
                    <SignUpContents onPress={() => navigation.navigate('SearchPW')}>
                        <Text>비밀번호 찾기</Text>
                    </SignUpContents>
                    <SignUpContents onPress={() => navigation.navigate('SignUp')}>
                        <Text>가입하기</Text>
                    </SignUpContents>
                </SignUpContainer>
            </ScrollView>
        </SafeAreaView>
    );
}

export default GoogleLogin;