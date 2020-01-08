import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = props => {
    
    return (
        <View style={styles.screen}>
            <Text>Menu, Order, Cards, History</Text>
        </View>
    )};

    const styles = Stylesheet.create({
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
});

export default HomeScreen;

