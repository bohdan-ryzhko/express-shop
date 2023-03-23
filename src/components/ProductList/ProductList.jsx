import sass from "./ProductList.module.scss";
import { Product } from "./Product/Product";
import { ProductTitle } from "./ProductTitle/ProductTitle";

export const ProductList = ({ list, title }) => {
	let countPosition = 12;

	const filteredList = list.filter((product, index) =>
		index < countPosition ? product : null);

	return (
		<main className={sass.main__productPage}>
			<div className="container">
				<div className={sass.product__listInner}>
					<span className={sass.quantityPosition}>Кількість позицій: {list.length}</span>
					<ProductTitle title={title} />
					<ul className={sass.product__list}>
						{
							filteredList.map((product) =>
								<Product product={product} key={product.id} />
							)
						}
					</ul>
				</div>
			</div>
		</main>
	)
}