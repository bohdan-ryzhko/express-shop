import sass from "./Header.module.scss";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { Basket } from "components/Basket/Basket";
import { NavLink } from 'react-router-dom';


export const Header = () => {
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
						<Basket />
					</div>
				</div>
			</div>
		</header>
	)
}