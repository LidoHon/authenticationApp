import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userInfo: localStorage.getItem('userInfo')
		? JSON.parse(localStorage.getItem('userInfo'))
		: null,
};
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			state.userInfo = action.payload;
			localStorage.setItem('userInfo', JSON.stringify(action.payload));
		},
		// this one(logout) is for clearing the credentials from the local storage it is like the frontennd logout not like the logout that will be in the user api slice..i could've just call it clearCrediential but whatever..

		logout: (state, action) => {
			state.userInfo = null;
			localStorage.removeItem('userInfo');
		},
	},
});
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
