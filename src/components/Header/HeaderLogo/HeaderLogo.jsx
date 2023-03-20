import headerLogo from '../../../images/logo/logo-1.png';
import sass from './HeaderLogo.module.scss';


export const HeaderLogo = () => {
  return (
    <div className={sass.header__logo}>
      <a className={sass.header__logoLink} href="./index.html">
        <img width={100} height={100} src={headerLogo} alt="Logo" />
      </a>
    </div>
  );
};
