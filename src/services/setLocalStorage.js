import { ORDER_LIST } from 'constants/localItems';

const setEmptyLocalOrder = () => localStorage.setItem(ORDER_LIST, JSON.stringify([]));

const setOrder = (object) => {
	const orderList = JSON.parse(localStorage.getItem(ORDER_LIST));
	localStorage.setItem(ORDER_LIST, JSON.stringify([...orderList, object]));
}

export const setOrderToLocal = (product) => {
	const orderList = JSON.parse(localStorage.getItem(ORDER_LIST));
	const isRepeatProduct = orderList?.some(({ id }) => id === product.id);

	if (!orderList) {
		setEmptyLocalOrder();
		setOrder(product);
		return;
	}

	if (isRepeatProduct) return;

	setOrder(product);
}

export const removeLocalProduct = (id) => {
	const orderList = JSON.parse(localStorage.getItem(ORDER_LIST));
	const filteredLocal = orderList.filter(product => product.id !== id);
	localStorage.setItem(ORDER_LIST, JSON.stringify(filteredLocal));
}