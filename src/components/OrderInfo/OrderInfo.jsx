import sass from "./OrderInfo.module.scss";
import { OrderListItem } from "components/OrderListItem/OrderListItem";
import { useSelector } from "react-redux";

export const OrderInfo = () => {
	const listOrder = useSelector(state => state.orderList.orderList)

	return (
		<ul className={sass.orderList}>
			{
				listOrder.map(product => <OrderListItem key={product.id} product={product} />)
			}
		</ul>
	)
}
