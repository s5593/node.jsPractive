
import { withContext } from 'context-q';
import React,{useState,useEffect} from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import {Text,View,Button } from 'react-native';
import styled from 'styled-components/native'


GoogleSignin.configure({
    webClientId : '690411860703-7pdv7tv0r9ugmqvh5fv6j9f0qaucg5c9.apps.googleusercontent.com' ,
    offlineAccess: true,
  })

  
function Components(props) {
    const [googleInfo, setGoogleInfo] = React.useState();
    const [loaded , setLoaded] = React.useState(false);


     //==============================================================
   signIn = async()=>{
    try{
     await GoogleSignin.hasPlayServices()
     const userInfo = await GoogleSignin.signIn();
     
     setGoogleInfo(userInfo);
     setLoaded(true);
     
    }catch(error){
      console.log(error.message);
    }
  }
  //==============================================================

            return (
                <View>
                    <GoogleSigninButton onPress={this.signIn}/>
                    {loaded ?  
                    <View>
                        <Text>{googleInfo.user.name}</Text>
                        <Text>{googleInfo.user.email}</Text>
                        {/* <Image source={{uri:googleInfo.user.photo}}/> */}
                        <Text>tttt</Text>
                    </View>  :

                    <Text>Not login</Text>
                    }
                    <Text>dkd</Text>

                    <Button title='데이터 베이스 연동' onPress={()=>{
                            props.navigation.navigate('Database');
                        }}/>

                        <Text>안녕</Text>
                        <Button title='axios conntions' onPress={()=>{
                        }}/>

                </View>

     ); 
                     
}


Components = withContext(Components);
export default Components;