import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import dataFile from '../util/dataFile';

const MyButtonImage = ({ onPress, title, buttonColor, titleColor, imagePath }) => (
    <TouchableOpacity onPress={onPress} style={[styles.myButtonContainer, { backgroundColor: buttonColor }]}>
        <Image source={imagePath} style={{resizeMode: 'contain', height: 25, width: 25}} />
        <Text style={[styles.myButtonText, { color: titleColor }]}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    myButtonContainer: {
        flexDirection: 'row',
        // elevation: 8,
        borderRadius: 20,
        height: dataFile.myHeight('8%'),
        width: dataFile.myWidth('70%'),
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    myButtonText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '400'       
    }
});

export default MyButtonImage