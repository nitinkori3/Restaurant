import React, {useState} from 'react'
import { Text, TextInput, View } from 'react-native'

import MyButton from '../components/MyButton'
import MyButtonImage from '../components/myButtonImage'
import dataFile from '../util/dataFile'
import mainStyles from '../styles/mainStyles'

const RegistrationScreen = () => {

    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{flex: 1, marginTop: '5%' }}>
            <View style={{flex: 2, justifyContent: 'space-evenly' }}>
                <Text style={mainStyles.textInputLable}>Full Name</Text>
                <TextInput 
                    placeholder={'Enter your full name'}
                    autoCorrect={false}
                    keyboardType={'default'}
                    autoCapitalize={'none'}
                    placeholderTextColor={'#a6a6a6'}
                    onChangeText={newText => setFullname(newText)}
                    defaultValue={fullName}
                    style={[mainStyles.textInput, {textTransform: 'capitalize'}]}
                />

                <Text style={mainStyles.textInputLable}>Email address</Text>
                <TextInput 
                    placeholder={'Eg namaemail@emailkamu.com'}
                    autoCorrect={false}
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    placeholderTextColor={'#a6a6a6'}
                    onChangeText={newText => setEmail(newText)}
                    defaultValue={email}
                    style={mainStyles.textInput}
                />

                <Text style={mainStyles.textInputLable}>Password</Text>
                <TextInput 
                    placeholder={'**** **** ****'}
                    autoCorrect={false}
                    keyboardType={'default'}
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                    placeholderTextColor={'#a6a6a6'}
                    onChangeText={newText => setPassword(newText)}
                    defaultValue={password}
                    style={mainStyles.textInput}
                />
            </View>

            <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
                <MyButton title={'Registration'} buttonColor={dataFile.primaryColor} titleColor={'#fff'} onPress={() => alert('registration successfully')}/>
                <MyButtonImage imagePath={require('../assets/google.png')} title={'Sign up with google'} onPress={() => alert('google registration not implemented yet')} buttonColor={'#F4F4F4'} titleColor={'#222222'}/>
            </View>
        </View>
    )
}

export default RegistrationScreen