import React from 'react'
import {Text, Dimensions} from 'react-native'
import styled from 'styled-components'
import ListItem from '../../components/ListItem'
import ListTitle from '../../components/ListTitle'
import {Img, MainBox} from '../../components/Images'

const InfoBox = styled.View`
    position: relative;
    border: 1px solid #000;
    margin: 3%;
    width: 20%;
    height: 40%;
    border-radius:3px;
`;

const selectBox = Math.round(Dimensions.get('window').height/3)
const SelectBox = styled(MainBox)`
    position: relative;
    margin: 5%;
    border: 1px solid #800000;
    width: 90%;
    height: ${selectBox}px;
    flex-direction: column;
    align-items: center;
`;


const Select = ({navigation}) => {
    return(
        <>
            <ListItem onPress={() => navigation.navigate('MeasureNav')}>
                <SelectBox>
                    <Img source={require('../../assets/newImage.png')}/>
                </SelectBox>
                <InfoBox>
                    <ListTitle>새로운 표정 측정</ListTitle>
                </InfoBox>
            </ListItem>
            <ListItem onPress={() => navigation.navigate('SelectInMainList')}>
            <SelectBox>
                    <Img source={require('../../assets/existImage.png')}/>
                </SelectBox>
                <InfoBox>
                    <ListTitle>기존 표정 측정</ListTitle>
                </InfoBox>
            </ListItem>
        </>
    )
}

export default Select;