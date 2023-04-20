import { FormOrder } from "components/FormOrder/FormOrder";
import sass from "./OrderPage.module.scss";

export const OrderPage = () => {
	return (
		<section className={sass.orderPage}>
			<div className="container">
				<div className={sass.orderInner}>
					<h2 className={sass.orderTitle}>Оформлення замовлення</h2>
					<FormOrder />
				</div>
			</div>
		</section>
	)
}