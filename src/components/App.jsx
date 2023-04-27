import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { ProductDeatails } from './ProductDeatails/ProductDeatails';

import { ProductList } from './ProductList/ProductList';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Basket } from './Basket/Basket';
import { useState } from 'react';

import { PAGINATION_ITEMS_COUNT } from 'constants/paginationItem';
import { OrderPage } from 'pages/OrderPage/OrderPage';


export const App = () => {

  const [toggleBasket, setToggleBasket] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(PAGINATION_ITEMS_COUNT);

  return (
    <>
      <Basket toggleBasket={toggleBasket} setToggleBasket={setToggleBasket} />
      <Header setToggleBasket={setToggleBasket} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<ProductList title="Жіночі сумки" />} />
        <Route path="/underwears" element={<ProductList title="Брендова чоловіча білизна" />} />
        <Route path="/:product/:productId" element={<ProductDeatails setCurrentPosition={setCurrentPosition} />} />
        <Route path="order-page" element={<OrderPage />} />
      </Routes>
      <Footer />
    </>
  );
};
