import { CardStyleInterpolators, TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import SplashScreen from '../screens/SpalshScreen';
import WelcomeScreen from '../screens/WelcomeScreen'

const Stack = createStackNavigator();

const AuthStacks = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                ...TransitionPresets.ModalTransition,
            }}
            headerMode="float"
            >
            <Stack.Screen
                name = 'SplashScreen'
                component = {SplashScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name = 'Welcome'
                component = {WelcomeScreen}
                options={{headerShown: false}}
            />
            {/* <Stack.Screen
                name = 'Login'
                component = {LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name = 'Registration'
                component = {RegistrationScreen}
                options={{headerShown: false}}
            /> */}
    </Stack.Navigator>
    )
}

export default AuthStacks;