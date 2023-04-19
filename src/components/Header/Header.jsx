import sass from "./Header.module.scss";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import { BasketButton } from "components/BasketButton/BasketButton";
import { NavLink } from 'react-router-dom';


export const Header = ({ setToggleBasket }) => {
	return (
		<header className={sass.header}>
			<div className="container">
				<div className={sass.header__inner}>
					<div className={sass.header__top}>
						<HeaderLogo />
					</div>
					<div className={sass.header__bottom}>
						<nav className={sass.headerNav}>
							<NavLink className={sass.navLink} to="/bags" >Сумки</NavLink>
							<NavLink className={sass.navLink} to="/underwear" >Чоловіча білизна</NavLink>
						</nav>
						<BasketButton setToggleBasket={setToggleBasket} />
					</div>
				</div>
			</div>
		</header>
	)
}