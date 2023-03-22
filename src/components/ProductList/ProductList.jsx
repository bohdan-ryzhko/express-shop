import sass from "./ProductList.module.scss";
import { Product } from "./Product/Product";
import { ProductTitle } from "./ProductTitle/ProductTitle";

export const ProductList = ({ list, title }) => {
	console.log(list);
	return (
		<main className="main__product-page">
			<div className="container">
				<div className="product__list-inner">
					<ProductTitle title={title} />
					<ul className={sass.product__list}>
						{
							list.map((product) =>
								<Product product={product} key={product.vendorCode} />)
						}
					</ul>
				</div>
			</div>
		</main>
	)
}