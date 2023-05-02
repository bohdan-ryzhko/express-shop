import sass from "./ProductList.module.scss";
import { Product } from "../Product/Product";
import { ProductTitle } from "../ProductTitle/ProductTitle";
import { useEffect, useState } from "react";
import { LoadMoreButton } from "components/LoadMoreButton/LoadMoreButton";
import { useLocation } from "react-router-dom";

import { fetchProduct } from "services/fetchProduct";
import { SceletonSchema } from "components/SceletonSchema/SceletonSchema";
import { ErrorPage } from "pages/ErrorPage/ErrorPage";

export const ProductList = ({ title }) => {
	const [productList, setProductList] = useState([]);
	const [limit, setLimit] = useState(12);
	const [isLoad, setIsLoad] = useState(false);
	const [totalProducts, setTotalProducts] = useState(0);
	const [error, setError] = useState(null);

	const { pathname } = useLocation();

	useEffect(() => {
		setIsLoad(true);
		const searchProduct = pathname.split(/[^A-Za-z]/).join("");

		const pr = new Promise((res, rej) => {
			res("res");
		});
		console.log(typeof pr);

		fetchProduct(searchProduct, limit)
			.then(data => {
				if (data.status !== 200) return Promise.reject(data);
				setError(null);
				setProductList(data.data.products);
				setTotalProducts(data.data.count);
				console.log(data);
				setIsLoad(false)
			})
			.catch(error => {
				console.log(error);
				setError(error);
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
			{
				error
					? <ErrorPage title={title} />
					: <main className={sass.main__productPage}>
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
			}
		</>
	)
}
