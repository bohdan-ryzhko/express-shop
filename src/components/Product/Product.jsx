import sass from "./Product.module.scss";
import defaultImg from "../../images/placeholder.jpg";
import { Link, useLocation } from "react-router-dom";

export const Product = ({ product: {
	name_ua,
	name,
	_id,
	currencyId,
	oldprice,
	picture = defaultImg,
	price
} }) => {
	const location = useLocation();

	return (
		<>
			<li className={sass.product__item}>
				<Link style={{height: "100%", width: "100%", display: "inline-block"}} state={{ from: location }} to={`${_id}`} >
					<div className={sass.product__itemWrapper}>
						<div height={280} className={sass.product__itemImg}>
							<div className={sass.product__itemPrice}>
								{oldprice && <p className={sass.product__itemOldprice}>{oldprice} {currencyId}</p>}
								<p>{price} {currencyId}</p>
							</div>
							<img
								height={280}
								src={typeof (picture) === "string" ? picture : picture[0]}
								alt="Main product"
							/>
						</div>
						<h3 className={sass.product__itemName}>{name_ua || name}</h3>
					</div>
				</Link>
			</li>
		</>
	)
}