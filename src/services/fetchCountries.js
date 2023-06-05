import axios from "axios";

export const fetchCountries = async url => {
	try {
		return await axios.get(url);
	} catch (error) {
		console.log(error);
		return error;
	}
}