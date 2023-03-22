import sass from './CategoryLink.module.scss';

export const CategoryLink = ({ children }) => {
  return (
    <a className={sass.product__link} href="./index.html">
      {children}
    </a>
  );
};
