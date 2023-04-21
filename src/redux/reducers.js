import { Notify } from "notiflix";

export const handleAddProduct = (state, { payload }) => {
	const isRepeatProduct = state.some(({ id }) => id === payload.id);
	if (isRepeatProduct) return Notify.failure(`${payload.name_ua} вже є у кошику`);

	Notify.success(`${payload.name_ua} у кошику`);
	return [...state, payload];
}

export const handleRemoveProduct = (state, { payload }) => state.filter(({ id }) => id !== payload);

export const handleAddProductToLocalSorage = (state, action) => {
	return [...state, ...action.payload];
}