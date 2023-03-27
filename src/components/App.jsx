import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Fragment } from 'react';
// import { MainPage } from './MainPage/MainPage';

import headerUrls from '../data/header_link';
// import underwear from "../data/underwear";
// import bags from "../data/bags";
// import { ProductList } from './ProductList/ProductList';
import { FormOrder } from './Form/FormOrder';
import PersonalPizza from './Clock/Clock';

// const { yml_catalog: { shop: { categories: { category: { underwearTitle } }, offers: { underwearOffer } } } } = underwear;
// const { yml_catalog: { shop: { categories: { category: { bagsTitlte } }, offers: { bagsOffer } } } } = bags;

export const App = () => {
  return (
    <Fragment>
      <Header items={headerUrls} />
      {/* <MainPage /> */}
      {/* <ProductList title={underwearTitle} list={underwearOffer} /> */}
      {/* <ProductList title={bagsTitlte} list={bagsOffer} /> */}
      <FormOrder />
      <Footer />

      <PersonalPizza/>
    </Fragment>
  );
};
