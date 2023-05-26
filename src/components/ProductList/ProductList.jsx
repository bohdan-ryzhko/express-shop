import sass from "./ProductList.module.scss";
import { Product } from "../Product/Product";
import { ProductTitle } from "../ProductTitle/ProductTitle";
import { useEffect, useState } from "react";
import { LoadMoreButton } from "components/LoadMoreButton/LoadMoreButton";
import { useLocation } from "react-router-dom";

import { fetchProduct } from "services/fetchProduct";
import { SceletonSchema } from "components/SceletonSchema/SceletonSchema";
import { ErrorPage } from "pages/ErrorPage/ErrorPage";

import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { CastomMultiRange } from "components/CastomMultyRange/CastomMultiRange";
import { getMinPrice, getMaxPrice } from "services/calcPrice";

import { changeSortBy } from "services/changeSortBy";
import { fetchProductsSortByPrice } from "services/fetchProductsSortByPrice";

import { regexSplitLetters } from "constants/regexSplitLetters";

const getPaginationList = (array, paginationNumber) => {
	return array.filter((product, idx) => idx >= paginationNumber ? null : product);
}

export const ProductList = ({ title }) => {
	const [productList, setProductList] = useState([]);
	const [limit, setLimit] = useState(12);
	const [isLoad, setIsLoad] = useState(false);
	const [totalProducts, setTotalProducts] = useState(0);
	const [error, setError] = useState(null);
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);
	const [sortBy, setSortBy] = useState("asc");
	const [sortedProductsItems, setSortedProductsItems] = useState([]);
	const [isSortedList, setIsSortedList] = useState(false);

	const { pathname } = useLocation();
	const searchProduct = pathname.split(regexSplitLetters).join("");

	useEffect(() => {
		setIsLoad(true);

		fetchProductsSortByPrice(searchProduct, sortBy)
			.then(data => {
				console.log(data);
				if (data.status !== 200) throw new Error(data);
				setMinPrice(getMinPrice(data.data));
				setMaxPrice(getMaxPrice(data.data));
				if (isSortedList) {
					setSortedProductsItems(getPaginationList(data.data, limit));
					setIsLoad(false);
				}
			});
	}, [searchProduct, sortBy, limit, isSortedList]);

	useEffect(() => {
		setIsLoad(true);
		// setIsSortedList(false);
		setSortBy("asc");

		fetchProduct(searchProduct, limit)
			.then(data => {
				if (data.status !== 200) throw new Error(data);
				setError(null);
				setProductList(data.data.products);
				setTotalProducts(data.data.count);
				setMinPrice(getMinPrice(data.data.products));
				setMaxPrice(getMaxPrice(data.data.products));
				setIsLoad(false);
			})
			.catch(error => {
				console.log(error);
				setError(error);
				setIsLoad(false)
			});
	}, [limit, searchProduct, isSortedList, sortBy]);

	const handleLoadMore = () => {
		setLimit(prevState => prevState + 12);
	}

	const onSortProducts = ({ target }) => {
		console.log(target.name);
		setIsSortedList(true);
		setSortBy(changeSortBy);
	}

	return (
		<>
			{
				(isLoad && limit <= 12) && <SceletonSchema />
			}
			{
				error
					? <ErrorPage title={title} />
					: (
						<main className={sass.main__productPage}>
							<div className="container">
								<div className={sass.product__listInner}>
									<span className={sass.quantityPosition}>Кількість позицій: {totalProducts}</span>
									<button
										onClick={onSortProducts}
										name={sortBy}
										type="button">Sort
										{sortBy === "asc" && <FiArrowDown />}
										{sortBy === "desc" && <FiArrowUp />}
									</button>
									<CastomMultiRange
										min={minPrice}
										max={maxPrice}
										onChange={(obj) => console.log(obj)}
									/>
									<ProductTitle title={title} />
									<ul className={sass.product__list}>
										{
											(!isSortedList && productList.length > 0) &&
											productList.map(product => <Product product={product} key={product._id} />)
										}
									</ul>
									<ul className={sass.product__list}>
										{
											(isSortedList && sortedProductsItems.length > 0) &&
											sortedProductsItems.map(product => <Product product={product} key={product._id} />)
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
					)
			}
		</>
	)
}
