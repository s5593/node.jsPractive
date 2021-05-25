import React from 'react'
import {SafeAreaView} from 'react-native'
import {AuthContext} from '../../context/Context'
import {LoginButton, LoginInput, Text, TextOpocity, LoginView, BlockText, LogoImage} from '../../components/LoginComponents'

const SearchPW = ({navigation}) => {
    return(
        <SafeAreaView>
            <LoginView>
            <LogoImage source={require('../../assets/react-native.png')}/>
            <LoginInput placeholder = "Email or PhoneNumber"/>
            <LoginButton onPress ={() => {navigation.navigate('EMainAuth')} } title='인증코드 발급' />
            <BlockText>계정이 생각났나요?</BlockText>
            <TextOpocity onPress={() => navigation.goBack()}>
                <Text>로그인</Text>
            </TextOpocity>
            </LoginView>
        </SafeAreaView>
    );
}

export default SearchPW;