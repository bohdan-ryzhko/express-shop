import { OrderListItem } from "components/OrderListItem/OrderListItem";
import sass from "./OrderInfo.module.scss";
import { useSelector } from "react-redux";

export const OrderInfo = () => {
	const listOrder = useSelector(state => state.orderList)

	console.log(listOrder);

	return (
		<ul className={sass.orderList}>
			{
				listOrder.map(product => <OrderListItem key={product.id} product={product} />)
			}
		</ul>
	)
}
