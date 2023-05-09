import sass from "./OrderListItem.module.scss";

export const OrderListItem = ({ product: { picture, name_ua, name, quantityProduct } }) => {
	return (
		<li className={sass.productItem}>
			{
				Array.isArray(picture)
					? <img className={sass.avatar} width={70} src={picture[0]} alt={name_ua} />
					: <img className={sass.avatar} src={picture} alt={name_ua} />
			}
			<p className={sass.name} >{name_ua || name}</p>
			<p className={sass.quantity} >Кількість: {quantityProduct}</p>
		</li>
	)
}
