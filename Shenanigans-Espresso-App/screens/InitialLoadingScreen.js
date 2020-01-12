import React from 'react';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';


const InitialLoadingScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>Login or Signup</Text>
			<View style={styles.header}>
				<Text style={styles.header}>Shenanigans Espresso App</Text>
				<View style={styles.buttons}>
					<Button
						style={styles.buttons}
						title='Login'
						icon={{ name: 'code' }}
						onPress={() => Alert.alert('Login button pressed')}
					/>

					<Button
						style={styles.buttons}
						title='Signup'
						icon={{ name: 'code' }}
						onPress={() => Alert.alert('Signup button pressed')}
					/>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	header: {
		fontSize: 25
	},
	buttons: {
		marginVertical: 30,
		flexDirection: 'column',
		justifyContent: 'center'
	}
});

export default createAppContainer(InitialLoadingScreen);
