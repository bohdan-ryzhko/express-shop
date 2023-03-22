import sass from "./Product.module.scss";
import defaultImg from "../../../images/placeholder.jpg";
import { sizeImages } from "constants/sizes";

export const Product = ({ product: {
	name_ua,
	currencyId,
	oldprice,
	picture = defaultImg,
	price
} }) => {

	const { height } = sizeImages;

	return (
		<li className={sass.product__item}>
			<div className={sass.product__itemWrapper}>
				<div className={sass.product__itemImg}>
					<div className={sass.product__itemPrice}>
						{oldprice && <p className={sass.product__itemOldprice}>{oldprice} {currencyId}</p>}
						<p>{price} {currencyId}</p>
					</div>
					<img
						height={height}
						src={typeof (picture) === "string" ? picture : picture[0]}
						alt="Main product"
					/>
				</div>
				<h3 className={sass.product__itemName}>{name_ua}</h3>
			</div>
		</li>
	)
}