import sass from "./Header.module.scss";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import { BasketButton } from "components/BasketButton/BasketButton";
import { NavLink } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from "react";
import { CloseBtn } from "components/CloseBtn/CloseBtn";

export const Header = ({ setToggleBasket }) => {

	const [openMenu, setOpenMenu] = useState(false);

	return (
		<header className={sass.header}>
			<div className="container">
				<div className={sass.header__inner}>
					<div className={sass.header__top}>
						<HeaderLogo />
					</div>
					<div className={sass.header__bottom}>

						<div className={sass.burgerBtn}>
							<button className={sass.openMenuMobile} onClick={() => setOpenMenu(prev => !prev)} type="button">
								<HiMenuAlt1 size={30} />
							</button>
						</div>

						<div className={openMenu ? sass.backdropNavMenuActive : sass.backdropNavMenu}>
							<nav className={sass.headerNavMenu}>
								<CloseBtn onClick={() => setOpenMenu(prev => !prev)} />
								<NavLink className={sass.navLink} to="/bags" >Сумки</NavLink>
								<NavLink className={sass.navLink} to="/underwears" >Чоловіча білизна</NavLink>
								<NavLink className={sass.navLink} to="/socks" >Шкарпетки</NavLink>
								<NavLink className={sass.navLink} to="/linens" >Постільна білизна</NavLink>
								<NavLink className={sass.navLink} to="/glasses" >Окуляри</NavLink>
							</nav>
						</div>

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