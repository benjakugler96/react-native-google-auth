import React from 'react';
import { AuthController } from './src/context/authContext';
import AppRoutes from './src/routes';

const App = () => (
	<AuthController>
		<AppRoutes />
	</AuthController>
);

export default App;
