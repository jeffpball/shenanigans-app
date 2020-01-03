import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Shenanigans Espresso App</Text>
      <Button title='Login' icon={{ name: 'code' }} />
      <Button title='Signup' icon={{ name: 'code' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
