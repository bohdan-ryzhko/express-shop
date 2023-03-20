import sass from './Footer.module.scss';

export const Footer = props => (
  <footer>
    <div className={sass.footerWrapper}>
      <ul className={sass.socialList}>
        <li>
          <a href="https://instagram.com">
            <svg className={sass.icon} width="32" height="32">
              <use href="./images/sptite.svg#icon-instagram"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <svg className={sass.icon} width="32" height="32">
              <use href="./images/sptite.svg#icon-facebook"></use>
            </svg>
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
            <svg className={sass.icon} width="32" height="32">
              <use href="./images/sptite.svg#icon-twitter"></use>
            </svg>
          </a>
        </li>
      </ul>
      <ul className={sass.infoBlock}>
        <li>Контакти</li>
        <li>Про нас</li>
        <li>Доставка</li>
      </ul>
    </div>
    <span className={sass.CR}>Expess shop 2023© Всі права захищені </span>
  </footer>
);
