import sass from "./OrderListItem.module.scss";

export const OrderListItem = ({ product: { picture, name_ua } }) => {
	return (
		<li className={sass.productItem}>
			{
				Array.isArray(picture)
					? <img width={300} src={picture[0]} alt={name_ua} />
					: <img src={picture} alt={name_ua} />
			}
			<h4>{name_ua}</h4>
		</li>
	)
}