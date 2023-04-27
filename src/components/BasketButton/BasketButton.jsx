import { SlBasket } from "react-icons/sl";

import sass from "./BasketButton.module.scss";
import { useSelector } from "react-redux";

export const BasketButton = ({ setToggleBasket }) => {

	const orderList = useSelector(state => state.orderList.orderList);

	return (
		<div className={sass.basket}>
			<button onClick={() => setToggleBasket(prev => !prev)} className={sass.basket__btn}>
				<span className={sass.countProducts}>{orderList.length}</span>
				<SlBasket size={35} />
			</button>
		</div>
	)
}