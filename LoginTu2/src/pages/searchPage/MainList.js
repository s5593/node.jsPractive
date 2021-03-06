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
    width: 40%;
    height: 90%;
    border: 1px solid #000;
    border-radius:3px;
    justify-content: center;
`;

const Input = styled.TextInput`
    flex: 1;
    border: 1px solid #e5e5e5;
    margin-left: 12px;
    padding:0 12px;
`;

const List = styled.TouchableOpacity`
  margin : 5%;
  padding : 2%;
  border : 1px solid #000;
  border-radius: 10px;
  width: 90%;
  height: 75%;
`;

const ListBox1 = styled.View`
  border : 1px solid #000;
  border-radius: 5px;
  width: 100%;
  height:55%;
`;

const ListBox2 = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin : 3%;
  width: 95%;
  height: 30%;
`;

const ListContents = styled.View`
  width: 40%;
  height: 75%;
  margin : 5px;
  justify-content: center;
`;

const Blank = styled.View`
  height: 4%;
`;

const ListText = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const ResultText = styled.Text`
  font-size: 20px;
  text-align: center;
  border-bottom-color: #ccc;
  border-bottom-width: 2.5px;
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

const MainList = ({navigation}) => {
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
          indicatorOpacity={0.1}
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
              <Blank/>
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
              <Blank/><Blank/>
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
              <ButtonView>
            <ButtonTouch onPress={() => {navigation.navigate('Select')}}>
                <Text>form</Text>
            </ButtonTouch>
        </ButtonView>
    </>   
  )}
  

export default MainList;
