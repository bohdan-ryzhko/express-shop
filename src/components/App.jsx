import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Fragment } from 'react';
// import { MainPage } from './MainPage/MainPage';

import headerUrls from '../data/header_link';
import underwear from "../data/underwear";
// import bags from "../data/bags";
import { ProductList } from './ProductList/ProductList';

export const App = () => {
  return (
    <Fragment>
      <Header items={headerUrls} />
      {/* <MainPage /> */}
      <ProductList title={"Брендова чоловіча білизна"} list={underwear} />
      {/* <ProductList title={"Сумки"} list={bags} /> */}
      <Footer />
    </Fragment>
  );
};
