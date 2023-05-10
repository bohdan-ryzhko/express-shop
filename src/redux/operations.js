import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllSortProducts = createAsyncThunk(
	"products/fetchAll",
	async ({ product, sort }, thunkAPI) => {
		try {
		const response = await axios.get(`http://localhost:3000/api/${product}`, {
			params: {
				sort,
			}
		});
			return response.data;
	} catch (error) {
		console.log(error)
		return thunkAPI.rejectWithValue(error);
	}
});
