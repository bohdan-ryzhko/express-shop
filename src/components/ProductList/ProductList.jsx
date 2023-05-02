import sass from "./ProductList.module.scss";
import { Product } from "../Product/Product";
import { ProductTitle } from "../ProductTitle/ProductTitle";
import { useEffect, useState } from "react";
import { LoadMoreButton } from "components/LoadMoreButton/LoadMoreButton";
import { useLocation } from "react-router-dom";

import { fetchProduct } from "services/fetchProduct";
import { SceletonSchema } from "components/SceletonSchema/SceletonSchema";

export const ProductList = ({ title }) => {
	const [productList, setProductList] = useState([]);
	const [limit, setLimit] = useState(12);
	const [isLoad, setIsLoad] = useState(false);
	const [totalProducts, setTotalProducts] = useState(0);

	const { pathname } = useLocation();

	useEffect(() => {
		setIsLoad(true);
		const searchProduct = pathname.split(/[^A-Za-z]/).join("");

		fetchProduct(searchProduct, limit)
			.then(data => {
				if (data.status !== 200) return Promise.reject(data);
				setProductList(data.data.products);
				setTotalProducts(data.data.count)
				console.log(data);
				setIsLoad(false)
			})
			.catch(error => {
				console.log(error)
				setIsLoad(false)
			});
	}, [limit, pathname]);

	const handleLoadMore = () => {
		setLimit(prevState => prevState + 12);
	}

	return (
		<>
			{
				(isLoad && limit <= 12) &&
				<SceletonSchema />
			}
			<main className={sass.main__productPage}>
				<div className="container">
					<div className={sass.product__listInner}>
						<span className={sass.quantityPosition}>Кількість позицій: {totalProducts}</span>
						<ProductTitle title={title} />
						<ul className={sass.product__list}>
							{
								productList.length > 0 &&
								productList.map(product => <Product product={product} key={product.id} />)
							}
						</ul>
						{
							isLoad &&
							<SceletonSchema />
						}
						{
							limit < totalProducts &&
							<div className={sass.pagination}>
								<LoadMoreButton text="Завантажити ще" handleClick={handleLoadMore} />
							</div>
						}
					</div>
				</div>
			</main>
		</>
	)
}
