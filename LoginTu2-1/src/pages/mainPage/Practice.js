import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import {AuthContext} from '../../context/Context'
import styled from 'styled-components'

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
            </View>
        </View>
    );
}

export default Practice;