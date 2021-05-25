import React, {Component} from 'react'
import { View, Text, Dimensions, ActivityIndicator } from 'react-native'
import styled from 'styled-components'
import axios from 'axios'

import {AuthContext} from '../../context/Context'
import {Img, ImgBox, InfoBox, MainBox} from '../../components/Images'

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
const subTitleText = Math.round(Dimensions.get('window').width/17)
const SubTitleText = styled.Text`
    font-size: ${subTitleText}px;
    text-align: left;
`;

const SubDate = styled.View`
    height: 90%;
    width: 16%;
    justify-content: center;
`;
const subDateText = Math.round(Dimensions.get('window').width/30)
const SubDateText = styled.Text`
    font-size: ${subDateText}px;
    text-align: center;
    color: #B3B3B3;
`;

const SubList = ({route, navigation}) => {
    const {Mainkey, Mainpath} = route.params;

    const Auth = React.useContext(AuthContext);
    const BASE_URL = `${Auth.IPaddress}:3100`;
    const emails = Auth.googleInfo.user.email;
    // console.log(Auth.Mainkey);
    // console.log(Auth.mainPath);
    // const {Mainkey, Mainpath} = route.params;

    const [url, setUrl] = React.useState();
    const [list, setList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(()=>{
        // console.log(Auth.subKey);
        const unsubscribe = navigation.addListener('focus', () => {
            console.log(Mainkey+' :: 1')
            setIsLoading(true);
            console.log(Mainkey+' :: 2')
            axios.get(`${BASE_URL}/api/database/simage/fk/${Mainkey}`)
            .then(res=>{
              console.log(res.data);
              setList(res.data);
              console.log(Mainkey+' :: 3')
              setIsLoading(false);
            }).catch(err=>err.message);
        });
      // props.route.params.path
      return unsubscribe;
    });
    return(
        <View>
            <MainBox>
                <ImgBox>
                    <Img source={{uri : `${BASE_URL}/api/image/main/${Mainpath}`}}/>
                </ImgBox>
                <InfoBox>
                    
                </InfoBox>
            </MainBox>
            <ListBox>
                {isLoading ? (
                        <ActivityIndicator size={'large'} color={'#00ff00'}/>
                 ) : (
                list.map(item =>(
                     <List key={item.date} onPress={() =>{
                        Auth.setSubKey(item.date);
                        Auth.setSubPath(item.path);
                        navigation.navigate('Compare');
                     }}>
                     <SubImg>
                         <Img source={{uri:`${BASE_URL}/api/image/sub/${Mainpath}`}} />
                     </SubImg>
                     <SubTitle>
                         <SubTitleText>{item.title}</SubTitleText>
                     </SubTitle>
                     <SubDate>
                         <SubDateText>
                             {item.date}
                         </SubDateText>
                     </SubDate>
                 </List>
                ))
             )}
                    <List  onPress={() =>{
                        navigation.navigate('Compare');
                     }}>
                     <SubImg>
                     </SubImg>
                     <SubTitle>
                         <SubTitleText>{Mainkey}</SubTitleText>
                     </SubTitle>
                     <SubDate>
                         <SubDateText>
                         </SubDateText>
                     </SubDate>
                 </List>
                 <List  onPress={() =>{
                        navigation.navigate('Compare');
                     }}>
                     <SubImg>
                     </SubImg>
                     <SubTitle>
                         <SubTitleText>{Mainpath}</SubTitleText>
                     </SubTitle>
                     <SubDate>
                         <SubDateText>
                         </SubDateText>
                     </SubDate>
                 </List>
            </ListBox>
               
        </View>
    )
}

export default SubList;