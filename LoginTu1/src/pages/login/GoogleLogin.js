import React from 'react'
import {View, TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native'
import {AuthContext} from '../../context/Context'
import styled from 'styled-components'
import { GoogleSigninButton } from '@react-native-community/google-signin';

const LogoImage = styled.Image`
    flex:1;
    width: 100%;
    height: 10%;
    padding: 15%;
    marginTop: 15%;
    marginBottom:15%;
`;

const LoginImage = styled.Image`
    flex:1;
    width: 80%;
    padding: 8%;
    marginTop: 5%;
    marginBottom:5%;
    alignSelf: center;
`;

const LoginBox = styled.TextInput`
    border: 1px solid #DCDCDC;
    borderRadius: 3px;
    backgroundColor: #F5F5F5;
    width: 85%;
    padding: 3%;
    marginBottom:5%;
    alignSelf: center;
    fontSize:15px;
`;

const LoginButton = styled.View`
    width: 85%;
    alignSelf: center;
    alignContent: center;
    fontSize:15px;
`;

const LoginText = styled.TouchableOpacity`
    width: 100%;
    padding: 3%;
    justifyContent: center;
    alignItems: center;
    alignSelf: center;
    borderRadius: 5px;
    backgroundColor: #1E90FF;
    color:#F5F5F5;
`;
const Line = styled.View`
    flex-grow: 1;
    flexDirection: row;
    alignItems: flex-start
`;

const SignUpContents = styled.TouchableOpacity`
    textAlign: center;
`;

const SignUpContainer = styled.View`
    justifyContent: space-between;
    flexDirection: row;
    alignContent: center;
    margin: 5% 20%;
`;

const TouchText = styled.Text`
    margin: 5%;
    textAlign: center;
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