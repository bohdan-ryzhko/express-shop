import { BsBasket2Fill } from "react-icons/bs";

import sass from "./Basket.module.scss";

export const Basket = () => {
	return (
		<div className={sass.basket}>
			<button className={sass.basket__btn}>
				<BsBasket2Fill size={20} />
			</button>
		</div>
	)
}