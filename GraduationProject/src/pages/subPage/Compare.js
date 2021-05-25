import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import styled from 'styled-components'
import {AuthContext} from '../../context/Context'
import {MainBox, Img, ImgBox} from '../../components/Images'
import {VictoryStack, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory-native'



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

const ElementBox1 = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    align-self: center;
`;

const ElementBox2 = styled.View`
    flex-direction: row;
    width: 20%;
    height: 95%;
    margin: 1%;
    align-items: center;
    align-content: center;
`;

const ElementColor = styled.View`
    border: 1px solid #000;
    width: 15px;
    height: 15px;
    margin: 1% 7% 1% 3%;
    align-items: center;
    border-radius: 2px;
`;

const elementText = Math.round(Dimensions.get('window').height/65)
const ElementText = styled.Text`
    font-size: ${elementText}px;
    font-weight: bold;
`;

const resultText = Math.round(Dimensions.get('window').width/20)
const ResultText = styled.Text`
    font-size: ${resultText}px;
    font-weight: bold;
`;

const angry = [
    {data: 1, result: 50},
    {data: 2, result: 49}
];
const disgust = [
    {data: 1, result: 10},
    {data: 2, result: 11}
];
const fear = [
    {data: 1, result: 2},
    {data: 2, result: 3}
];
const happy = [
    {data: 1, result: 8},
    {data: 2, result: 7}
];
const surprise = [
    {data: 1, result: 5},
    {data: 2, result: 19}
];
const natural = [
    {data: 1, result: 10},
    {data: 2, result: 9}
];
const sad = [
    {data: 1, result: 15},
    {data: 2, result: 2}
];

const angryColor = '#B22222'
const disgustColor = '#959EA2'
const fearColor = '#663399'
const happyColor = '#FFD700'
const surpriseColor = '#9ACD32'
const naturalColor = '#32CD32'
const sadColor = '#1E90FF'

const Compare = ({color}) => {
    const Auth = React.useContext(AuthContext);

    return(
        <>
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
                <VictoryChart
                domainPadding={{x: 110}}
                style={{
                    parent: {
                      border: "5px solid #ccc"
                    },
                    alignItems: "center"
                  }}>
                    <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2]}
                    tickFormat={["MainImage", "SubImage"]}
                    />
                    <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x / 1}%`)}
                    />
                    <VictoryStack>
                        <VictoryBar
                            data={angry}
                            x="data"
                            y="result"
                            style={{
                                data: { fill: angryColor }
                              }}
                        />
                        <VictoryBar
                            data={disgust}
                            x="data"
                            y="result"
                            style={{
                                data: { fill: disgustColor }
                              }}
                        />
                        <VictoryBar
                            data={fear}
                            x="data"
                            y="result"
                            style={{
                                data: { fill: fearColor }
                              }}
                        />
                        <VictoryBar
                            data={happy}
                            x="data"
                            y="result"
                            style={{
                                data: { fill: happyColor }
                              }}
                        />
                        <VictoryBar
                            data={surprise}
                            x="data"
                            y="result"
                            style={{
                                data: { fill: surpriseColor }
                              }}
                        />
                        <VictoryBar
                            data={natural}
                            x="data"
                            y="result"
                            style={{
                                data: { fill: naturalColor }
                              }}
                        />
                        <VictoryBar
                            data={sad}
                            x="data"
                            y="result"
                            style={{
                                data: { fill: sadColor }
                              }}
                        />
                    </VictoryStack>
                </VictoryChart>
                <ElementBox1>
                    <ElementBox2>
                        <ElementColor style={{backgroundColor: angryColor}}/>
                        <ElementText>angry</ElementText>
                    </ElementBox2>
                    <ElementBox2>
                        <ElementColor style={{backgroundColor: disgustColor}}/>
                        <ElementText>disgust</ElementText>
                    </ElementBox2>
                    <ElementBox2>
                        <ElementColor style={{backgroundColor: fearColor}}/>
                        <ElementText>fear</ElementText>
                    </ElementBox2>
                    <ElementBox2>
                        <ElementColor style={{backgroundColor: happyColor}}/>
                        <ElementText>happy</ElementText>
                    </ElementBox2>
                </ElementBox1>
                <ElementBox1>
                    <ElementBox2>
                        <ElementColor style={{backgroundColor: surpriseColor}}/>
                        <ElementText>surprise</ElementText>
                    </ElementBox2>
                    <ElementBox2>
                        <ElementColor style={{backgroundColor: naturalColor}}/>
                        <ElementText>natural</ElementText>
                    </ElementBox2>
                    <ElementBox2>
                        <ElementColor style={{backgroundColor: sadColor}}/>
                        <ElementText>sad</ElementText>
                    </ElementBox2>
                </ElementBox1>
            </Result>
        </>
    )
}

export default Compare;