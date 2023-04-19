import sass from './Footer.module.scss';

import { BsInstagram, BsFacebook, BsTelegram } from 'react-icons/bs';

export const Footer = () => (
  <footer className={sass.footer}>
      <div className="container">
        <div className={sass.footerInner}>
          <ul className={sass.socialList}>
            <li>
              <a href="https://instagram.com">
                <BsInstagram size={26} />
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <BsFacebook size={26} />
              </a>
            </li>
            <li>
              <a href="https://prom.ua">
                <svg className={sass.icon} width="32" height="32">
                  <use href="./images/sptite.svg#icon-sphere"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <BsTelegram size={26} />
              </a>
            </li>
          </ul>
          <ul className={sass.infoBlock}>
            <li>Контакти</li>
            <li>Про нас</li>
            <li>Доставка</li>
          </ul>
        </div>
      </div>
    <span className={sass.CR}>Expess shop 2023© Всі права захищені </span>
  </footer>
);
