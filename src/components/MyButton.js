import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import dataFile from '../util/dataFile';

const MyButton = ({ onPress, title, buttonColor, titleColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.myButtonContainer, { backgroundColor: buttonColor }]}>
        <Text style={[styles.myButtonText, { color: titleColor }]}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    myButtonContainer: {
        // elevation: 8,
        borderRadius: 20,
        height: dataFile.myHeight('8%'),
        width: dataFile.myWidth('70%'),
        justifyContent: 'center'
    },
    myButtonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'capitalize'
    }
});

export default MyButton