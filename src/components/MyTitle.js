import { Image, Text, View } from 'react-native'

import React from 'react'

const MyTitle = ({ title, subTitle }) => {
    return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontSize: 15}}>{title}</Text>
                        <Text style={{ fontSize: 12}}>{subTitle}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>See All</Text>
                        <Image source={require('../assets/right_arrow.png')} style={{ height: 15, width: 15, resizeMode: 'contain'}} />
                    </View>
                </View>
    )
}

export default MyTitle