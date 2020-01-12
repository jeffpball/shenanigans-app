import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SignupScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Signup below!</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SignupScreen;

