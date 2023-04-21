import { createAction, createReducer } from "@reduxjs/toolkit";

import { handleAddProduct, handleRemoveProduct, handleAddProductToLocalSorage } from "./reducers";

export const addProduct = createAction("basketOrders/addProduct");
export const removeProduct = createAction("basketOrders/removeProduct");
export const addProductToLocalSorage = createAction("basketOrders/addProductToLocalSorage");

export const orderReducer = createReducer([], {
	[addProduct]: handleAddProduct,
	[removeProduct]: handleRemoveProduct,
	[addProductToLocalSorage]: handleAddProductToLocalSorage,
});
