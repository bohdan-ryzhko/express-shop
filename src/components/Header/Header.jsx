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
							<NavLink className={sass.navLink} to="/underwears" >Чоловіча білизна</NavLink>
							<NavLink className={sass.navLink} to="/socks" >Шкарпетки</NavLink>
							<NavLink className={sass.navLink} to="/linens" >Постільна білизна</NavLink>
							<NavLink className={sass.navLink} to="/glasses" >Окуляри</NavLink>
						</nav>
						<BasketButton setToggleBasket={setToggleBasket} />
					</div>
				</div>
			</div>
		</header>
	)
}