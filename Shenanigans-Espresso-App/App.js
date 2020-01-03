import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
	return (
		<View style={styles.container}>
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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		fontSize: 25
	},
	buttons: {
		margin: 20
	}
});
