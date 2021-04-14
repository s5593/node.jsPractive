import React from 'react'
import { View, Text, Image } from 'react-native'
import {AuthContext} from '../../context/Context'
import PureChart from 'react-native-pure-chart';

const UserImage = () => {
    const Auth = React.useContext(AuthContext);

    let sampleData = [
        {
          seriesName: 'series1',
          data: [
            {x: '2018-02-01', y: 30},
            {x: '2018-02-02', y: 200},
            {x: '2018-02-03', y: 170},
            {x: '2018-02-04', y: 250},
            {x: '2018-02-05', y: 10}
          ],
          color: '#297AB1'
        },
        {
          seriesName: 'series2',
          data: [
            {x: '2018-02-01', y: 20},
            {x: '2018-02-02', y: 100},
            {x: '2018-02-03', y: 140},
            {x: '2018-02-04', y: 550},
            {x: '2018-02-05', y: 40}
          ],
          color: 'yellow'
        }
      ]

    return (
        <View>
            <Text>
                Image
            </Text>
            <PureChart data={sampleData} type='line' />
        </View>
    );
}

export default UserImage;