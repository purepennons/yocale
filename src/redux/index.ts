import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import { reducer as appReducer } from "./slices/app";

const rootReducer = combineReducers({
	app: appReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		const enhancedMiddleware = [];

		if (process.env.NODE_ENV !== 'production') {
			const logger = createLogger({});
			enhancedMiddleware.push(logger);
		}

		return getDefaultMiddleware().concat(enhancedMiddleware);
	},
	devTools: process.env.NODE_ENV !== 'production',
});
