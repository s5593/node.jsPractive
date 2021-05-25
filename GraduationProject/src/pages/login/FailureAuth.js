import React from 'react'
import {SafeAreaView} from 'react-native'
import {BlockText, Text, TextOpocity, LoginView, LogoImage} from '../../components/LoginComponents'
const FailureAuth = (props,{navigation}) => {
    return(
        <SafeAreaView>
            <LoginView>
                <LogoImage source={require('../../assets/react-native.png')}/>
                <BlockText>이메일 인증에 실패하였습니다.</BlockText>
                <TextOpocity onPress={() => {console.log(1)}}>
                    <Text>
                        이메일 인증으로 돌아가기
                    </Text>
                </TextOpocity>
                <TextOpocity onPress={() => {props.navigation.popToTop()}}>
                    <Text>
                        로그인 페이지로
                    </Text>
                </TextOpocity>
            </LoginView>
        </SafeAreaView>
    )

}

export default FailureAuth;