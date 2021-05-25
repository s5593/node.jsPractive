import {} from 'react-native'
import styled from 'styled-components'

const ButtonView = styled.View`
    border-width:0;
    position:absolute;
    bottom:20px;
    right:20px;
    align-self:flex-end;
`;

const ButtonTouch = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: #FAF0E6;
`;

export {ButtonView, ButtonTouch};