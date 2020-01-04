import React, { useState } from 'react';
import {Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import InitialLoadingScreenNavigator from './navigation/InitialLoadingScreenNavigator';

const fetchFonts = () => {
	return Font.loadAsync({
		'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
		'opensans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
			/>
		);
	}

  return <InitialLoadingScreenNavigator />;
}