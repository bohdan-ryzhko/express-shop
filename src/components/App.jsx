import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Fragment } from 'react';
// import Card from './Card/Card';
// import { MainPage } from './MainPage/MainPage';

import underwear from '../data/underwear';
import bags from "../data/bags";
import { ProductList } from './ProductList/ProductList';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';

const {
  yml_catalog: {
    shop: {
      categories: {
        category: { underwearTitle },
      },
      offers: { underwearOffer },
    },
  },
} = underwear;

const { yml_catalog: { shop: { categories: { category: { bagsTitlte } }, offers: { bagsOffer } } } } = bags;

export const App = () => {
  return (
    <Fragment>
      <Header />
      {/* <Card /> */}
      {/* <MainPage /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<ProductList title={bagsTitlte} list={bagsOffer} />} />
        <Route path="/underwear" element={<ProductList title={underwearTitle} list={underwearOffer} />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};
