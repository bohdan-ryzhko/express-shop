import { createSlice } from "@reduxjs/toolkit";
import { getAllSortProducts } from "./operations";

const initialState = {
	items: [],
	isLoad: false,
	error: null,
}

const productsSlice = createSlice({
	name: "products",
	initialState,
	extraReducers: {
		[getAllSortProducts.pending](state) {
			state.isLoad = true;
		},
		[getAllSortProducts.fulfilled](state, action) {
			state.isLoad = false;
			state.error = null;
			state.items = action.payload;
		},
		[getAllSortProducts.rejected](state, action) {
			state.isLoad = false;
			state.error = action.payload;
		}
	}
});

export const productsReducer = productsSlice.reducer;