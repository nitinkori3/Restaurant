import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, useColorScheme, } from 'react-native';

import AuthStacks from './src/navigations/AuthStack';
import HomeScreen from './src/screens/HomeScreen';
import React from 'react';
import SplashScreen from './src/screens/SpalshScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { enableScreens } from 'react-native-screens'
// import React from 'react'
import { navigationRef } from './src/navigations/RootNavigation'

enableScreens()

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const isLoggedIn = true
  return (
    // <SafeAreaView>
      // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <NavigationContainer ref={navigationRef} >
        <AuthStacks />
      </NavigationContainer>
      // <HomeScreen/>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'red'
  }
});

export default App;
