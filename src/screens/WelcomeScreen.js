import { Image, Text, View } from 'react-native'
import React, { useRef } from 'react'

import AuthScreen from './AuthScreen';
import BottomModal from "react-native-raw-bottom-sheet";
import MyButton from '../components/MyButton';
import dataFile from '../util/dataFile';
import mainStyles from  '../styles/mainStyles';

const WelcomeScreen = () => {

    const refRBSheet = useRef();
    
    return (
        <View style={mainStyles.container}>
            
            <View style={{ flex: 3, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/welcome.png')} style={{ height: dataFile.myHeight('28%'),resizeMode: 'contain'}}  />
            </View>
            
            <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'space-around', alignItems: 'center', padding: '5%'}}>
                <Text style={{ fontSize: 20, color: dataFile.titleColor}}>Welcome</Text>
                <Text style={{ fontSize: 12, color: dataFile.subTitleColor, textAlign: 'center'}}>Before Enjoying Foodmedia Services Please Register First</Text>
            </View>
            
            <View style={{ flex: 2, backgroundColor: '#fff', justifyContent: 'space-evenly', alignItems: 'center', paddingLeft: '5%', paddingRight: '5%'}}>
                <MyButton title={'Create Account'} buttonColor={'#32B768'} titleColor={'#fff'} onPress={() => refRBSheet.current.open()} />
                <MyButton title={'Login'} buttonColor={'#D1FAE5'} titleColor={'#10B981'} onPress={() => refRBSheet.current.open()} />
                <Text style={{fontSize: 8, justifyContent: 'center'}}>By Logging In Or Registering, You Have Agreed To <Text style={{ color: '#10B981'}}>The Terms And</Text></Text>
            </View>

            <BottomModal
                ref={refRBSheet}
                height={dataFile.myHeight('75%')}
                openDuration={250}
                closeDuration={250}
                closeOnPressBack={true}
                closeOnDragDown={true}
                dragFromTopOnly={true}
                customStyles={{
                    container: {
                        justifyContent: 'center',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        padding: '3%',
                        backgroundColor: '#fff'
                    }
                }}
            >
                <View style={{flex:1, backgroundColor: '#fff', marginLeft: '2%', marginRight: '2%'}}>
                    <AuthScreen />
                </View>
            </BottomModal>

        </View>
    )
}

export default WelcomeScreen