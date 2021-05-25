
import React from 'react'
import axios from 'axios';
import {Text,Button,TextInput,Row} from 'react-native';

var authNum=0; //노드측으로부터 받을 인증번호
var email="" //사용자의 입력이메일
// function tick(second)
// {
//   const [sec,setSec] = React.useState(second);
//   //var n = 1;
//   setTimeout(() => {
//     if(sec>0){
//         setSec(sec-1);
//     }else if(sec ==0){
//         authNum = 0;
//     }
//   }, 1000);

//   return ( 
//     <>
//         <Text>인증시간={parseInt(sec/60)}:{sec%(60)}</Text>
//         <Text>인증시간={(sec>0)?   parseInt(sec/60)+":"+ sec%(60) :  "종료"       }</Text>
//     </>
//   );

// }
function reSendEmail(inputEmail){
  var url = 'http:/172.16.110.242:3100/sendemail';
  axios.post(url,{email : "daesoo888@gmail.com"})
  .then(res => {
    authNum = res.data.authNum; //nodejs 측으로 부터 받은 인증번호
    console.log("바뀐 어스넘:"+authNum);
    //inputEmail
  })
  
}

function Components(props) {
    const [inputAuthNum, setInputAuthNum] = React.useState();
    const [sec,setSec] = React.useState(20);
    if(authNum ==0){
        authNum=props.route.params.authNum;
    }
    email=props.route.params.email;
    //alert(email);
    console.log("최종:"+authNum)

    setTimeout(() => {
        if(sec>0){
            setSec(sec-1);
        }else if(sec ==0){
            authNum = 0;
        }
      }, 1000);
    //alert(props.route.params.authNum);//넘겨받은 인증번호출력임
    return (
        <>
             <TextInput placeholder="인증번호 입력"
               value={inputAuthNum}
               onChangeText={value => setInputAuthNum( value )}></TextInput>
            <Button title='인증번호 확인' onPress={() => {
                //console.log('dkdkdk');
                if(authNum != inputAuthNum   || authNum ==0){
                    alert("인증실패");
                    console.log(authNum+" : "+inputAuthNum);
                }else if(authNum == inputAuthNum){
                    alert("인증성공");
                    console.log(authNum+" : "+inputAuthNum);
                }
            }}/>  
                <Text>인증시간={(sec>0)?   parseInt(sec/60)+":"+ sec%(60) :  "종료"       }</Text>
                {/* {tick(sec)} */}
                <Button title="재전송"  disabled={sec>0?true:false}   onPress={()=>{
                    setSec(20);
                    reSendEmail(email);
                }} ></Button>
                  
        </>
    )

}


export default Components;