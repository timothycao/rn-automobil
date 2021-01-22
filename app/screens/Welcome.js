import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text } from 'react-native';

function Welcome(props) {
    return (
        <ImageBackground
            style={styles.container}
            source={require('../assets/background.jpeg')}
        >
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            <View 
                style={styles.loginButton}
            >
                <Text>Login</Text>
            </View>
            <View
                style={styles.registerButton}
            >
                <Text>Register</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        bottom: 100
    },
    loginButton: {
        width: '80%',
        height: 70,
        backgroundColor: 'black'
    },
    registerButton: {
        width: '80%',
        height: 70,
        backgroundColor: 'white'
    }
})

export default Welcome;