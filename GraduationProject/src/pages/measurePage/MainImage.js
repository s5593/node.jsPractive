import React from 'react';
import  {ActivityIndicator,View,TouchableOpacity,ScrollView} from 'react-native'
import styled from 'styled-components/native';
import ImagePicker from 'react-native-image-picker';
import {AuthContext} from '../../context/Context'


// axios conntion and image upload
const options = {
    title: '이미지를 선택해주세요',
    customButtons: [{ name: 'fd', title: '페이스북 사진첩에서 선택하기'}],
    storageOptions: {
      skipBackup: true,
      path: 'image',
    }
  };
  const Title = styled.Text`
  font-size : 20px;
  color : #ffffff;
  background-color : #444444;
`
  const Contents = styled.ScrollView`
  flex : 1;
  `
  const Container = styled.SafeAreaView`
  justify-content: center;
  flex : 1;
  `
  const Button = styled.Button`
  width:150px;
  margin-bottom: 12px;
  margin-top : 12px;
  `;
  const Image = styled.Image`
    width: 150px;
    height: 150px;
    margin : 12px 0;
  `;
  const Input = styled.TextInput`
    width: 50%;
    font-size: 16px;
    padding: 5px;
    margin : 12px;
    border: 1px solid #e5e5e5;
  `;
  
  const imagelist = [{
    path : 'iu.jpg'
  },{
    path : 'photo_1612510153388_Screenshot_20210205-162755_SamsungInternet.jpg'
  },{
    path : 'photo_1612510165349_Screenshot_20210205-162828_SamsungInternet.jpg'
  },{
    path : 'photo_1612603409501_Screenshot_20210205-020011_SamsungInternet.jpg'
  },{
    path : 'photo_1612630513256_Screenshot_20210206-181533_SamsungInternet.jpg'
  },{
    path : 'photo_1612603447408_Screenshot_20210206-181452_SamsungInternet.jpg'
  },
];

function Component(props) {
  const Auth = React.useContext(AuthContext);
  const BASE_URL = `${Auth.IPaddress}:3100`;
  const emails = Auth.googleInfo.user.email;
  
    const [title, setTitle] = React.useState('');
    
    const [url, setUrl] = React.useState(`${BASE_URL}/api/image/main/iu.jpg`); 
    const [path, setPath] = React.useState(`iu.jpg`);   
    const [photo, setPhoto] = React.useState();

    const createData = (item) => {
      const data = {
        name: item.fileName,
        type: item.type,
        uri:
          Platform.OS === 'android' ? item.uri : item.uri.replace('file://', ''),
        tail : 'Main',
      }
      return data;
    };

    
    return (
        <Container>
          <Contents>
            {false ? (<ActivityIndicator size="large" color="#0000ff"/>) : (
              <ScrollView horizontal={true} style={{}}>
              {imagelist.map((item)=>(
                <TouchableOpacity onPress={()=>{setUrl(`${BASE_URL}/api/image/main/${item.path}`);setPath(item.path)}}>{url && (<Image source={{ uri: `${BASE_URL}/api/image/main/${item.path}`}} /> )}</TouchableOpacity>))}
            </ScrollView>
            )}

        <View style={{ 'alignItems': 'center' }} >
          {url && (<Image source={{ uri: url}} /> )}

          <Button title='이미지 선택' onPress={() => {
          ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);
            if (response.didCancel){
              console.warn('캔슬');
            }else if (response.error){
              console.warn(response.error);
              alert(response.error);
            }else if (response.customButton){
              console.warn(response.customButton);
              alert(response.customButton);
            }else {
              if(response.uri){
                setPhoto(response);
                setUrl("file://"+response.path);
                }
            }          
            });
          }}/>

            <Input placeholder='Title insert ~!'
                value={title}
                onChangeText={value => setTitle( value )}/>
                            
            <Button title='다음' 
            onPress={() => {
              url.includes('file') ? 
                props.navigation.navigate('SubImage',{Main_img : createData(photo), title : title, email : emails,type : 'upload'})
                 : props.navigation.navigate('SubImage',{Main_img : path ,title : title, email : emails,type : 'select'})
            }}/>

            </View>
            </Contents>
        </Container>
    )
}


export default Component;