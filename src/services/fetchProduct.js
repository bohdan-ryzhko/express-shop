import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api/products/"

export const fetchProduct = async (product, limit) => {
	try {
		return await axios.get(product, {
			params: {
				limit,
			}
		});
	} catch (error) {
		console.log(error);
	}
}
