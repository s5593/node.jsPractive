import {} from 'react-native'
import styled from 'styled-components'

const MainBox = styled.View`
    border: 1px solid #800000;
    width: 100%;
    height: 30%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

const Img = styled.Image` 
    flex:1;   
    resizeMode: contain;
`;

const ImgBox = styled.View`
    align-self: flex-start;
    margin: 3%;
    width: 40%;
    height: 80%;
    border: 1px solid #000;
    border-radius:3px;
`;

const InfoBox = styled.View`
    border: 1px solid #000;
    margin: 3%;
    width: 40%;
    height: 80%;
    border-radius:3px;
`;

const Blank = styled.View`
  height: 4%;
`;

export {MainBox, Img, ImgBox, InfoBox, Blank};