import sass from "./Header.module.scss";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import { BasketButton } from "components/BasketButton/BasketButton";
import { NavLink } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from "react";
import { CloseBtn } from "components/CloseBtn/CloseBtn";
import links from "../../data/header-links";

export const Header = ({ setToggleBasket }) => {
	const [openMenu, setOpenMenu] = useState(false);

	const toggleMenu = () => {
		setOpenMenu(prev => !prev)
	}

	return (
		<header className={sass.header}>
			<div className="container">
				<div className={sass.header__inner}>
					<div className={sass.header__top}>
						<HeaderLogo />
					</div>
					<div className={sass.header__bottom}>

						<div className={sass.burgerBtn}>
							<button className={sass.openMenuMobile} onClick={toggleMenu} type="button">
								<HiMenuAlt1 size={30} />
							</button>
						</div>

						<div className={openMenu ? sass.backdropNavMenuActive : sass.backdropNavMenu}>
							<nav className={sass.headerNavMenu}>
								<CloseBtn onClick={toggleMenu} />
								{
									links.map(link => <NavLink
										onClick={toggleMenu}
										key={link.id}
										className={sass.navLink}
										to={link.to}>{link.text}
									</NavLink>)
								}
							</nav>
						</div>

						<nav className={sass.headerNav}>
							{
								links.map(link => <NavLink
									key={link.id}
									className={sass.navLink}
									to={link.to}
								>{link.text}</NavLink>)
							}
						</nav>
						<BasketButton setToggleBasket={setToggleBasket} />
					</div>
				</div>
			</div>
		</header>
	)
}