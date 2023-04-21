import axios from "axios";

export const fetchCountries = async (url) => {
	try {
		const response = await axios.get(url);

		if (response.status !== 200) {
			return Promise.reject(response);
		}

		return response;
	} catch (error) {
		console.log(error);
		return error;
	}
}