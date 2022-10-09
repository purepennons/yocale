import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface TicketsState {
	loading: "pending" | "idle";
	tickets: [];
}

const initialState = {
	loading: "idle",
	tickets: [],
} as TicketsState;

const fetchAllTickets = createAsyncThunk("tickets/fetchAllTickets", () => {
	return fetch("http://localhost:3004/tickets").then((res) => res.json());
});

const appSlice = createSlice({
	name: "tickets",
	initialState,
	reducers: {},
	extraReducers: {
		// @ts-ignore
		[fetchAllTickets.fulfilled]: (state, { payload }) => {
			state.tickets = payload;
		},
	},
});

export const { reducer } = appSlice;
export { fetchAllTickets };
