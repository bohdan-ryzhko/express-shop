import sass from "./ProductList.module.scss";
import { Product } from "../Product/Product";
import { ProductTitle } from "../ProductTitle/ProductTitle";
import { useEffect } from "react";
import { LoadMoreButton } from "components/LoadMoreButton/LoadMoreButton";
import { PAGINATION_ITEMS_COUNT } from "constants/paginationItem";
import { useSearchParams } from "react-router-dom";

export const ProductList = ({ list, title, currentPosition, setCurrentPosition }) => {

	const [, setSearchParams] = useSearchParams();

	useEffect(() => {
		setSearchParams({ count: currentPosition });
		setCurrentPosition(currentPosition);
	}, [setSearchParams, currentPosition, setCurrentPosition]);

	const handleLoadMore = () => {
		setCurrentPosition(prevState => prevState + PAGINATION_ITEMS_COUNT);
	}

	const filteredList = list.filter((product, index) =>
		index < currentPosition ? product : null);

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
						currentPosition < list.length &&
						<div className={sass.pagination}>
								<LoadMoreButton text="Завантажити ще" handleClick={handleLoadMore} />
						</div>
					}
				</div>
			</div>
		</main>
	)
}