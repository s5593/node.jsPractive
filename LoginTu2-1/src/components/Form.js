import {Dimensions} from 'react-native'
import styled from 'styled-components'

const ButtonView = styled.View`
    border-width:0;
    position:absolute;
    bottom:28px;
    right:20px;
    align-self:flex-end;
`;

const ButtonTouch = styled.TouchableOpacity`
    width: 130px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: #1E90FF;
`;

const listText = Math.round(Dimensions.get('window').width/21)
const ListText = styled.Text`
  font-size: ${listText}px;
  text-align: center;
`;

const resultText = Math.round(Dimensions.get('window').width/22)
const ResultText = styled.Text`
  font-size: ${resultText}px;
  text-align: center;
  border-bottom-color: #ccc;
  border-bottom-width: 2.5px;
`;

export {ButtonView, ButtonTouch};