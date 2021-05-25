import React from 'react'
import {View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView} from 'react-native'
import {AuthContext} from '../../context/Context'
import styled from 'styled-components'
import {LoginButton, LoginInput, Text, TextOpocity, LoginView, BlockText, LogoImage} from '../../components/LoginComponents'

const TextView = styled.View`
    justify-content: space-between;
`;

const BlockText2 = styled(BlockText)`
    margin: 5% 5% 0% 5%;
    color: #000;
`;

const EMailAuthSearch = ({navigation}) => {
    const [authInput, setAuthInput] = React.useState(false);

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <SafeAreaView>
                <LoginView>
                <LogoImage source={require('../../assets/react-native.png')}/>
                {authInput ? 
                    null :
                    <>
                        <LoginInput placeholder = "Email or PhoneNumber"/>
                        <LoginButton onPress ={() => {setAuthInput(true)}} title='인증코드 발급' />
                    </>
                }
                
                {authInput ?
                    <>
                        <TextView>
                        <LoginInput placeholder = "Auth Code"/>
                        </TextView>
                        <LoginButton onPress={() => {navigation.navigate('ChangePW')}} title='인증' />
                        <BlockText2>인증 코드를 받지 못하셨나요?</BlockText2>
                        <TextOpocity onPress={() => {}}>
                            <Text>인증 코드 재발급</Text>
                        </TextOpocity>
                    </>
                    :
                    null
                }
                <BlockText>계정이 생각났나요?</BlockText>
                <TextOpocity onPress={() => navigation.popToTop()}>
                    <Text>로그인</Text>
                </TextOpocity>
                </LoginView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default EMailAuthSearch;