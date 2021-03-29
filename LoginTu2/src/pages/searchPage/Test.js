import React, { useState } from 'react';

import PageSlider from '@pietile-native-kit/page-slider';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import styled from 'styled-components';
import {TestPage} from './TestPage'
import Title from '../../components/Title';
import Row from '../../components/Row';
import ListItem from '../../components/ListItem';
import MovieName from '../../components/MovieName';
import axios from 'axios';

// const {width} = Dimensions.get('window');

// const IMAGES = {
//   image1: require('../../assets/images/1.jpeg'),
//   image2: require('../../assets/images/2.jpeg'),
//   image3: require('../../assets/images/3.jpeg'),
//   image4: require('../../assets/images/4.jpeg'),
//   image5: require('../../assets/images/5.jpeg'),
//   image6: require('../../assets/images/6.jpeg'),
//   image7: require('../../assets/images/7.jpeg'),
//   image8: require('./TestPage'),
// };

// const Test = () => {
//   const carouselRef = useRef();
//   const [images, setImages] = useState([
//     {id: '1', image: IMAGES.image1},
//     {id: '2', image: IMAGES.image2},
//     {id: '3', image: IMAGES.image3},
//     {id: '4', image: IMAGES.image4},
//     {id: '5', image: IMAGES.image5},
//     {id: '6', image: IMAGES.image6},
//     {id: '7', image: IMAGES.image7},
//     {id: '8', page: IMAGES.image8},
//   ]);
//   const [indexSelected, setIndexSelected] = useState(0);

//   const onSelect = (indexSelected) => {
//     setIndexSelected(indexSelected);
//   };

//   return (
//     <View style={{flex: 1}}>
//       {/* <Pagination
//         inactiveDotColor="gray"
//         dotColor={'rgba(25, 25, 25, 0.92)'}
//         activeDotIndex={indexSelected}
//         dotsLength={images.length}
//         animatedDuration={150}
//         inactiveDotScale={1}
//       /> */}
//       {/* Carousel View */}
//       <View style={{flex: 3/7}}>
//         <Carousel
//           ref={carouselRef}
//           layout="default"
//           data={TestPage}
//           sliderWidth={width}
//           itemWidth={width}
//           onSnapToItem={(index) => onSelect(index)}
//           renderItem={({item, index}) => (
//             <Image
//               key={index}
//               style={{width: '100%', height: '100%'}}
//               resizeMode="contain"
//               source={item.image}
//             />
//           )}
//         />
//       </View>
//       <View
//         style={{
//           marginTop: 20,
//           paddingHorizontal: 32,
//           alignSelf: 'flex-end',
//         }}
//       >
//         <Text style={{color: 'black', fontSize: 22}}>
//           {indexSelected + 1}/{images.length}
//         </Text>
//       </View>
//     </View>
//   );
// };

const Input = styled.TextInput`
    flex: 1;
    border: 1px solid #e5e5e5;
    margin-left: 12px;
    padding:0 12px;
`;

function Test(props) {
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
    <PageSlider
      style={styles.pageSlider}
      selectedPage={selectedPage}
      onSelectedPageChange={setSelectedPage}
      onCurrentPageChange={setCurrentedPage}
    >
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#00ff00'}/>
      ) : (
        list.map(item => (
          <ListItem key={item.movieCd} onPress={() => {
            props.navigation.navigate('MovieDetail', {movieCd: item.movieCd});
          }}>
            <MovieName>{ item.movieNm }</MovieName>
          </ListItem>
                    ))
                )}
    </PageSlider>
    </>
  );
}

export default Test;

const styles = StyleSheet.create({
  pageSlider: {
    width: '100%',
  },
  page: {
    alignItems: 'center',
    height: 128,
    justifyContent: 'center',
    padding: 16,
  },
});