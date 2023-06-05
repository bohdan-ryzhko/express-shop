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

import { ToastContainer, Slide } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { DataProcessing } from 'pages/DataProcessing/DataProcessing';


export const App = () => {
  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/underwears?sort=desc`)
  //     .then(res => res.json())
  //     .then(data => {
  //       data.forEach(element => {
  //         console.log(element.price);
  //       });
  //       console.log(data)
  //     });
  // }, []);

  const [toggleBasket, setToggleBasket] = useState(false);
  const [, setCurrentPosition] = useState(PAGINATION_ITEMS_COUNT);

  return (
    <>
      <Basket toggleBasket={toggleBasket} setToggleBasket={setToggleBasket} />
      <Header setToggleBasket={setToggleBasket} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<ProductList title="Жіночі сумки" />} />
        <Route path="/underwears" element={<ProductList title="Брендова чоловіча білизна" />} />
        <Route path="/socks" element={<ProductList title="Шкарпетки" />} />
        <Route path="/linens" element={<ProductList title="Постільна білизна" />} />
        <Route path="/glasses" element={<ProductList title="Окуляри" />} />
        <Route path="/:product/:productId" element={ <ProductDeatails setCurrentPosition={setCurrentPosition} />} />
        <Route path="order-page" element={<OrderPage />} />
        <Route path="data-processing" element={<DataProcessing />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  );
};
