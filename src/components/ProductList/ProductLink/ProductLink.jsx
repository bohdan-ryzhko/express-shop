import sass from "./ProductLink.module.scss";

export const ProductLink = ({ children }) => {
	return (
		<a className={sass.product__link} href="">{children}</a>
	)
}