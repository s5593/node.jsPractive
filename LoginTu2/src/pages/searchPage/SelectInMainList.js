import React from 'react'
import {Text, View} from 'react-native'
import styled from 'styled-components'
import ListItem from '../../components/ListItem'
import MovieName from '../../components/MovieName'
import {AuthContext} from '../../context/Context'


const List = styled.TouchableOpacity`
    flex-direction: row;
    width: 98%;
    height: 85px;
    margin: 7px 0 7px 7px;
    padding: 1px;
    border-bottom-width: 2px;
    border-bottom-color: #e5e5e5;
    align-self: center;
`;

const SubImg = styled.View`
    width: 19%;
    height: 90%;
    border-radius:3px;
    border: 1px solid #000080;
`;

const SubTitle = styled.View`
    height: 90%;
    width: 63%;
    margin: 0px 5px;
    justify-content: center;
`;

const SubTitleText = styled.Text`
    font-size: 25px;
    text-align: left;
`;

const SubDate = styled.View`
    height: 90%;
    width: 16%;
    justify-content: center;
`;

const SubDateText = styled.Text`
    font-size: 15px;
    text-align: center;
    color: #B3B3B3;
`;

const Img = styled.Image` 
    flex:1;   
    resizeMode: contain;
`;

const SelectInMainList = () => {
    const Auth = React.useContext(AuthContext);

    return(
        <>
            <List onPress={() => console.log(1)}>
                <SubImg>
                <Img source={{uri:Auth.googleInfo.user.photo}}/>
                </SubImg>
                <SubTitle>
                    <SubTitleText>서브 이미지2</SubTitleText>
                </SubTitle>
                <SubDate>
                    <SubDateText>
                        2020
                        07/06
                    </SubDateText>
                </SubDate>
            </List>
        </>
    )
}

export default SelectInMainList;