import React from 'react'
import {View, TouchableOpacity, Text, SafeAreaView, Button} from 'react-native'
import {AuthContext} from '../../context/Context'
import styled from 'styled-components'

const LogoImage = styled.Image`
    flex:1;
    width: 80%;
    padding: 10%;
    margin-top: 10%;
    margin-bottom:10%;
    align-self:center;
`;

const TextView = styled.View`
    justify-content: space-between;
`;

const LoginBox = styled.TextInput`
    border: 1px solid #DCDCDC;
    border-radius: 3px;
    background-color: #F5F5F5;
    width: 85%;
    padding: 3%;
    margin-bottom:1%;
    align-self: center;
    font-size:15px;
`;

const TouchText = styled.Text`
    margin-top: 5%;
    text-align: center;
`;

const SignUpText = styled.TouchableOpacity`
    width: 100%;
    padding: 3%;
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 5px;
    background-color: #1E90FF;
    color:#F5F5F5;
`;

const SignUpButton = styled.View`
    width: 85%;
    margin-top: 5%;
    align-self: center;
    align-content: center;
    font-size:15px;
`;

const SignUpContent = styled.TouchableOpacity`
    text-align: center;
`;

const SignUpContents = styled.TouchableOpacity`
    margin-top: 3%;
    align-self: center;
`;

const MainPhoneAuth = ({navigation}) => {
    return(
        <SafeAreaView>
            <LogoImage source={require('../../assets/react-native.png')}/>
            <TextView>
                <LoginBox placeholder = "Email or PhoneNumber"/>
            </TextView>
            <SignUpButton>
                <SignUpText 
                    onPress ={() => {} }
                >
                    <Text style = {{color:'white'}}>인증</Text>
                </SignUpText>
            </SignUpButton>
            <SignUpContents onPress={() => {}}>
                <Text>인증 코드 재발급</Text>
            </SignUpContents>
            <SignUpContent onPress={() => navigation.popToTop()}>
                <TouchText>로그인 화면으로</TouchText>
            </SignUpContent>
        </SafeAreaView>
    );
}

export default MainPhoneAuth;