import React from 'react'
import { StyleSheet } from 'react-native'
import dataFile from '../util/dataFile';

export default mainStyles = StyleSheet.create({
    
    container: {
        flex: 1, 
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff'
    },
    textInput: {
        borderColor: '#BEC5D1',
        borderWidth: 1,
        borderRadius: 15,
        color: '#374151',
        height: 55,
        paddingLeft: 20,
        fontSize: 13
    },

    textInputLable: {
        fontSize: 15, 
        fontWeight: '400',
        color: '#374151'
    },

    icon: {
        resizeMode: 'contain', 
        height: dataFile.myHeight('5%'), 
        width: dataFile.myWidth('5%')
    },

    featuredCard: {
        flex: 2,
        alignItems:'center', 
        flexDirection: 'row', 
        shadowOffset: { width: 0, height: 2}, shadowOpacity: 0.1, 
        shadowRadius: 20, 
        elevation: 5, 
        backgroundColor: '#fff',
        padding: 20, 
        borderRadius: 8, 
        justifyContent: 'space-between', borderWidth: 0.5, 
        borderColor: '#4dd2ff', 
        marginLeft: 5, 
        marginRight: 10, 
        marginTop: 10, 
        marginBottom: 10
    }
});