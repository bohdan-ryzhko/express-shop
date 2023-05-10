import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import orderReducer from "./orderReducer";

import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'orderList',
	storage,
}

const persistedReducer = persistReducer(persistConfig, orderReducer);

export const store = configureStore({
	reducer: {
		orderList: persistedReducer,
		products: productsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);