import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import styled from 'styled-components'
import {AuthContext} from '../../context/Context'
import {MainBox, Img, ImgBox, InfoBox} from '../../components/Images'
import { LineChart } from "react-native-chart-kit";


const infoBoxText = Math.round(Dimensions.get('window').height/29)
const InfoBoxText = styled.Text`
    font-size: ${infoBoxText}px;
    font-weight: bold;
    text-align: center;
`;

const StatBox = styled.ScrollView`
    border: 1px solid #000080;
    width: 100%;
    height: 70%;
    align-content: center;
`;

const StatContents = styled.View`
    flex-direction: row;
    width: 98%;
    height: 70px;
    margin: 1.5% 0;
    padding: 0.3%;
    border-bottom-width: 2px;
    border-bottom-color: #e5e5e5;
`;
const statText = Math.round(Dimensions.get('window').width/17)
const StatText = styled.Text`
    font-size: ${statText}px;
`;

const StatDate = styled.View`
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    height:15%;
    margin: 5% 0;
    align-self:center;
    padding: 0 10%;
`;

const statDateText = Math.round(Dimensions.get('window').width/30)
const StatDateText = styled.Text`
    font-size:${statDateText}px;
    text-align:center;
`;

const GraphData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{ data: [57, 36, 98, 38, 23, 1]}]
}
const GraphDesign = {   
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
}


const Stat = () => {
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
            <StatBox>
                <StatContents>
                    <StatText>
                    평균 유사도: 82%
                    </StatText>
                </StatContents>
                <StatContents>
                    <StatText>
                    최근 유사도: 91%
                    </StatText>
                </StatContents>
                <StatContents>
                    <StatText>
                    측정 횟수: 7번
                    </StatText>
                </StatContents>
                <Text>
                    그래프 부분
                </Text>
                <LineChart
    data={GraphData}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={GraphDesign}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
            <StatDate>
                <StatDateText>
                    시작일{'\n'}{'\n'}
                    2021-03-01
                </StatDateText>
                <StatDateText>
                    종료일{'\n'}{'\n'}
                    2021-04-01
                </StatDateText>
            </StatDate>
            </StatBox>
        </View>
    )
}

export default Stat;