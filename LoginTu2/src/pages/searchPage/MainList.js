import React, { useState } from 'react';

import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import styled from 'styled-components';
import Row from '../../components/Row';
import ListItem from '../../components/ListItem';
import MovieName from '../../components/MovieName';
import axios from 'axios';
import {AuthContext} from '../../context/Context'

const Thumnail = styled.Image` 
    flex:1;   
    resizeMode: contain;
`;

const ThumnailBox = styled.View`
    align-self: flex-start;
    flex-direction: row;
    margin: 10px;
    width: 150px;
    height: 150px;
    border: 1px solid #000;
    border-radius:3px;
`;

const Input = styled.TextInput`
    flex: 1;
    border: 1px solid #e5e5e5;
    margin-left: 12px;
    padding:0 12px;
`;

const List = styled.TouchableOpacity`
  margin : 20px;
  padding : 5px;
  border : 1px solid #000; 
  border-radius: 10px;
`;

const ListBox1 = styled.View`
  border : 1px solid #000;
  border-radius: 5px;
`;

const ListBox2 = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin : 5px;
`;

const ListContents = styled.View`
  width: 45%;
  margin : 5px;
  justify-content: center;
`;

const ListText = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const ResultText = styled.Text`
  font-size: 30px;
  text-align: center;
  border-bottom-color: #ccc;
  border-bottom-width: 2.5px;
`;

const Test = ({navigation}) => {
  const Auth = React.useContext(AuthContext);

  const [keyword, setKeyword] = React.useState('');
  const [selectedPage, setSelectedPage] = useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [currentedPage, setCurrentedPage] = useState();
  const search = React.useCallback(() => {
    let url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=e2a556345015170826b565c3554ee83a";
    url += '&movieNm=' + keyword;
    setIsLoading(true);
    
    axios.get(url)
    .then(response => {
        setIsLoading(false);
        setList(response.data.movieListResult.movieList);
    })
    .catch(error => alert(error.message));
},[keyword]);

  return (
    <>
    <Row>
      <Input value={keyword} onChangeText={value => setKeyword(value)}/>
      <Button title='검색' onPress={search}/>
    </Row>
    {/* <PageSlider
      selectedPage={selectedPage}
      onSelectedPageChange={setSelectedPage}
      onCurrentPageChange={setCurrentedPage}
    >
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#00ff00'}/>
      ) : (
        list.map(item => (
          // list에서 key는 중복없이 존재해야 함(필수)
          <List key={item.movieCd} onPress={() => {console.log("touch screen")}}>
            <ListItem>
              <MovieName>{ item.movieNm}(title part)</MovieName>
            </ListItem>
            <ListBox2>
              <ThumnailBox>
                <Thumnail source={{uri:Auth.googleInfo.user.photo}}/>
              </ThumnailBox>
              <ListContents>
                <ListText>남은측정일수</ListText>
              </ListContents>
            </ListBox2>
            <ListBox1>             
              <ListContents>
                <ListText>유사도 평균</ListText>
              </ListContents>
              <ListContents>
              <ListText>마지막에 측정한 유사도</ListText>
              </ListContents>              
              <ListContents>
                <ListText>측정시작일수</ListText>
              </ListContents>
              <ListContents>
              <ListText>측정시도일수</ListText>
              </ListContents>              
            </ListBox1>
          </List>     
                    ))
                )}
    </PageSlider> */}
    {isLoading ? (
        <ActivityIndicator size={'large'} color={'#00ff00'}/>
      ) : (
          <Pages
          indicatorColor='#000'
          indicatorOpacity={0.2}
          >
      
        {list.map(item => (
          // list에서 key는 중복없이 존재해야 함(필수)
          <List key={item.movieCd} onPress={() => {navigation.navigate('MainTabNavigator')}}>
            <ListItem>
              <MovieName>{/*item.movieNm*/}(title part)</MovieName>
            </ListItem>
            <ListBox2>
              <ThumnailBox>
                <Thumnail source={{uri:Auth.googleInfo.user.photo}}/>
              </ThumnailBox>
              <ListContents>
                <ListText>남은측정일수{"\n"}</ListText>
                <ResultText>D-7</ResultText>
              </ListContents>
            </ListBox2>
            <ListBox1>
              <ListBox2>
              <ListContents>
                <ListText>평균 유사도{"\n"}</ListText>
                <ResultText>72%</ResultText>
              </ListContents>
              <ListContents>
              <ListText>최신 유사도{"\n"}</ListText>
              <ResultText>92%</ResultText>
              </ListContents>
              </ListBox2>
              <ListBox2>          
              <ListContents>
                <ListText>측정시작일자{"\n"}</ListText>
                <ResultText>20-12-20</ResultText>
              </ListContents>
              <ListContents>
              <ListText>측정 횟수{"\n"}</ListText>
              <ResultText>7번</ResultText>
              </ListContents>  
              </ListBox2>              
            </ListBox1>
          </List>     
        ))} 
        </Pages>
      )}
    </>   
  )}
  

export default Test;
