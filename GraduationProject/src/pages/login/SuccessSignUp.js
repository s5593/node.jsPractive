import React from 'react'
import {View, SafeAreaView} from 'react-native'
import {BlockText, Text, TextOpocity, LoginView, LogoImage} from '../../components/LoginComponents'

const SuccessSignUp = (props) => {
    return(
        <SafeAreaView>
            <LoginView>
                <LogoImage source={require('../../assets/react-native.png')}/>
                <BlockText>회원가입 완료</BlockText>
                <TextOpocity onPress={() => {props.navigation.popToTop()}}>
                    <Text>
                        로그인 페이지로
                    </Text>
                </TextOpocity>
            </LoginView>
        </SafeAreaView>
    )
}

export default SuccessSignUp;