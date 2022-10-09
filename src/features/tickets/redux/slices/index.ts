import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface TicketsState {
	loading: "pending" | "idle";
	tickets: [];
}

const initialState = {
	loading: "idle",
	tickets: [],
} as TicketsState;

const fetchAllTickets = createAsyncThunk("tickets/fetchAllTickets", async () =>
	axios.get("http://localhost:3004/tickets")
);

const appSlice = createSlice({
	name: "tickets",
	initialState,
	reducers: {},
	extraReducers: {
		// @ts-ignore
		[fetchAllTickets.fulfilled]: (state, { payload }) => {
			state.tickets = payload.data;
		},
	},
});

export const { reducer } = appSlice;
export { fetchAllTickets };
