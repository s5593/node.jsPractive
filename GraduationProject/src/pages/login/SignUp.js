import React, { useState } from 'react'
import {KeyboardAvoidingView, SafeAreaView, Dimensions} from 'react-native'
import styled from 'styled-components'

import {AuthContext} from '../../context/Context'
import {LoginButton, LoginInput, Text, TextOpocity, LoginView, BlockText, LogoImage, OverlapBox, OverlapInput, OverlapButton, OverlapOpacity, ConfirmTextBox ,ConfirmText} from '../../components/LoginComponents'

const confirmOverlap = Math.round(Dimensions.get('window').height/50)
const ConfirmOverlap = styled(BlockText)`
    font-size: ${confirmOverlap}px;
    color: #2196F3;
    font-weight: bold;
`;


const SignUp = ({navigation}) => {
    //ID 중복확인
    const [ConfirmID, setConfirmID] = React.useState(false);
    const [properInputID, setProperInputID] = React.useState(false);
    //NicName 중복확인
    const [ConfirmNic, setConfirmNic] = React.useState(false);
    const [properInputNic, setProperInputNic] = React.useState(false);
    //PW 동일 확인
    const [properInputPW, setProperInputPW] = React.useState(false);
    const [pwInput, setPWInput] = React.useState();
    const [confirmPWInput, setConfirmPWInput] = React.useState();

    React.useEffect(() => {

    },[]);

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <SafeAreaView>
                <LoginView>
                <LogoImage source={require('../../assets/react-native.png')}/>
                <OverlapBox>
                    <OverlapInput placeholder = "Email or PhoneNumber"/>
                    <OverlapOpacity onPress={() =>
                        {
                            console.log(1)
                            setConfirmID(true)
                        }}>
                        <ConfirmOverlap>
                            중복
                            확인
                        </ConfirmOverlap>
                    </OverlapOpacity>
                </OverlapBox>
                <ConfirmTextBox>
                    {ConfirmID ? 
                            properInputID ?
                                <ConfirmText style={{color:'#2196F3'}}>
                                    사용{'  '}가능한{'  '}ID입니다.
                                </ConfirmText>
                            :
                                <ConfirmText style={{color:'#dc143c'}}>
                                    현재{'  '}사용중인{'  '}ID입니다.
                                </ConfirmText>
                            
                    : 
                        null
                    }
                </ConfirmTextBox>
                <LoginInput placeholder = "Name"/>
                <OverlapBox>
                    <OverlapInput placeholder = "Nicname"/>
                    <OverlapOpacity onPress={() =>
                        {
                            console.log(1)
                            setConfirmNic(true)   
                        }}>
                        <ConfirmOverlap>
                            중복
                            확인
                        </ConfirmOverlap>
                    </OverlapOpacity>
                </OverlapBox>
                <ConfirmTextBox>
                    {ConfirmNic ? 
                            properInputNic ?
                                <ConfirmText style={{color:'#2196F3'}}>
                                    사용{'  '}가능한{'  '}Nicname입니다.
                                </ConfirmText>
                            :
                                <ConfirmText style={{color:'#dc143c'}}>
                                    현재{'  '}사용중인{'  '}Nicname입니다
                                </ConfirmText>
                            
                    : 
                        null
                    }
                </ConfirmTextBox>
                <LoginInput secureTextEntry={true} placeholder = "Password" value={pwInput}/>
                <LoginInput secureTextEntry={true} placeholder = "Confirm Password" value={confirmPWInput}/>
                <LoginButton onPress ={() => {navigation.navigate('SuccessSignUp')} } title='가입' />
                <BlockText>이미 계정이 존재하시나요?</BlockText>
                <TextOpocity onPress={() => navigation.popToTop()}>
                    <Text>로그인</Text>
                </TextOpocity>
                </LoginView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default SignUp;