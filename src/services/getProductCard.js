export const getProductCard = (product, productId, { underwear, bags }) => {
	const findProduct = ({ id }) => id === productId;
	switch (product) {
		case "underwear":
			return underwear.find(findProduct);
		case "bags":
			return bags.find(findProduct);
		default:
			return {};
	}
}