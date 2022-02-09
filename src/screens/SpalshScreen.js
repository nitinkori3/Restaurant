import * as RootNavigation from '../navigations/RootNavigation';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';

const Dots = ({selected}) => {
    
    let backgroundColor;
    backgroundColor = selected ? '#32B768' : '#E6E6E6';
    
    return (
        <View style={{ width: 8, height: 8, borderRadius: 4, marginHorizontal: 3, backgroundColor }} />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal: 20}}
        {...props}
    >
        <Text style={{fontSize: 12}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:20}}
        {...props}
    >
        <Image source={require('../assets/next.png')} style={{ resizeMode: 'contain', height: 18 }} />
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        onPress={() => RootNavigation.navigate('Welcome')}
        style={{marginHorizontal:20}}
        {...props}
    >
        <Image source={require('../assets/next.png')} style={{ resizeMode: 'contain', height: 18 }} />
    </TouchableOpacity>
);

const SplashScreen = ({navigation}) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            bottomBarColor={'#fff'}
            titleStyles={{color: '#1F2937', fontSize: 18, textAlign: 'center'}}
            subTitleStyles={{color: '#4B5563', fontSize: 12, textAlign: 'center'}}
            onSkip={() => navigation.replace("Welcome")}
            onDone={() => navigation.navigate("Welcome")}
            allowFontScaling={false}
            controlStatusBar={false}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/splash1.png')} style={{ height: 250, resizeMode: 'contain'}} />,
                    title: 'Nearby restaurants',
                    subtitle: `You don't have to go far to find a good restaurant, we have provided all the restaurants that is near you`,
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/splash2.png')} style={{ height: 250, resizeMode: 'contain'}} />,
                    title: 'Select the Favorites Menu',
                    subtitle: `Now eat well, don't leave the house,You can choose your favorite food only with one click`,
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/splash3.png')} style={{ height: 250, resizeMode: 'contain'}} />,
                    title: 'Good food at a cheap price',
                    subtitle: `You can eat at expensive restaurants with affordable price`,
                },
            ]}
        />
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
});