import sass from "./OrderPage.module.scss";
import { FormOrder } from "components/FormOrder/FormOrder";
import { OrderInfo } from "components/OrderInfo/OrderInfo";
import { useSelector } from "react-redux";

export const OrderPage = () => {
	const orderList = useSelector(state => state.orderList.orderList);
	const totalPrice = orderList.reduce((total, { count_price }) => total += Number(count_price), 0);

	return (
		<section className={sass.orderPage}>
			<div className="container">
				<div className={sass.orderInner}>
					<h2 className={sass.orderTitle}>Оформлення замовлення</h2>
					<div className={sass.orderWrapper}>
						<div className={sass.orderForm}>
							<FormOrder />
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