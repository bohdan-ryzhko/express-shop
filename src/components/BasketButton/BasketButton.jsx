import { BsBasket2Fill } from "react-icons/bs";

import sass from "./BasketButton.module.scss";

export const BasketButton = ({ setToggleBasket }) => {
	return (
		<div className={sass.basket}>
			<button onClick={() => setToggleBasket(prev => !prev)} className={sass.basket__btn}>
				<BsBasket2Fill size={20} />
			</button>
		</div>
	)
}