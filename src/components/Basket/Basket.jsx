import sass from "./Basket.module.scss";
import { useSelector } from "react-redux";
import { BasketProduct } from "components/BasketProduct/BasketProduct";
import { Link } from "react-router-dom";
import { CloseBtn } from "components/CloseBtn/CloseBtn";

export const Basket = ({ setToggleBasket, toggleBasket, quantityProduct, setQuantityProduct }) => {
	const orderList = useSelector(state => state.orderList.orderList);
	const totalPrice = orderList.reduce((total, { count_price }) => total += Number(count_price), 0);

	return (
		<>
			<div onClick={() => setToggleBasket(prev => !prev)} className={toggleBasket ? sass.basketBackdropActive : sass.basketBackdrop}></div>
			<div className={toggleBasket ? sass.basketBodyActive : sass.basketBody}>
				<CloseBtn onClick={() => setToggleBasket(prev => !prev)} />
				<div className={sass.basketInner}>
					<h3 className={sass.basketTitlte}>Кошик</h3>
					<ul className={sass.orderList}>
						{
							orderList.length < 1
								? <p style={{ fontSize: 20 }}>Ваш кошик пустий</p>
								: <>
									{
										orderList.map(product => <BasketProduct
											setQuantityProduct={setQuantityProduct}
											quantityProduct={quantityProduct}
											product={product}
											key={product.id}
										/>)
									}
								</>
						}
					</ul>
					<p className={sass.totalPrice}>Всього: {totalPrice} {orderList[0]?.currencyId}</p>
				</div>
				{
					orderList.length > 0 &&
					<Link onClick={() => setToggleBasket(prev => !prev)} className={sass.makeOrderLink} to="order-page">Оформити замовлення</Link>
				}
			</div>
		</>
	)
}