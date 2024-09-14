import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	darkMode: true,
};

const modeSlice = createSlice({
	name: "mode",
	initialState,
	reducers: {
		toggle: (state) => {
			state.darkMode = !state.darkMode;
		},
	},
});

export const { toggle } = modeSlice.actions;

export default modeSlice.reducer;
