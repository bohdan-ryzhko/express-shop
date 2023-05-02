import sass from "./BasketProduct.module.scss";
import { useDispatch } from "react-redux";
import { changeQuantityProduct, removeProduct } from "redux/orderReducer";
import { TfiTrash } from 'react-icons/tfi';

export const BasketProduct = ({ product: { picture, name_ua, quantityProduct, count_price, currencyId, id, _id } }) => {
	const dispatch = useDispatch();
	const handleRemoveProduct = () => dispatch(removeProduct(id));

	const changeQuantity = value => ({ target }) => {
		// if (quantityProduct === 1 && target.name === "decrement") {
		// 	return;
		// }
		dispatch(changeQuantityProduct({ id: _id, value, target: target.name }))
	};

	return (
		<li className={sass.productItem}>
			<div className={sass.productWrapper}>
				<div className={sass.productImg}>
					<img width={50} src={Array.isArray(picture) ? picture[0] : picture} alt="" />
				</div>
				<p className={sass.productName}>{name_ua}</p>
				<button className={sass.removeBtn} onClick={handleRemoveProduct}>
					<TfiTrash size={20} />
				</button>
			</div>
			<div className={sass.productQuantity}>
				<p>Кількість:</p>
				<button name="decrement" onClick={changeQuantity(-1)}>-</button>
				{quantityProduct}
				<button name="increment" onClick={changeQuantity(1)}>+</button>
			</div>
			<p>{count_price} {currencyId}</p>
		</li>
	)
}
