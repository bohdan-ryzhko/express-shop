import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { ProductDeatails } from './ProductDeatails/ProductDeatails';

import underwearData from '../data/underwear';
import bagsData from "../data/bags";
import { ProductList } from './ProductList/ProductList';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Basket } from './Basket/Basket';
import { useState } from 'react';

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

const {
  yml_catalog: {
    shop: {
      categories: {
        category: { bagsTitlte }
      }, offers: {
        bags
      }
    }
  }
} = bagsData;

export const App = () => {

  const [toggleBasket, setToggleBasket] = useState(false);

  return (
    <>
      <Basket toggleBasket={toggleBasket} setToggleBasket={setToggleBasket} />
      <Header setToggleBasket={setToggleBasket} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<ProductList title={bagsTitlte} list={bags} />} />
        <Route path="/underwear" element={<ProductList title={underwearTitle} list={underwear} />} />
        <Route path="/:product/:productId" element={<ProductDeatails />} />
      </Routes>
      <Footer />
    </>
  );
};
