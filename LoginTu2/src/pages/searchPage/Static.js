import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import styled from 'styled-components'
import {AuthContext} from '../../context/Context'
import {LineChart} from 'react-native-chart-kit'

const MainBox = styled.View`
    width: 100%;
    height: 30%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

const Img = styled.Image` 
    flex:1;   
    resizeMode: contain;
`;

const ImgBox = styled.View`
    align-self: flex-start;
    margin: 10px;
    width: 180px;
    height: 180px;
    border: 1px solid #000;
    border-radius:3px;
`;

const InfoBox = styled.View`
    border: 1px solid #000;
    margin: 10px;
    width: 180px;
    height: 180px;
    border-radius:3px;
    justify-content:center;
`;

const InfoBoxText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

const StaticBox = styled.ScrollView`
    border: 1px solid #000080;
    width: 100%;
    height: 70%;
    align-content: center;
`;

const Static = styled.View`
    flex-direction: row;
    width: 98%;
    height: 85px;
    margin: 5px 0;
    padding: 1px;
    border-bottom-width: 2px;
    border-bottom-color: #e5e5e5;
`;

const StaticText = styled.Text`
    font-size: 20px;
`;

const StaticDate = styled.View`
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    height:70px;
    margin: 10px 0;
    align-self:center;
    padding: 0 50px;
`;


const StaticDateText = styled.Text`
    font-size:15px;
    text-align:center;
`;
const SubList = () => {
    const Auth = React.useContext(AuthContext);

    return(
        <View>
            <MainBox>
                <ImgBox>
                    <Img source={{uri:Auth.googleInfo.user.photo}}/>
                </ImgBox>
                <InfoBox>
                    <InfoBoxText>
                        근접 유사도{'\n\n'}92%
                    </InfoBoxText>
                </InfoBox>
            </MainBox>
            <StaticBox>
                <Static>
                    <StaticText>
                    평균 유사도: 82%
                    </StaticText>
                </Static>
                <Static>
                    <StaticText>
                    최근 유사도: 91%
                    </StaticText>
                </Static>
                <Static>
                    <StaticText>
                    측정 횟수: 7번
                    </StaticText>
                </Static>
                <LineChart
                data={{
                    //그래프 가로 글자. 순서대로 넣으면 된다.
                labels: ["first",
                        "second",
                        "third",
                        "fourth",
                        "fifth",
                        "sixth",
                        "seventh"],
                datasets: [
                    {
                    data: [
                        //숫자 데이터가 들어가는 곳. 순서대로 넣으면 된다.
                        // Math.random() * 100,
                        // Math.random() * 100,
                        // Math.random() * 100,
                        // Math.random() * 100,
                        // Math.random() * 100,
                        // Math.random() * 100
                        50,
                        10,
                        80,
                        40,
                        50,
                        40,
                        91
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                //앞, 뒤에 추가하는 글자. 단위 등을 표현
                yAxisLabel=""
                yAxisSuffix=""
                //y축 값 거리
                yLabelsOffset={10}
                //그래프를 0부터 시작
                fromZero={true}
                //세로 점선 반복
                yAxisInterval={2} // optional, defaults to 1
                // xLabelsOffset={9}
                chartConfig={{
                    //각종 백그라운드 색
                    backgroundColor: "#fff",
                    backgroundGradientFrom: "#f5f5f5",
                    backgroundGradientTo: "#ddd",
                    useShadowColorFromDataset:true,
                    //소숫점
                    decimalPlaces: 2, // optional, defaults to 2dp
                    //그래프 색
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    //그래프 주변 글자 색
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 1
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#c7c7c7"
                    }
                }}
                //bezier 주석 풀면 그래프가 부드러워짐
                // bezier
                //그래프 박스 디자인
                style={{
                marginVertical: 8,
                borderRadius: 10,
                alignItems: 'center'
                }}
            />
            <StaticDate>
                <StaticDateText>
                    시작일{'\n'}{'\n'}
                    2021-03-01
                </StaticDateText>
                <StaticDateText>
                    종료일{'\n'}{'\n'}
                    2021-04-01
                </StaticDateText>
            </StaticDate>
            </StaticBox>
        </View>
    )
}

export default SubList;