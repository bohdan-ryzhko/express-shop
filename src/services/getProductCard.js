export const getProductCard = (product, productId, { underwear, bags }) => {
	switch (product) {
		case "underwear":
			return underwear.find(({ id }) => id === productId);
		case "bags":
			return bags.find(({ id }) => id === productId);
		default:
			return {};
	}
}