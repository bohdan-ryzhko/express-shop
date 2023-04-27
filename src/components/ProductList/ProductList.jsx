import sass from "./ProductList.module.scss";
import { Product } from "../Product/Product";
import { ProductTitle } from "../ProductTitle/ProductTitle";
import { useEffect, useState } from "react";
import { LoadMoreButton } from "components/LoadMoreButton/LoadMoreButton";
import { useLocation, useSearchParams } from "react-router-dom";

import { fetchProduct } from "services/fetchProduct";
import { Skeleton } from "@mui/material";

export const ProductList = ({ title }) => {
	const [productList, setProductList] = useState([]);
	const [limit, setLimit] = useState(12);
	const [isLoad, setIsLoad] = useState(false);
	const [totalProducts, setTotalProducts] = useState(0);

	const [, setSearchParams] = useSearchParams();
	const location = useLocation();

	
	useEffect(() => {
		if (location.pathname === "/underwears") {
			setIsLoad(true)
			fetchProduct("underwears", limit)
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
		}

		if (location.pathname === "/bags") {
			setIsLoad(true)
			fetchProduct("bags", limit)
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
		}
	}, [limit, location.pathname]);

	// useEffect(() => {
	// 	setSearchParams({ count: currentPosition });
	// 	setCurrentPosition(currentPosition);
	// }, [setSearchParams, currentPosition, setCurrentPosition]);

	const handleLoadMore = () => {
		setLimit(prevState => prevState + 12);
	}

	return (
		<>
			{
				(isLoad && limit <= 12) &&
				<>
					<div className="container">
						<div className={sass.loaderWrapper}>
							<div className={sass.loaderItem}>
								<Skeleton variant="rounded" sx={{ height: 350 }} />
								<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
							</div>
							<div className={sass.loaderItem}>
								<Skeleton variant="rounded" sx={{ height: 350 }} />
								<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
							</div>
							<div className={sass.loaderItem}>
								<Skeleton variant="rounded" sx={{ height: 350 }} />
								<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
							</div>
							<div className={sass.loaderItem}>
								<Skeleton variant="rounded" sx={{ height: 350 }} />
								<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
							</div>
						</div>
					</div>
				</>
			}
			<main className={sass.main__productPage}>
				<div className="container">
					<div className={sass.product__listInner}>
						<span className={sass.quantityPosition}>Кількість позицій: {totalProducts}</span>
						<ProductTitle title={title} />
						<ul className={sass.product__list}>
							{
								productList.length > 0 &&
								productList.map(product =>
									<Product product={product} key={product.id} />
								)
							}
						</ul>
						{
							isLoad &&
							<>
								<div className="container">
									<div className={sass.loaderWrapper}>
										<div className={sass.loaderItem}>
											<Skeleton variant="rounded" sx={{ height: 350 }} />
											<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
										</div>
										<div className={sass.loaderItem}>
											<Skeleton variant="rounded" sx={{ height: 350 }} />
											<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
										</div>
										<div className={sass.loaderItem}>
											<Skeleton variant="rounded" sx={{ height: 350 }} />
											<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
										</div>
										<div className={sass.loaderItem}>
											<Skeleton variant="rounded" sx={{ height: 350 }} />
											<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
										</div>
									</div>
								</div>
							</>
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
