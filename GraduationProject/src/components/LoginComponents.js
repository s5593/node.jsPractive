import styled from 'styled-components';
import {Dimensions} from 'react-native'

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

const blockText = Math.round(Dimensions.get('window').width/30)
const BlockText = styled.Text`
    font-size: ${blockText}px;
    margin: 3%;
    text-align: center;
    color: #000;
`;

const text = Math.round(Dimensions.get('window').width/30)
const Text = styled.Text`
    font-size: ${text}px;
    margin: 5%;
    text-align: center;
    color: #2196F3;
    font-weight: bold;
`;

const LogoImage = styled.Image`
    flex:1;
    width: 90%;
    resizeMode: contain;
    align-self:center;
`;

const OverlapBox = styled.View`
    flex-direction: row;
    width: 95%;
    align-items: center;
    align-self: center;
    align-content: space-between;
`;

const OverlapInput = styled.TextInput`
    border: 1px solid #DCDCDC;
    border-radius: 3px;
    background-color: #F5F5F5;
    width: 80%;
    padding: 3%;
    margin-bottom:2%;
    margin-right: 2%;
    align-self: flex-start;
    font-size:15px;
`;

const OverlapButton = styled.Button`
    width: 10%;
    border-radius: 3px;
    margin: 5%;
    padding: 5%;
    align-items: flex-end;
`;

const OverlapOpacity = styled.TouchableOpacity`
    width: 15%;
    padding-bottom: 3px;
    align-self: center;
`;

const ConfirmTextBox = styled.View`
    width: 95%;
    align-items: flex-start;
    align-self: center;
`;

const confirmText = Math.round(Dimensions.get('window').width/27)
const ConfirmText = styled.Text`
    font-size: ${confirmText}px;
`;


export {LoginInput, LoginButton, TextOpocity, LoginView, Text, BlockText, LogoImage, OverlapBox, OverlapInput, OverlapButton, OverlapOpacity, ConfirmTextBox, ConfirmText}