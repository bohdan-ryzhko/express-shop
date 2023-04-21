import sass from "./OrderPage.module.scss";
import { FormOrder } from "components/FormOrder/FormOrder";
import { OrderInfo } from "components/OrderInfo/OrderInfo";

export const OrderPage = () => {
	return (
		<section className={sass.orderPage}>
			<div className="container">
				<div className={sass.orderInner}>
					<h2 className={sass.orderTitle}>Оформлення замовлення</h2>
					<div className={sass.orderWrapper}>
						<div className={sass.orderInfo}>
							<OrderInfo />
						</div>
						<div className={sass.orderForm}>
							<FormOrder />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}