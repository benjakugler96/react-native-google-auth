import React from 'react';
import { styles } from './styles';
import { View, ActivityIndicator } from 'react-native';

const Loader = () => (
	<View style={styles.container}>
		<ActivityIndicator size="large" />
	</View>
);

export default Loader;
