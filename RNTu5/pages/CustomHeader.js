import React from 'react'
import { Container, Header, Left, Body,
    Right, Button, Icon, Title, Text } from 'native-base';
import {DrawerActions} from '@react-navigation/native'
import styled from 'styled-components';


function CustomHeader(props, { navigation }){
    let {title, isHome} = props;
    return (
        <Header>
          <Left>
            {
              isHome?
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon name="menu"/>
              </Button>:
              <Button transparent onPress={() => props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
            }
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
            {/* <Button transparent>
              <Icon name='menu' />
            </Button> */}
          </Right>
        </Header>
    );
  }

  export default CustomHeader;