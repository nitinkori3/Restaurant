import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

import MyTitle from '../components/MyTitle'
import dataFile from '../util/dataFile'
import mainStyles from '../styles/mainStyles'

const HomeScreen = () => {

    const [search, setSearch] = useState('');

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, paddingLeft: '5%', paddingRight: '5%', flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../assets/hamberger_icon.png')} style={mainStyles.icon} />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                    <Image source={require('../assets/map_pin.png')} style={mainStyles.icon} />
                    <Text style={{fontSize: 13, paddingLeft: '2%'}}>Whitefield main, Bengaluru</Text>
                </View>
                <Image source={require('../assets/account.png')} style={mainStyles.icon} />
            </View>
            <View style={{flex:.8, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput 
                    placeholder={'Search'}
                    autoCorrect={false}
                    keyboardType={'default'}
                    autoCapitalize={'none'}
                    placeholderTextColor={'#a6a6a6'}
                    onChangeText={newText => setSearch(newText)}
                    defaultValue={search}
                    style={[mainStyles.textInput, { width: dataFile.myWidth('80%'), height: dataFile.myHeight('5%'),backgroundColor: '#E6E7E9' }]}
                />
            </View>
            <View style={{flex:2}}>
                {/* <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {dataFile.featuredCards.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={mainStyles.featuredCard}>
                                <Image source={item.featuredImage} style={{height: 30, width: 30}}/>
                                <Text style={mainStyles.featuredCard}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>  */}
            </View>
            <View style={{flex: 2, paddingLeft: '3%', paddingRight: '3%' }}>
                <MyTitle title={'Today New Available'} subTitle={'Best of the today  food list update'}/>
            </View>
            <View style={{flex: 2, paddingLeft: '3%', paddingRight: '3%'}}>
                <MyTitle title={'Today New Available'} subTitle={'Best of the today  food list update'}/>
            </View>
            <View style={{flex: 2, paddingLeft: '3%', paddingRight: '3%'}}>
                <MyTitle title={'Today New Available'} subTitle={'Best of the today  food list update'}/>
            </View>

        </View>
    )
}

export default HomeScreen