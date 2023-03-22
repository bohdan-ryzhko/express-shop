import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { CategoryList } from "../CategoryList/CategoryList";
import { Basket } from "components/Basket/Basket";
// import logo from "images/logo/logo";

import sass from "./Header.module.scss";

export const Header = ({ items }) => {
	return (
		<header className={sass.header}>
			<div className="container">
				<div className={sass.header__inner}>
					<div className={sass.header__top}>
						<HeaderLogo />
					</div>
					<div className={sass.header__bottom}>
						<CategoryList items={items} />
						<Basket />
					</div>
				</div>
			</div>
		</header>
	)
}