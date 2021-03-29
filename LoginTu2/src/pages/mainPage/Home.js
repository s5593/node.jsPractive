import React from 'react'
import {SafeAreaView, Text, View, ScrollView} from 'react-native'
import {AuthContext} from '../../context/Context'
import DrawerNavigator from '../../navigator/DrawerNavigator'
import {useNavigation} from '@react-navigation/native'
import {Picker} from '@react-native-community/picker'
import styled from 'styled-components'

const Content = styled.SafeAreaView`
    flex:1;
`;

const Sort = styled.View`
    backgroundColor: #FAFAD2;
    margin-bottom: 10px;
`;

const List = styled.ScrollView`

`;

const ListItem = styled.TouchableOpacity`
    flex-direction : row;
    align-items : center;
    align-self: center;
    border : 2px solid #8B008B;
    width : 95%;
    margin : 0px 5px 20px 5px;
    backgroundColor: #FFE4E1;
`

const Tag = styled.Text`
    font-size: 30px;
    border: 1px solid;
    padding: 20px;
    text-align:left;
`;

const ButtonView = styled.View`
    borderWidth:0;
    position:absolute;
    bottom:20px;
    right:20px;
    alignSelf:flex-end;
`;

const ButtonTouch = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    justifyContent: center;
    alignItems: center;
    borderRadius: 100px;
    backgroundColor: #FAF0E6;
`;


const Home = () => {
    const [selectedValue, setSelectedValue] = React.useState("14");
    const Auth = React.useContext(AuthContext);
    const navigation = useNavigation(DrawerNavigator);

    return (
        <>
        <Content>
            <Sort>
                <Picker selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)}>
                    <Picker.Item label="날짜" value="1" />
                    <Picker.Item label="이름" value="2" />
                </Picker>
            </Sort>
            <List>
                <ListItem onPress={() => {}}>
                            <Tag>
                                리스트 1
                            </Tag>
                </ListItem>
                <ListItem onPress={() => {}}>
                            <Tag>
                                리스트 1
                            </Tag>
                </ListItem>
                <ListItem onPress={() => {}}>
                            <Tag>
                                리스트 1
                            </Tag>
                </ListItem>
                <ListItem onPress={() => {}}>
                            <Tag>
                                리스트 1
                            </Tag>
                </ListItem>
                <ListItem onPress={() => {}}>
                            <Tag>
                                리스트 1
                            </Tag>
                </ListItem>
                <ListItem onPress={() => {}}>
                            <Tag>
                                리스트 1
                            </Tag>
                </ListItem>
                <ListItem onPress={() => {}}>
                            <Tag>
                                리스트 1
                            </Tag>
                </ListItem>
                <ListItem onPress={() => {}}>
                            <Tag>
                                리스트 1
                            </Tag>
                </ListItem>
                <ListItem onPress={() => {}}>
                            <Tag>
                                리스트 1
                            </Tag>
                </ListItem>
                <ListItem onPress={() => {}}>
                            <Tag>
                                리스트 1
                            </Tag>
                </ListItem>
                <ListItem onPress={() => {}}>
                            <Tag>
                                리스트 1
                            </Tag>
                </ListItem>
            </List>
        </Content>
        <ButtonView>
            <ButtonTouch onPress={() => {}}>
                <Text>from</Text>
            </ButtonTouch>
        </ButtonView>
        </>
    );
}

export default Home;