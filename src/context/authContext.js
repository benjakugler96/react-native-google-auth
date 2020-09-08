import React, { useReducer, useMemo } from 'react';

const initialState = {
	isLoggedIn: false,
	isLoading: false,
	user: null,
};

const initialContext = [{ ...initialState }, () => {}];

export const AuthContext = React.createContext(initialContext);

const updater = (state, update) => ({
	...state,
	...update,
});

export const AuthController = (props) => {
	const [authState, updateAuth] = useReducer(updater, initialState);
	const value = useMemo(() => [authState, updateAuth], [authState]);
	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	);
};
