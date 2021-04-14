import React, {Component} from 'react'
import { View, Text, Dimensions } from 'react-native'
import styled from 'styled-components'
import {AuthContext} from '../../context/Context'

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

const ListBox = styled.ScrollView`
    border: 1px solid #000080;
    width: 100%;
    height: 70%;
    align-content: center;
`;

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

const SubList = ({navigation}) => {
    const Auth = React.useContext(AuthContext);

    return(
        <View>
            <MainBox>
                <ImgBox>
                    <Img source={{uri:Auth.googleInfo.user.photo}}/>
                </ImgBox>
                <InfoBox>

                </InfoBox>
            </MainBox>
            <ListBox>
                {/* <Content>
                    <List>
                        <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri:Auth.googleInfo.user.photo }} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                        </ListItem>
                    </List>
                </Content> */}
                <List onPress={() => navigation.navigate('Compare')}>
                    <SubImg>
                        <Img source={{uri:Auth.googleInfo.user.photo}}/>
                    </SubImg>
                    <SubTitle>
                        <SubTitleText>서브 이미지1</SubTitleText>
                    </SubTitle>
                    <SubDate>
                        <SubDateText>
                            2020
                            06/06
                        </SubDateText>
                    </SubDate>
                </List>
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
                <List onPress={() => console.log(1)}>
                    <SubImg>
                        <Img source={{uri:Auth.googleInfo.user.photo}}/>
                    </SubImg>
                    <SubTitle>
                        <SubTitleText>서브 이미지3</SubTitleText>
                    </SubTitle>
                    <SubDate>
                        <SubDateText>
                            2020
                            12/06
                        </SubDateText>
                    </SubDate>
                </List>
                <List onPress={() => navigation.navigate('Compare')}>
                    <SubImg>
                        <Img source={{uri:Auth.googleInfo.user.photo}}/>
                    </SubImg>
                    <SubTitle>
                        <SubTitleText>서브 이미지1</SubTitleText>
                    </SubTitle>
                    <SubDate>
                        <SubDateText>
                            2020
                            06/06
                        </SubDateText>
                    </SubDate>
                </List>
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
                <List onPress={() => console.log(1)}>
                    <SubImg>
                        <Img source={{uri:Auth.googleInfo.user.photo}}/>
                    </SubImg>
                    <SubTitle>
                        <SubTitleText>서브 이미지3</SubTitleText>
                    </SubTitle>
                    <SubDate>
                        <SubDateText>
                            2020
                            12/06
                        </SubDateText>
                    </SubDate>
                </List>
            </ListBox>
        </View>
    )
}

export default SubList;