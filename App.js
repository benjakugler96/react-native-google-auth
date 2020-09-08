import React from 'react';
import { AuthController } from './src/context/authContext';
import AppRoutes from './src/routes';
import firebase from 'firebase';

// Firebase config
import { firebaseConfig } from './configs';
firebase.initializeApp(firebaseConfig);

const App = () => (
	<AuthController>
		<AppRoutes />
	</AuthController>
);

export default App;
