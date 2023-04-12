import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { Basket } from "components/Basket/Basket";
// import logo from "images/logo/logo";
import { NavLink } from 'react-router-dom';

import sass from "./Header.module.scss";

export const Header = ({ items }) => {
	return (
		<header className={sass.header}>
			<div className="container">
				<div className={sass.header__inner}>
					<div className={sass.header__top}>
						<HeaderLogo />
					</div>
					<nav>
						<NavLink to="/bags" >Сумки</NavLink>
						<NavLink to="/underwear" >Чоловіча білизна</NavLink>
					</nav>
					<Basket />
					{/* <div className={sass.header__bottom}>
						<CategoryList items={items} />
					</div> */}
				</div>
			</div>
		</header>
	)
}