import { BsBasket2Fill } from "react-icons/bs";

import sass from "./BasketButton.module.scss";
import { useSelector } from "react-redux";

export const BasketButton = ({ setToggleBasket }) => {

	const orderList = useSelector(state => state.orderList);

	return (
		<div className={sass.basket}>
			<button onClick={() => setToggleBasket(prev => !prev)} className={sass.basket__btn}>
				<span className={sass.countProducts}>{orderList.length}</span>
				<BsBasket2Fill size={35} />
			</button>
		</div>
	)
}