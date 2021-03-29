import React from 'react';
import {Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import UserPage from './UserPage'
import styled from 'styled-components'

const HeaderText = styled.Text`
    color: #000000;
    font-size: 32px;
    font-family: 'Billabong';
    padding-top:13px;
`;

const HeaderView = styled.View`

`;

const Header = ({name}) => {
    return(
        <HeaderView>
            <HeaderText>
                {name}
            </HeaderText>
        </HeaderView>
    )
};

const Left = ({navigation}) => {
    return(
    <HeaderView>
        <Icon.Button
        name="md-list"
        size={22}
        backgroundColor="#fff"
        color="#000000"
        onPress={() => navigation.openDrawer() }
        />
    </HeaderView>
    )
}

const Right = ({navigation}) => {
    return(
        <HeaderView>
            <Icon.Button
            name="md-person-circle"
            size={22}
            backgroundColor="#fff"
            color="#000000"
            onPress={() => navigation.navigate(UserPage) }
            />
        </HeaderView>
    )
}


export {Header, Left, Right};
