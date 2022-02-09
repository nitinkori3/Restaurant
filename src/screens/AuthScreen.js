import * as React from 'react';

import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import dataFile from '../util/dataFile';

const FirstRoute = () => (
    <RegistrationScreen />
);

const SecondRoute = () => (
    <LoginScreen />
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: dataFile.primaryColor, height: 3}}
        style={{ backgroundColor: '#fff' }}
        renderLabel={({ route, focused }) => (
            <Text style={{ color: focused ? dataFile.primaryColor : '#89909E', margin: 0, fontSize: 15, fontWeight: '500' }}>
                {route.title}
            </Text>
        )}
    />
);

export default AuthScreen = () => {
    
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Create Account' },
        { key: 'second', title: 'Login' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            swipeEnabled={true}
            initialLayout={initialLayout}
            style={styles.container}
            renderTabBar={renderTabBar}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    scene: {
        flex: 1,
    },
});
