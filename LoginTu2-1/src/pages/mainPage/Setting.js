import React from 'react'
import { View, Text, Image, Button, Dimensions } from 'react-native'
import {AuthContext} from '../../context/Context'
import styled from 'styled-components/native'

import {Img, ImgBox} from '../../components/Images'

const MyPageBox = styled.View`
    margin: 0 5%
    align-content: center;
    /* border: 1px solid #000; */
`;

const listText = Math.round(Dimensions.get('window').width/25)
const ListText = styled.Text`
  font-size: ${listText}px;
  margin: 0 0 3% 2%;
`;

const ProfileBox = styled.View`
    flex-direction: column;
    width: 100%;
    height: 42%;
    /* border: 1px solid #000; */
    border-bottom-color: #d0d0d0;
    border-bottom-width: 1px;
    align-self: center;
    align-content: center;
    align-items: center;
    padding: 1% 2%;
    margin: 3% 0;
`;
const ProfileImgBox = styled(ImgBox)`
    align-self: center;
    margin: 0;
    width: 25%;
    height: 70%;
    border-radius:55px;
    border: 0;
`;

const ProfileImg = styled(Img)`
    border-radius:50px;
    /* border: 1px solid #000; */
    resizeMode: stretch;

`;

const prifileText = Math.round(Dimensions.get('window').width/22)
const PrifileText = styled.Text`
    font-size: ${prifileText}px;
    margin: 3% 0 0 0;
`;

const LogoutButton = styled.Button`
    font-size:15px;
    border-radius: 5px;
`;



const Setting = () => {
    const Auth = React.useContext(AuthContext);
    
    return (
        <MyPageBox>
            <ProfileBox>
                <ProfileImgBox><ProfileImg source={{uri: Auth.googleInfo.user.photo}}/></ProfileImgBox>
                <PrifileText>{Auth.googleInfo.user.name}님 안녕하세요.</PrifileText>
            </ProfileBox>
            <View>
                <ListText>{Auth.googleInfo.user.email}</ListText>
            </View>
            <LogoutButton title="Sign Out" onPress={() => Auth.signOutGoogle()}/>
        </MyPageBox>
    );
}

export default Setting;