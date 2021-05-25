import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'
import ListItem from '../../components/ListItem'
import MovieName from '../../components/MovieName'

const Select = ({navigation}) => {
    return(
        <>
            <ListItem onPress={() => {}}>
                <MovieName>새로운 표정 측정</MovieName>
            </ListItem>
            <ListItem onPress={() => navigation.navigate('SelectInMainList')}>
                <MovieName>기존 표정 측정</MovieName>
            </ListItem>
        </>
    )
}

export default Select;