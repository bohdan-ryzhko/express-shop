import { createAction, createReducer } from "@reduxjs/toolkit";

import { handleAddProduct, handleRemoveProduct } from "./reducers";

export const addProduct = createAction("basketOrders/addProduct");
export const removeProduct = createAction("basketOrders/removeProduct");

export const orderReducer = createReducer([], {
	[addProduct]: handleAddProduct,
	[removeProduct]: handleRemoveProduct,
});
