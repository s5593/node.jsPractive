import React from 'react'
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native'
import {AuthContext} from '../../context/Context'
import styled from 'styled-components'

const LogoImage = styled.Image`
    flex:1;
    width: 80%;
    padding: 10%;
    marginTop: 10%;
    marginBottom:10%;
    alignSelf:center;
`;

const LoginBox = styled.TextInput`
    border: 1px solid #DCDCDC;
    borderRadius: 3px;
    backgroundColor: #F5F5F5;
    width: 85%;
    padding: 3%;
    marginBottom:1%;
    alignSelf: center;
    fontSize:15px;
`;

const TouchText = styled.Text`
    marginTop: 5%;
    textAlign: center;
`;

const SignUpText = styled.TouchableOpacity`
    width: 100%;
    padding: 3%;
    justifyContent: center;
    alignItems: center;
    alignSelf: center;
    borderRadius: 5px;
    backgroundColor: #1E90FF;
    color:#F5F5F5;
`;

const SignUpButton = styled.View`
    width: 85%;
    marginTop: 5%;
    alignSelf: center;
    alignContent: center;
    fontSize:15px;
`;

const SignUpContents = styled.TouchableOpacity`
textAlign: center;
`;

const SearchPW = ({navigation}) => {
    return(
        <SafeAreaView>
            <LogoImage source={require('../../assets/react-native.png')}/>
            <LoginBox placeholder = "Email or PhoneNumber"/>
            <SignUpButton>
                <SignUpText 
                    onPress ={() => navigation.navigate('MailPhoneAuth') }
                >
                    <Text style = {{color:'white'}}>인증코드 발급</Text>
                </SignUpText>
                <TouchText>계정이 생각났나요?</TouchText>
            </SignUpButton>
            <SignUpContents onPress={() => navigation.goBack()}>
                <TouchText>로그인</TouchText>
            </SignUpContents>
        </SafeAreaView>
    );
}

export default SearchPW;