import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api/"

export const fetchProduct = async (product, limit) => {
	try {
		const response = await axios.get(product, {
			params: {
				limit,
			}
		});

		return response;
	} catch (error) {
		console.log(error);
	}
}