import React, { useState } from 'react';
import { Text, View, ActivityIndicator, Button, Dimensions, TextInput } from 'react-native';
import styled from 'styled-components';
import axios from 'axios'
import {useNavigation} from '@react-navigation/native'
// import Swiper from 'react-native-web-swiper'
import Swiper from 'react-native-animated-swiper'
import Icon from 'react-native-vector-icons/Ionicons'

import ListItem from '../../components/ListItem';
import ListTitle from '../../components/ListTitle';
import {AuthContext} from '../../context/Context'

import {ButtonTouch, ButtonView} from '../../components/Form'
import {Img, ImgBox, Blank} from '../../components/Images'

const List = styled.TouchableOpacity`
  margin : 5%;
  padding : 2%;
  border : 1px solid #000;
  border-radius: 10px;
  width: 95%;
  height: 85%;
  align-self: center;
`;

const ListBox1 = styled.View`
  border : 1px solid #000;
  border-radius: 5px;
  width: 100%;
  height: 55%;
`;

const ListBox2 = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin : 2%;
  width: 95%;
  height: 30%;
`;

const ListContents = styled.View`
  width: 40%;
  height: 75%;
  margin : 1%;
  justify-content: center;
`;

const listText = Math.round(Dimensions.get('window').width/21)
const ListText = styled.Text`
  font-size: ${listText}px;
  text-align: center;
`;

const resultText = Math.round(Dimensions.get('window').width/22)
const ResultText = styled.Text`
  font-size: ${resultText}px;
  text-align: center;
  border-bottom-color: #ccc;
  border-bottom-width: 2.5px;
`;

const formText = Math.round(Dimensions.get('window').width/24)
const FormText = styled.Text`
  font-size: ${formText}px;
  padding: 0 10% 3% 0;
`;

const MainList = (props) => {
  const Auth = React.useContext(AuthContext);

//   const [keyword, setKeyword] = React.useState('');
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [list, setList] = React.useState([]);
//   const search = React.useCallback(() => {
//     let url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=e2a556345015170826b565c3554ee83a";
//     url += '&movieNm=' + keyword;
//     setIsLoading(true);
    
//     axios.get(url)
//     .then(response => {
//         setIsLoading(false);
//         setList(response.data.movieListResult.movieList);
//     })
//     .catch(error => alert(error.message));
// },[keyword]);

  const BASE_URL = `${Auth.IPaddress}:3100`;
  const emails = Auth.googleInfo.user.email;


  const [keyword, setKeyword] = React.useState('');
  const [selectedPage, setSelectedPage] = useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [currentedPage, setCurrentedPage] = useState();

  React.useEffect(()=>{
    const unsubscribe = props.navigation.addListener('focus', () => {
      setIsLoading(true)
        axios.get(`${BASE_URL}/api/database/mimage/email/${emails}`)
        .then(res=>{
          setList(res.data);
          setIsLoading(false);
        }).catch(err=>err.message);
      },[]);
  return unsubscribe;
  },[]);

  const dateCal =(dates)=> {
    const date1 = new Date(dates);
  // 2020년 7월 3일 
    const now = new Date();
    const date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const elapsedMSec = date2.getTime() - date1.getTime(); // 172800000
    const elapsedDay = (elapsedMSec / 1000 / 60 / 60 / 24 )+ 1; // 2

    return elapsedDay.toFixed()+' 일차';
  }

  return (
    <>
    {/* <View>
      <Button title='검색' onPress={search}/>
    </View> */}
    {isLoading ? (
        <ActivityIndicator size={'large'} color={'#00ff00'}/>
      ) : (
          <Swiper
          dots
          dotsColor="rgba(0, 0, 0, 0.25)"
          dotsColorActive="rgba(0, 0,0, 0.75)"
          dotsBottom={10}
          >      
        {list.map(item => (
          // list에서 key는 중복없이 존재해야 함(필수)
          // <List key={item.movieCd} onPress={() => {navigation.navigate('SubTabNav')}}>
          //   <ListItem>
          //     <ListTitle>{/*item.movieNm*/}(title part)</ListTitle>
          //   </ListItem>
          //   <ListBox2>
          //     <ImgBox>
          //       <Img source={{uri:Auth.googleInfo.user.photo}}/>
          //     </ImgBox>
          //     <ListContents>
          //       <ListText>남은측정일수</ListText>
          //       <ResultText>D-7</ResultText>
          //     </ListContents>
          //   </ListBox2>
          //   <ListBox1>
          //     <Blank/>
          //     <ListBox2>
          //     <ListContents>
          //       <ListText>평균 유사도</ListText>
          //       <ResultText>72%</ResultText>
          //     </ListContents>
          //     <ListContents>
          //     <ListText>최신 유사도</ListText>
          //     <ResultText>92%</ResultText>
          //     </ListContents>
          //     </ListBox2>
          //     <Blank/><Blank/>
          //     <ListBox2>          
          //     <ListContents>
          //       <ListText>측정 시작일</ListText>
          //       <ResultText>20-12-20</ResultText>
          //     </ListContents>
          //     <ListContents>
          //     <ListText>측정 횟수</ListText>
          //     <ResultText>7번</ResultText>
          //     </ListContents>  
          //     </ListBox2>              
          //   </ListBox1>
          // </List>
          <List key={item.id} onPress={() => {props.navigation.navigate('SubList',{
                Mainkey: item.date, Mainpath: item.path
            })}}>
          <ListItem>
            <ListTitle>{item.title}</ListTitle>
          </ListItem>
          <ListBox2>
            <ImgBox>
              <Img source={{uri : `${BASE_URL}/api/image/main/${item.path}`}}/>
            </ImgBox>
            <ListContents>
              <ListText>측정일 수</ListText>
              <ResultText>{dateCal(item.date.substring(0,10))}</ResultText>
            </ListContents>
          </ListBox2>
          <ListBox1>
          <Blank/>
            <ListBox2>
            <ListContents>
              <ListText>평균 유사도</ListText>
              <ResultText>{item.stat.average.toFixed(2)}</ResultText>
            </ListContents>
            <ListContents>
            <ListText>최신 유사도</ListText>
            <ResultText>{item.stat.lately.toFixed(2)}</ResultText>
            </ListContents>
            </ListBox2>
            <Blank/><Blank/>
            <ListBox2>          
            <ListContents>
              <ListText>측정시작일자</ListText>
              <ResultText>{item.date.substring(0,10)}</ResultText>
            </ListContents>
            <ListContents>
            <ListText>측정 횟수</ListText>
            <ResultText>{item.stat.count}</ResultText>
            </ListContents>  
            </ListBox2>             
          </ListBox1>
        </List> 
        ))}

        </Swiper>
      )}
              <ButtonView>
            <ButtonTouch onPress={() => {props.navigation.navigate('MeasureStackNav')}}>
                <FormText><Icon
                          name="arrow-back"
                          size={formText}
                          color="#000"
                          /> form</FormText>
            </ButtonTouch>
        </ButtonView>
    </>   
  )}
  

export default MainList;
