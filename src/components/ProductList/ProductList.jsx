import { ProductLink } from "./ProductLink/ProductLink";
import sass from "./ProductList.module.scss";

export const ProductList = ({ items }) => {
	return (
		<nav className={sass.navigation}>
			<ul className={sass.product__list}>
				{items.map(({ linkName, id }) => <li key={id} className={sass.product__item}>
					<ProductLink>{linkName}</ProductLink>
				</li>)}
			</ul>
		</nav>
	)
}