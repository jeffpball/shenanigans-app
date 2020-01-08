import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignupScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Signup below!</Text>
        </View>
    )};

const styles = Stylesheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SignupScreen;

