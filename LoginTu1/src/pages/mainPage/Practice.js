import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import {AuthContext} from '../../context/Context'
import styled from 'styled-components'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const PictureView = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-content: center;
    margin: 10% 30%;
`;

const Pictures = styled.Image`
    flex:2;
    width: 10%;
    padding: 23%;
    margin: 5%;
    align-self: center;
`;

const Blank = styled.View`
    width: 30%;
    align-content: center;
    align-items: center;
`;


const Practice = () => {
    const Auth = React.useContext(AuthContext);

    return (
        <View>
            <PictureView>
                <Pictures source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}/>
                <Pictures source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}/>
            </PictureView>
            <Text>---------------------------------------------</Text>
            <View>
            <Text>Bezier Line Chart</Text>
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
                        100
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                //앞, 뒤에 추가하는 글자. 단위 등을 표현
                yAxisLabel=""
                yAxisSuffix=""
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
            </View>
        </View>
    );
}

export default Practice;