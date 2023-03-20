import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { ProductList } from "../ProductList/ProductList";
import { Basket } from "components/Basket/Basket";
// import logo from "images/logo/logo";

import sass from "./Header.module.scss";

export const Header = ({ items }) => {
	return (
		<header className={sass.header}>
			<div className="container">
				<div className={sass.header__inner}>
					<HeaderLogo />
					<Basket />
					<ProductList items={items} />
				</div>
			</div>
		</header>
	)
}