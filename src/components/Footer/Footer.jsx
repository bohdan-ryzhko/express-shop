import sass from './Footer.module.scss';

import { BsInstagram, BsFacebook, BsTelegram, BsTiktok } from 'react-icons/bs';

export const Footer = () => (
  <footer className={sass.footer}>
      <div className="container">
        <div className={sass.footerInner}>
          <ul className={sass.socialList}>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <BsInstagram size={26} />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <BsFacebook size={26} />
              </a>
            </li>
            <li>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
                <BsTiktok size={26} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
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
