import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import styled from 'styled-components'
import ListItem from '../../components/ListItem'
import MovieName from '../../components/ListTitle'
import {AuthContext} from '../../context/Context'
import axios from 'axios'

const ListBox = styled.ScrollView`
    border: 1px solid #000080;
    width: 100%;
    height: 70%;
    align-content: center;
`;

const List = styled.TouchableOpacity`
    flex-direction: row;
    width: 98%;
    height: 85px;
    margin: 7px 0 7px 7px;
    padding: 1px;
    border-bottom-width: 2px;
    border-bottom-color: #e5e5e5;
    align-self: center;
`;


const SubImg = styled.View`
    width: 19%;
    height: 90%;
    border-radius:3px;
    border: 1px solid #000080;
`;

const SubTitle = styled.View`
    height: 90%;
    width: 63%;
    margin: 0px 5px;
    justify-content: center;
`;

const SubTitleText = styled.Text`
    font-size: 25px;
    text-align: left;
`;

const SubDate = styled.View`
    height: 90%;
    width: 16%;
    justify-content: center;
`;

const SubDateText = styled.Text`
    font-size: 15px;
    text-align: center;
    color: #B3B3B3;
`;

const Img = styled.Image` 
    flex:1;   
    resizeMode: contain;
`;

const SelectInMainList = (props) => {
    const Auth = React.useContext(AuthContext);
    const BASE_URL = `${Auth.IPaddress}:3100`;
    const emails = Auth.googleInfo.user.email;
    const [isLoading, setIsLoading] = React.useState(false);
    const [list, setList] = React.useState([]);

    React.useEffect(()=>{
        const unsubscribe = props.navigation.addListener('focus', () => {
            setIsLoading(true)
              axios.get(`${BASE_URL}/api/database/mimage/email/${emails}`)
              .then(res=>{
                setList(res.data);
                setIsLoading(false);
              }).catch(err=>err.message);
            });
        return unsubscribe;
    },[]);

    return(
        <>
        <ListBox>
            {list.map(item => (
            <List key={item.date.toString()} onPress={() => {
                props.navigation.navigate('SubImage',{Main_img : item.date , email : emails, type : 'compare'})
            }}>
                <SubImg>
                <Img source={{uri:`${BASE_URL}/api/image/main/${item.path}`}}/>
                </SubImg>
                <SubTitle>
                    <SubTitleText>{item.title}</SubTitleText>
                </SubTitle>
                <SubDate>
                    <SubDateText>
                    {item.date.split('-')[0]}{'\n'}{item.date.split('-')[1]}/{item.date.split('-')[2].substring(0,2)}
                    </SubDateText>
                </SubDate>
            </List>
              ))} 
        </ListBox>
        </>
        
    )
}

export default SelectInMainList;