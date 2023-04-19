import sass from "./Basket.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from 'react-icons/md';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { removeProduct } from "redux/orderReducer";

export const Basket = ({ setToggleBasket, toggleBasket }) => {

	const dispatch = useDispatch();

	const orderList = useSelector(state => state.orderList);
	console.log(orderList);

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
					<ul className="orderList">
						{
							orderList.length < 1
								? "Ваш кошик пустий"
								: <>
									{
										orderList.map(product => <li key={product.id}>
											<p>{product.name}</p>
											<button onClick={() => dispatch(removeProduct(product.id))}>
												<BsFillTrash3Fill />
											</button>
										</li>)
									}
								</>
						}
					</ul>
				</div>
			</div>
		</div>
	)
}