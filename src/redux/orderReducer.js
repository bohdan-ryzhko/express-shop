import { createAction, createReducer } from "@reduxjs/toolkit";

export const addProduct = createAction("basketOrders/addProduct");
export const removeProduct = createAction("basketOrders/removeProduct");

export const orderReducer = createReducer([], {
	[addProduct]: (state, action) => [...state, action.payload],
	[removeProduct]: (state, action) => state.filter(product => product.id !== action.payload)
});
