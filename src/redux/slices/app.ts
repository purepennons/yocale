import { createSlice } from "@reduxjs/toolkit";

interface AppState {
    loading: 'pending' | 'idle'
}

const initialState = {
	loading: 'idle',
} as AppState;

const appSlice = createSlice({
	name: "app",
	initialState,
    reducers: {},
    extraReducers: {}
});

export const { reducer } = appSlice;
