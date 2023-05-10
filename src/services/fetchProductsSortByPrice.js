import axios from "axios";

export const fetchProductsSortByPrice = async (product, sort) => {
	try {
		return axios.get(`http://localhost:3000/api/${product}`, {
			params: {
				sort,
			}
		});
	} catch (error) {
		console.log(error)
		return error;
	}
}
