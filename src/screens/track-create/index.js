import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const TrackCreateScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<Text style={styles.container}>TrackCreateScreen</Text>
			<Button
				title="Go to track details"
				onPress={() => navigation.navigate('TrackDetails')}
			/>
		</View>
	);
};

export default TrackCreateScreen;
