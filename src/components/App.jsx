import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { ProductDeatails } from './ProductDeatails/ProductDeatails';

import { ORDER_LIST } from 'constants/localItems';

import { addProductToLocalSorage } from 'redux/orderReducer';

import underwearData from '../data/underwear';
import bagsData from "../data/bags";
import { ProductList } from './ProductList/ProductList';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Basket } from './Basket/Basket';
import { useEffect, useState } from 'react';

import { PAGINATION_ITEMS_COUNT } from 'constants/paginationItem';
import { OrderPage } from 'pages/OrderPage/OrderPage';
import { useDispatch } from 'react-redux';

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
  const [currentPosition, setCurrentPosition] = useState(PAGINATION_ITEMS_COUNT);
  const [isLocalEmpty] = useState(localStorage.getItem(ORDER_LIST));

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLocalEmpty) {
      const parseOrderList = JSON.parse(localStorage.getItem(ORDER_LIST));
      dispatch(addProductToLocalSorage(parseOrderList));
    }
  }, [dispatch, isLocalEmpty]);

  return (
    <>
      <Basket toggleBasket={toggleBasket} setToggleBasket={setToggleBasket} />
      <Header setToggleBasket={setToggleBasket} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<ProductList
          setCurrentPosition={setCurrentPosition}
          currentPosition={currentPosition}
          title={bagsTitlte}
          list={bags}
        />} />
        <Route path="/underwear" element={<ProductList
          setCurrentPosition={setCurrentPosition}
          currentPosition={currentPosition}
          title={underwearTitle}
          list={underwear}
        />} />
        <Route path="/:product/:productId" element={<ProductDeatails setCurrentPosition={setCurrentPosition} />} />
        <Route path="order-page" element={<OrderPage />} />
      </Routes>
      <Footer />
    </>
  );
};
