import React from 'react'
import {View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView} from 'react-native'
import {AuthContext} from '../../context/Context'
import styled from 'styled-components'
import {LoginButton, LoginInput, Text, TextOpocity, LoginView, BlockText, LogoImage} from '../../components/LoginComponents'

const TextView = styled.View`
    justify-content: space-between;
`;

const MainPhoneAuth = ({navigation}) => {
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <SafeAreaView>
                <LoginView>
                    <LogoImage source={require('../../assets/react-native.png')}/>
                    <TextView>
                        <LoginInput placeholder = "Email or PhoneNumber"/>
                    </TextView>
                    <LoginButton onPress={() => {}} title='인증' />
                    <TextOpocity onPress={() => {}}>
                        <Text>인증 코드 재발급</Text>
                    </TextOpocity>
                    <TextOpocity onPress={() => navigation.popToTop()}>
                        <Text>로그인 화면으로</Text>
                    </TextOpocity>
                    </LoginView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default MainPhoneAuth;