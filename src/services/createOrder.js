import axios from "axios";

export const createOrder = async order => {
	try {
		return await axios.post("http://localhost:3000/api/orders", order);
	} catch (error) {
		console.log(error);
		return error;
	}
}