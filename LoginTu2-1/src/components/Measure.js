import styled from 'styled-components';
import {Dimensions} from 'react-native';


const TitleBox = styled.View`
border-bottom-color: #D3D3D3;
border-bottom-width: 2px;
width: 95%;
margin: 0 2%;
align-self: center;
`;

const titleText = Math.round(Dimensions.get('window').width/15)
const Title = styled.Text`
font-size : ${titleText}px;
color : #000;
padding: 1% 0 1% 2%;
`;

const SubTitleBox = styled.View`
border-bottom-color: #D3D3D3;
border-bottom-width: 2px;
width: 50%;
margin: 0 2%;
padding-top: 5%;
align-items: center;
align-self: center;
`;

const subTitleText = Math.round(Dimensions.get('window').width/20)
const SubTitle = styled.Text`
font-size : ${subTitleText}px;
color : #000;
padding: 1% 0 1% 2%;
`;

const TitleInput = styled.TextInput`
    border: 1px solid #DCDCDC;
    border-radius: 3px;
    background-color: #F5F5F5;
    width: 100%;
    padding: 2%;
    margin-bottom:2%;
    align-self: center;
    font-size:20px;
`;

const SelectButton = styled.Button`
    flex: 0.8;
    width: 85%;
    font-size:15px;
`;

const SelectedBox = styled.View`
    flex-direction: column;
    width: 60%;
    height: 50%;
    /* border: 1px solid #000; */
    align-self: center; 
    align-content: center;
    align-items: center;
    padding: 1% 2%;
    margin: 3% 0;
`;

export {TitleBox, Title, SubTitleBox, SubTitle, TitleInput, SelectButton, SelectedBox};