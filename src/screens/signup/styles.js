import { StyleSheet, Dimensions } from 'react-native';

let ScreenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
	container: {
		padding: 10,
		height: ScreenHeight - 200,
		justifyContent: 'center',
	},
	header: {
		marginBottom: 50,
		textAlign: 'center',
	},
});
