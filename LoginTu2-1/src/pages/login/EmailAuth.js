import React from 'react'
import {SafeAreaView} from 'react-native'
import {AuthContext} from '../../context/Context'
import {LoginButton, LoginInput, Text, TextOpocity, LoginView, BlockText, LogoImage} from '../../components/LoginComponents'
import axios from 'axios'
var authNumber = 0 ; //인증번호
//인증을 위한 이메일 보내기 함수

const SearchPW = (props) => {
    const Auth = React.useContext(AuthContext);
    const BASE_URL = `${Auth.IPaddress}:3100`;

    const [email, setEmail] = React.useState('');

    const sendEmail = (inputEmail) =>{
        //authTimeStart = true;
        // inputEmail = "chlgudtjr987@naver.com";
        axios.post(`${BASE_URL}/sendemail`,{email : inputEmail})
        .then(res => {
            authNumber = res.data.authNum; //nodejs 측으로 부터 받은 인증번호
            console.log(authNumber);
            props.navigation.navigate('AuthNumInput',{authNum :  res.data.authNum, email : inputEmail});//인증번호를 넘겨주면서 인증번호입력하는 페이지로 넘어간다.
        })
    }

    return(
        <SafeAreaView>
            <LoginView>
            <LogoImage source={require('../../assets/react-native.png')}/>
            <LoginInput 
            placeholder = "Email or PhoneNumber"
            value={email}
            onChangeText={value => setEmail( value )}
            />

            <LoginButton onPress ={() => {
                sendEmail(email);
            } } title='인증코드 발급' />
            <BlockText>계정이 생각났나요?</BlockText>
            <TextOpocity onPress={() => props.navigation.goBack()}>
                <Text>로그인</Text>
            </TextOpocity>
            </LoginView>
        </SafeAreaView>
    );
}

export default SearchPW;