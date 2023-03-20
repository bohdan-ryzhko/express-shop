// import logo from "images/logo/logo.png";
import sass from "./HeaderLogo.module.scss";

export const HeaderLogo = () => {
	return (
		<div className={sass.header__logo}>
			<a className={sass.header__logoLink} href="#">
				<img width={150} height={150} src='' alt="Logo" />
			</a>
		</div>
	)
}