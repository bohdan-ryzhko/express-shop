import sass from "./ProductList.module.scss";
import { Product } from "./Product/Product";
import { ProductTitle } from "./ProductTitle/ProductTitle";
import { useState } from "react";
import { LoadMoreButton } from "components/LoadMoreButton/LoadMoreButton";
import { PAGINATION_ITEMS_COUNT } from "constants/paginationItem";

export const ProductList = ({ list, title }) => {
	const [countPosition, setCountPosition] = useState(PAGINATION_ITEMS_COUNT);

	const handleLoadMore = () => {
		setCountPosition(prevState => prevState + PAGINATION_ITEMS_COUNT);
	}

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
							filteredList.map(product =>
								<Product product={product} key={product.id} />
							)
						}
					</ul>
					{
						countPosition < list.length &&
						<div className={sass.pagination}>
								<LoadMoreButton text="Завантажити ще" handleClick={handleLoadMore} />
						</div>
					}
				</div>
			</div>
		</main>
	)
}