import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import styled from 'styled-components'
import {AuthContext} from '../../context/Context'
import {StackedBarChart} from 'react-native-chart-kit'


const MainBox = styled.View`
    border: 1px solid #000;
    width: 100%;
    height: 37%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

const Img = styled.Image` 
    flex:1;   
    resizeMode: cover;
`;

const ImgBox = styled.View`
    align-self: flex-start;
    margin: 3%;
    width: 40%;
    height: 80%;
    border: 1px solid #000;
    border-radius:3px;
`;

const Result = styled.ScrollView`
margin: 2% 0;
border: 1px solid #000;
width: 100%;
align-self:center;
`;

const ResultBox = styled.View`
    margin: 2% 0;
    border: 1px solid #000;
    width: 100%;
    align-self:center;
    align-items: center;
`;

const ResultText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;



const Compare = () => {
    const Auth = React.useContext(AuthContext);
    const data = {
        labels: ["Main", "Sub"],
        legend: ["angry", "happy", "sad", "surprise", "netural", "dfsf", "fdsafsd"],
        data: [
          [20, 30, 43, 5, 2, 5, 2],
          [30, 2, 60, 3, 5, 3, 7]
        ],
        barColors: ["#F5F5F5", "#DCDCDC", "#D3D3D3", '#A9A9A9', '#696969', "#F5F5F5", "#DCDCDC"]
      };
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 10, // optional, default 3
        barPercentage: 2,
        useShadowColorFromDataset: false // optional
    };

    return(
        <View>
             <MainBox>
                <ImgBox>
                    <Img source={{uri:Auth.googleInfo.user.photo}}/>
                </ImgBox>
                <ImgBox>
                <Img source={{uri:Auth.googleInfo.user.photo}}/>
                </ImgBox>
            </MainBox>
            <Result>
                <ResultBox>
                    <ResultText>
                        목표 이미지와 100% 유사합니다.
                    </ResultText>
                </ResultBox>
                <StackedBarChart
                    data={data}
                    width={Dimensions.get("window").width}
                    height={220}
                    chartConfig={chartConfig}
                />
            </Result>
        </View>
    )
}

export default Compare;