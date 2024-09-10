import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: false,
	userData: {
		_id: "",
		email: "",
		role: "",
	},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.status = true;
			state.userData = action.payload;
		},
		logout: (state) => {
			state.status = false;
			state.userData = {
				_id: "",
				email: "",
				role: "",
			};
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
