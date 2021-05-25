import React from 'react'
import {
    GoogleSignin,
    statusCodes,
  } from '@react-native-community/google-signin';


const defaultContext = {
    googleInfo: undefined,
    setGoogleInfo: undefined,
    title: undefined,
    setTitle: undefined,
    logIn: undefined,
    setLogIn: undefined,

    IPaddress : undefined,
    mainKey : undefined,
    setMainKey : undefined,
    mainPath : undefined,
    setMainPath : undefined,
    subKey : undefined,
    setSubKey : undefined,
    subPath : undefined,
    setSubPath : undefined,

    signInGoogle: async () => {},
    signOutGoogle: async () => {},
};


/**
 * googleInfo: 구글 로그인 정보
 * setGoogleInfo: 구글 로그인 정보 입력
 * logIn: 로그인 정보
 * setLogIn: 로그인 정보 입력
 * signIn: 로그인
 * signOut: 로그아웃
 * title: 동적 변경 해더 타이틀
 * setTitle: 동적 변경 해더 타이틀 입력
 * 
 * 로그인 후 로그아웃을 안해서 정보가 남아있을 경우
 * 자동으로 로그인 실행
 */
const AuthContext = React.createContext(defaultContext);

const ContextProvider = ({children}) => {
  /**
   * 로그인 정보를 저장하는 변수
   */
  const [googleInfo, setGoogleInfo] = React.useState();
  const [logIn, setLogIn] = React.useState();
  const [title, setTitle] = React.useState();
  const [IPaddress, setIP] = React.useState('http://172.16.104.184');
  const [mainKey, setMainKey] = React.useState('');
  const [mainPath, setMainPath] = React.useState('');
  const [subKey, setSubKey] = React.useState('');
  const [subPath, setSubPath] = React.useState('');

  /**
   * 로그인 정보가 남아있으면 자동 로그인
   */
  React.useEffect(()=>{
    getCurrentUser();
  });
  
  /**
   * 구글 로그인을 위한 클라이언트 ID
   */
  
 GoogleSignin.configure({
   webClientId: '985356881887-8ivnbvrnppcnilp41ii9kl9bvqmvne6i.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
 });

  /**
   * 구글 로그인
   */
  const signInGoogle = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        //   this.setState({ userInfo });
        setGoogleInfo(userInfo);
        } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log(error)
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log(error+' :: progress')
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log(error+' :: available')
        } else {
            // some other error happened
            console.log(error+' :: other')
        }
        }
    };

    /**
     * 로그인 여부를 알려줌(사용X)
     */
    const isSignedIn = async () => {
      const isSignedIn = await GoogleSignin.isSignedIn();
      // this.setState({ isLoginScreenPresented: !isSignedIn });
    };

    /**
     * 로그인 정보가 남아있으면 자동 로그인 하는 함수
     */
    const getCurrentUser = async () => {
      const currentUser = await GoogleSignin.getCurrentUser();
     setGoogleInfo(currentUser);
    };
    
    /**
     * 구글 로그아웃
     */
    const signOutGoogle = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        setGoogleInfo(null);
        console.log('Success Signout')
      } catch (error) {
        console.error(error);
      }
    };
    return(
      //위의 값들을 Context에 넣어서 App.js 아래 폴더 어디서든 사용할 수 있도록 만듬
        <AuthContext.Provider 
        value={{
            googleInfo,
            logIn,
            title,
            setLogIn,
            setGoogleInfo,
            setTitle,
            signInGoogle,
            signOutGoogle,

            IPaddress,
            setIP,
            mainKey,
            setMainKey,
            mainPath,
            setMainPath,
            subKey,
            setSubKey,
            subPath,
            setSubPath,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export {ContextProvider, AuthContext};