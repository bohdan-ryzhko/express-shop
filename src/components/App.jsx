import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Card } from './Card/Card';

import underwearData from '../data/underwear';
import bagsData from "../data/bags";
import { ProductList } from './ProductList/ProductList';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';

const {
  yml_catalog: {
    shop: {
      categories: {
        category: { underwearTitle },
      },
      offers: { underwear },
    },
  },
} = underwearData;

const { yml_catalog: { shop: { categories: { category: { bagsTitlte } }, offers: { bags } } } } = bagsData;

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<ProductList title={bagsTitlte} list={bags} />} />
        <Route path="/underwear" element={<ProductList title={underwearTitle} list={underwear} />} />
        <Route path="/:product/:productId" element={<Card />} />
      </Routes>
      <Footer />
    </>
  );
};
