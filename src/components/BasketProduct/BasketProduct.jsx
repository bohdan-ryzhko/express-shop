import sass from "./BasketProduct.module.scss";
import { useDispatch } from "react-redux";
import { removeProduct } from "redux/orderReducer";
import { TfiTrash } from 'react-icons/tfi';

export const BasketProduct = ({ product: { picture, quantityProduct, name_ua, price, currencyId, id } }) => {
	const dispatch = useDispatch();

	const handleRemoveProduct = () => {
		dispatch(removeProduct(id))
	}

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
			<p className={sass.productQuantity}>Кількість: {quantityProduct}</p>
			<p>{price} {currencyId}</p>
		</li>
	)
}
