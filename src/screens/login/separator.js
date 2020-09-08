import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from './styles';

const Separator = () => (
	<View style={styles.separatorContainer}>
		<View style={styles.separatorLine} />
		<Text style={styles.separatorText}>OR</Text>
		<View style={styles.separatorLine} />
	</View>
);
export default Separator;
