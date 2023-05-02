import { OrderError } from "components/OrderError/OrderError";
import sass from "./OrderPage.module.scss";
import { FormOrder } from "components/FormOrder/FormOrder";
import { OrderInfo } from "components/OrderInfo/OrderInfo";
import { OrderSuccess } from "components/OrderSuccess/OrderSuccess";
import { useState } from "react";
import { useSelector } from "react-redux";

export const OrderPage = () => {
	const [orderSuccess, setOrderSuccess] = useState(null);
	const [orderError, setOrderError] = useState(null);

	const orderList = useSelector(state => state.orderList.orderList);
	const totalPrice = orderList.reduce((total, { count_price }) => total += Number(count_price), 0);

	return (
		<section className={sass.orderPage}>
			{
				orderSuccess &&
				<OrderSuccess order={orderSuccess} setOrderSuccess={setOrderSuccess} />
			}
			<div className="container">
				{
					orderError &&
					<OrderError error={orderError} />
				}
				<div className={sass.orderInner}>
					<h2 className={sass.orderTitle}>Оформлення замовлення</h2>
					<div className={sass.orderWrapper}>
						<div className={sass.orderForm}>
							<FormOrder setOrderSuccess={setOrderSuccess} setOrderError={setOrderError} />
						</div>
						<div className={sass.orderInfo}>
							<OrderInfo />
						</div>
						<div>
							<span className={sass.totalTitle}>Всього: </span>
							<span>{totalPrice} {orderList[0]?.currencyId}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}