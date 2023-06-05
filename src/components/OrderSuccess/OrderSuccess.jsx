import sass from "./OrderSuccess.module.scss";
import { CloseBtn } from "components/CloseBtn/CloseBtn";

export const OrderSuccess = ({ order: { data: { order } }, setOrderSuccess }) => {
	console.log(order);
	const closeModal = () => {
		setOrderSuccess(null)
	}

	return (
		<>
			<div onClick={closeModal} className={order ? sass.orderBackdropActive : sass.orderBackdrop}></div>
			<div className={sass.orderSuccessModal}>
				<CloseBtn onClick={closeModal} />
				<div className={sass.modalInner}>
					<h3 className={sass.modalTitle}>Замовлення № <span className={sass.orderNumber}>{order.number_of_order}</span> успішно оформлено!</h3>
					<p className={sass.user}>
						<span>{order.name} </span>
						<span>{order.last_name}</span>
						<span>, з Вами зв'яжеться наш менеджер у найближчому часі.</span>
					</p>
					<div className={sass.checkOrder}>
						<p style={{ marginBottom: 20 }} >Будь ласка, перевірте правильність Вашого замовлення:</p>
						<ul className={sass.checkList}>
							{
								order.order_list.map(product => <li key={product.id} className={sass.checkListItem}>
									<p>Назва: {product.name_ua || product.name}</p>
									<p>Кількість: {product.quantityProduct}</p>
									<p>Ціна: {product.count_price}</p>
								</li>)
							}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}