import React from 'react'
import {KeyboardAvoidingView, ProgressViewIOSComponent, SafeAreaView} from 'react-native'
import {AuthContext} from '../../context/Context'
import {LoginButton, LoginInput, Text, TextOpocity, LoginView, BlockText, LogoImage} from '../../components/LoginComponents'
import axios from 'axios'
const SignUp = (props,{navigation}) => {
    const Auth = React.useContext(AuthContext);
    const BASE_URL = `${Auth.IPaddress}:3100`;

    const [email, setEmail] = React.useState(props.route.params.email);
    const [name, setName] = React.useState('');
    const [Nicname, setNicname] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passConfirm, setPassConfirm] = React.useState('');

    const signup = async() => {

        if(!email)
            return alert('Please enter your email required')
        if(!name)
            return alert('Please enter your name required')
        if(!Nicname)
            return alert('Please enter your nicname required')
        if(!password)
            return alert('Please enter your password required')
        if(password !== passConfirm)
            return alert('Passwords do not match.')

        axios.post()
        
    }


    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <SafeAreaView>
                <LoginView>
                <LogoImage source={require('../../assets/react-native.png')}/>
                <LoginInput 
                    placeholder = "Email or PhoneNumber"
                    value={email}
                    editable={false}
                    />
                <LoginInput 
                    placeholder = "Name"
                    value={name}
                    onChangeText={value => setName( value )}
                    />
                <LoginInput 
                    placeholder = "Nicname"
                    value={Nicname}
                    onChangeText={value => setNicname( value )}
                    />

                <LoginInput 
                    secureTextEntry={true} 
                    placeholder = "Password"
                    value={password}
                    onChangeText={value => setPassword( value )}
                    />

                <LoginInput
                    secureTextEntry={true} 
                    placeholder = "Password confirm"
                    value={passConfirm}
                    onChangeText={value => setPassConfirm( value )}
                    />

                <LoginButton onPress ={() => {signup(props)} } title='가입' />
                <BlockText>계정이 있으신가요?</BlockText>
                <TextOpocity onPress={() => navigation.goBack()}>
                    <Text>로그인</Text>
                </TextOpocity>
                </LoginView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default SignUp;