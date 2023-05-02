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
		changeQuantityProduct({ orderList }, { payload }) {
			const findProduct = orderList.find(product => product._id === payload.id);
			if (payload.target === "decrement" && findProduct.quantityProduct === 1) return;
			findProduct.quantityProduct += payload.value;
			findProduct.count_price = findProduct.quantityProduct * Number(findProduct.price);
		}
	}
});

export const { addProduct, removeProduct, changeQuantityProduct } = orderSlice.actions;
export default orderSlice.reducer;
