import styled from 'styled-components';
import {Dimensions} from 'react-native';

const text = Math.round(Dimensions.get('window').height/33)
export default styled.Text`
    padding-left: 2%;
    font-size: ${text}px;
    font-weight: bold;
`;