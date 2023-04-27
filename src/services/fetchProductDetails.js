import axios from "axios";

export const fetchProductDetails = async (product, productId) => {
	try {
		return await axios.get(`http://localhost:3000/api/${product}/${productId}`)
	} catch (error) {
		console.log(error);
	}
}
