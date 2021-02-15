import React from 'react'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient';
import {
    Container,
    // Header,
    // Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Title,
}
from 'native-base';
import {DarkTheme} from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const View = styled.View`

`;

const StatusBar = styled.StatusBar`

`;

const Text = styled.Text`
    margin:10px;
`;

const Header = styled.Text`
    font-size: 25px;
    color:#999999;
    padding:30px;
    background-color:#BBDEFB;
    text-align: center;
`;

const Contents = styled.ScrollView`

background-color:#BBDEFB;
flex : 1;
`;

const D = styled.View`
flex:1;
border:30px;
border-color:#ffffff;
background-color:#BBDEFB;
padding:20px;
`;


const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };

const FirstPage = ({navigation}) => {
    return (
        <Container theme={MyTheme}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <Header>
                <Title>
                    Test FirstPage!!
                </Title>
            </Header>
            <D>
            <Contents>
                <Text>
                    Is this OK?
                </Text>
                <Text>
                    Is this OK?

                    gfdsgfdg{"\n"}
                    sdfgfgsdf{"\n"}
                    sdfgsdfg{"\n"}
                    sdfgdfg{"\n"}
                    fgsh{"\n"}
                    shshdhhsdh{"\n"}
                    shshdhhsdhshdh{"\n"}
                    hsdfhfhs{"\n"}
                    sdhfhfh{"\n"}
                    shh{"\n"}
                    fdsh{"\n"}
                    sfh{"\n"}
                    sdfhfdsfs{"\n"}
                    dhkjfds{"\n"}
                    fhsd{'\n'}
                    sdhfhfhf{'\n'}
                    fh{'\n'}
                    sdfhfdsfs{"\n"}
                    dhkjfds{"\n"}
                    fhsd{'\n'}
                    sdhfhfhf{'\n'}
                    fh{'\n'}
                    fdsh{"\n"}
                    sfh{"\n"}
                    sdfhfdsfs{"\n"}
                    dhkjfds{"\n"}
                    fhsd{'\n'}
                    sdhfhfhf{'\n'}
                    fh{'\n'}
                    sdfhfdsfs{"\n"}
                    dhkjfds{"\n"}
                    fhsd{'\n'}
                    sdhfhfhf{'\n'}
                    fh{'\n'}
                    ff
                </Text>
            </Contents>
            </D>
                
        </Container>
    );
}

export default FirstPage;


