import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix";

export const orderSlice = createSlice({
	name: "basketOrders",
	initialState: {
		orderList: [],
	},
	reducers: {
		addProduct({ orderList }, { payload }) {
			const repeatOrder = orderList.some(product => product.id === payload.id);

			if (repeatOrder) return Notify.failure(`${payload.name_ua} вже є у кошику`);

			Notify.success(`${payload.name_ua} додан до кошику`);
			orderList.push(payload);
		},
		removeProduct({ orderList }, { payload }) {
			const removedIndex = orderList.findIndex(order => order.id === payload);
			orderList.splice(removedIndex, 1);
		},
	}
});

export const { addProduct, removeProduct } = orderSlice.actions;
export default orderSlice.reducer;
