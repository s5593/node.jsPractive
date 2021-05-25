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

const InfoButton = styled.TouchableOpacity`
    align-self: center;
    align-items: center;
    margin: 3%;
    width: 40%;
    height: 40%;
    border: 1px solid #000;
    border-radius:3px;
`;

const infoTextText = Math.round(Dimensions.get('window').width/17)
const InfoText = styled.Text`
    font-size: ${infoTextText}px;
    text-align: center;
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

const SubList = (props,{route, navigation}) => {
    const {Mainkey, Mainpath} = props.route.params;

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
        const unsubscribe = props.navigation.addListener('focus', () => {
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
                <InfoButton onPress={() => props.navigation.navigate('Stat', {Mainkey: Mainkey})}>
                    <InfoText>
                        MainList{'\n'}
                        전체 통계 확인
                    </InfoText>
                </InfoButton>
            </MainBox>
            <ListBox>
                {isLoading ? (
                        <ActivityIndicator size={'large'} color={'#00ff00'}/>
                 ) : (
                list.map(item =>(
                    <List key={item.date.toString()} onPress={() =>{
                        props.navigation.navigate('Compare',{Mainkey:Mainkey, Subkey: item.date});
                     }}>
                     <SubImg>
                     <Img source={{uri:`${BASE_URL}/api/image/sub/${item.path}`}}/>
                     </SubImg>
                     <SubTitle>
                         <SubTitleText>{item.title}</SubTitleText>
                     </SubTitle>
                     <SubDate>
                         <SubDateText>
                             {item.date.split('-')[0]}{'\n'}
                             {item.date.split('-')[1]}/{item.date.split('-')[2].substring(0,2)}{'\n'}
                             {item.date.substring(11,16)}
                         </SubDateText>
                     </SubDate>
                 </List>
                ))
             )}
            </ListBox>
               
        </View>
    )
}

export default SubList;