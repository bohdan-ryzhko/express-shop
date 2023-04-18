import sass from "./Basket.module.scss";
import { MdClose } from 'react-icons/md';

export const Basket = ({ listOrder, setToggleBasket, toggleBasket }) => {
	return (
		<div className={toggleBasket ? sass.basketBackdropActive : sass.basketBackdrop}>
			<div className={sass.basketBody}>
				<button
					onClick={() => setToggleBasket(prev => !prev)}
					className={sass.closeBasketBtn}
				>
					<MdClose size={25}/>
				</button>
				<div className={sass.basketInner}>
					<h3>Кошик</h3>

				</div>
			</div>
		</div>
	)
}