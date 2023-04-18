import sass from "./ProductTitle.module.scss";

export const ProductTitle = ({ title }) => {
	return (
		<h2 className={sass.product__title}>{title}</h2>
	)
}