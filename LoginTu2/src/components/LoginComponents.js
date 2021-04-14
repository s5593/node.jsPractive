import styled from 'styled-components';

const LoginView = styled.ScrollView`
    width: 90%;
    align-self: center;
`;

const LoginInput = styled.TextInput`
    border: 1px solid #DCDCDC;
    border-radius: 3px;
    background-color: #F5F5F5;
    width: 95%;
    padding: 3%;
    margin-bottom:2%;
    align-self: center;
    font-size:15px;
`;

const LoginButton = styled.Button`
    flex: 0.8;
    width: 85%;
    align-self: center;
    align-content: center;
    font-size:15px;
`;

const TextOpocity = styled.TouchableOpacity`
    text-align: center;
`;

const Text = styled.Text`
    margin: 5%;
    text-align: center;
`;

const BlockText = styled.Text`
    margin: 5%;
    text-align: center;
`;

const LogoImage = styled.Image`
    flex:1;
    width: 90%;
    resizeMode: contain;
    align-self:center;
`;


export {LoginInput, LoginButton, TextOpocity, Text, LoginView, BlockText, LogoImage}