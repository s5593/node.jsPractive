import React from 'react';
import  {ActivityIndicator,View,Alert, Dimensions} from 'react-native'
import styled from 'styled-components/native';
import ImagePicker from 'react-native-image-picker';

import {AuthContext} from '../../context/Context'
import {TitleBox, Title, SubTitleBox, SubTitle, TitleInput, SelectButton, SelectedBox} from '../../components/Measure'


const SubInput = styled(TitleInput)`
  margin: 3%;
  width: 50%;
`;
// axios conntion and image upload
const options = {
    title: '이미지를 선택해주세요',
    customButtons: [{ name: 'fd', title: '페이스북 사진첩에서 선택하기'}],
    storageOptions: {
      skipBackup: true,
      path: 'image',
    }
  };
/////////////////////////////////////////////////
//   const Title = styled.Text`
//   font-size : 20px;
//   color : #ffffff;
//   background-color : #444444;
// `
// const subTitletext = Math.round(Dimensions.get('window').width/30)
// const SubTitle = styled(Title)`

// `;
  const Contents = styled.ScrollView`
  flex : 1;
  `
  const Container = styled.SafeAreaView`
  flex : 1;
  `

  const Button = styled.Button`
  width:150px;
  margin-bottom: 12px;
  `;

  const Image = styled.Image`
    width: 150px;
    height: 150px;
    margin : 12px 0;
  `;

  const Input = styled.TextInput`
    width: 50%;
    font-size: 16px;
    padding: 4px;
    border: 1px solid #e5e5e5;
  `;

function Component(props) {
  const Auth = React.useContext(AuthContext);
  const BASE_URL = `${Auth.IPaddress}:3100`;
  const emails = Auth.googleInfo.user.email;
  
  const COMMAND_TYPE = props.route.params.type;
    // console.log(COMMAND_TYPE);
    // console.log(props.route.params.Main_img)

    const [title, setTitle] = React.useState('');
    const [url, setUrl] = React.useState(`${BASE_URL}/api/image/main/iu.jpg`);  
    const [photo, setPhoto] = React.useState();
    const [uploading, setUploading] = React.useState(false);

    const createFormData = (Main, Sub, body) => {
      const data = new FormData();
      data.append('Main', Main);
      data.append('Sub', {
        name: Sub.fileName,
        type: Sub.type,
        uri:
          Platform.OS === 'android' ? Sub.uri : Sub.uri.replace('file://', ''),
        tail : 'sub',
      });
      data.append('email',body.userEmail);
      data.append('Maintitle',body.Maintitle);
      data.append('Subtitle',body.Subtitle);
      return data;
    };

    const goAlert = () =>
    Alert.alert(                    // 말그대로 Alert를 띄운다
     "타이틀을 입력해주세요",                    // 첫번째 text: 타이틀 제목
     "input title !",                         // 두번째 text: 그 밑에 작은 제목
     [                              // 버튼 배열
       {
         text: "닫기",                              // 버튼 제목
         onPress: () => console.log(""),     //onPress 이벤트시 콘솔창에 로그를 찍는다
         style: "cancel"
       }
     ],
     { cancelable: false }
   );

    async function handleUploadPhoto(){
      return new Promise((resolve, reject)=>{
        const server = COMMAND_TYPE === 'select' ? `${BASE_URL}/api/image/select/multi`: (COMMAND_TYPE === 'upload' ? `${BASE_URL}/api/image/upload/multi` :  `${BASE_URL}/api/image/compare/multi`);
        fetch(server, {
        method: "POST",
        body: createFormData(props.route.params.Main_img, photo, { userEmail: props.route.params.email, Maintitle: props.route.params.title, Subtitle : title})
         })
        .then(response => response.json())
        .then(response => {
          // console.log("upload success " + response);
          resolve(response);
        })
        .catch(error => {
          reject("Upload failed!");
        });
      })
    };

    return (
        <Container>
          <TitleBox>
              <SubTitle>Select in Gallery or Take a Picture</SubTitle>
            </TitleBox>
          <Contents>
        {uploading ? (<View style={{alignItems : 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>) : (
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

            <SubInput placeholder='Title'
                value={title}
                onChangeText={value => setTitle( value )}/>   
                
            <Button title='저장' onPress={() => {
              if(!title){
                goAlert();
                return;
              }
              setUploading(true);
              handleUploadPhoto()
              .then(response=> {
                // reasponse => {mainkey, subkey}
                props.navigation.navigate('ResultCompare',{type : COMMAND_TYPE,...response});
                console.log('성공적으로 이미지 저장 및 데이터 저장');
              })
              .catch(err=>{
                alert('이미지가 선택 되지 않았습니다.');
                setUploading(false);
              });
            }}/>
            </View>) }
            </Contents>
        </Container>
    )
}

export default Component;