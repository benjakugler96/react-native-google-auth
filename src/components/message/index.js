import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Message = ({ text, type }) => (
	<View
		style={[
			styles.container,
			type === 'danger' ? styles.danger : styles.success,
		]}
	>
		<Text>{text}</Text>
	</View>
);

export default Message;
