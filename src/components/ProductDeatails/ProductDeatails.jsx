import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sass from './ProductDeatails.module.scss';
import Skeleton from '@mui/material/Skeleton';

import { Link, useLocation, useParams } from "react-router-dom";
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';

import { BiArrowBack } from 'react-icons/bi';

import { useDispatch, useSelector } from 'react-redux';
import { addProduct, changeQuantityProduct } from 'redux/orderReducer';

import { fetchProductDetails } from 'services/fetchProductDetails';

export const ProductDeatails = ({ setCurrentPosition }) => {
  const dispatch = useDispatch();
  const { product, productId } = useParams();
  const [productItem, setProductItem] = useState(null);
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [isLoad, setIsLoad] = useState(false);

  const { orderList } = useSelector(state => state.orderList);
  const currentProduct = orderList.find(product => product.id === productId);

  useEffect(() => {
    setIsLoad(true);
    fetchProductDetails(product, productId)
      .then(data => {
        if (data.status !== 200) return Promise.reject(data);
        console.log(data);
        setProductItem(data.data);
        setIsLoad(false);
      })
      .catch(error => {
        console.log(error)
        setIsLoad(false);
      });
  }, [product, productId]);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    setCurrentPosition(Number(backLinkRef.current.search.split(/[^0-9]/).join("")));
  }, [setCurrentPosition]);

  const addToBasket = () => {
    dispatch(addProduct({
      ...productItem,
      count_price: productItem.price * quantityProduct,
      quantityProduct
    }));
  }

  const changeQuantity = value => ({ target }) => {
    if (currentProduct === undefined) {
      if (quantityProduct === 1 && target.name === "decrement") return;
      return setQuantityProduct(prev => prev + value);
    }

    dispatch(changeQuantityProduct({ id: productId, value, target: target.name }));
  }

  return (
  <>
    {
      isLoad &&
      <div className="container">
        <Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
        <div className={sass.loaderContent}>
              <Skeleton variant="rounded" className={sass.loadImg} sx={{
                width: 500,
                height: 500
              }} />
          <div>
            <Skeleton variant="text" sx={{ fontSize: '1rem', width: 200 }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', width: "100%" }} />
          </div>
        </div>
      </div>
    }
    {
      productItem &&
      <main className={sass.productDetails}>
          <div className="container">
          <section className={sass.productCard}>
            <Link className={sass.backLink} to={backLinkRef.current}>
              <BiArrowBack size={30}/>
            </Link>
            <h2 className={sass.productCardTitle}>{productItem.name_ua}</h2>
              <div className={sass.productCardThumb}>
                {
                  Array.isArray(productItem.picture)
                    ? <Swiper
                      modules={[Navigation, Pagination, A11y]}
                      slidesPerView={1}
                      spaceBetween={200}
                      navigation
                      pagination={{ clickable: true }}
                    >
                    {
                      productItem.picture.map(imgUrl => <SwiperSlide
                        key={imgUrl}
                      >
                        <img width={500} className={sass.productImage} src={imgUrl} alt="" />
                      </SwiperSlide>)
                    }
                    </Swiper>
                    : <img width={500} src={productItem.picture} alt="" />
                }
                <div className={sass.productCardDescription}>
                  {
                    productItem.oldprice && 
                    <p className={sass.oldPrice}>
                      {productItem.oldprice} {productItem.currencyId}
                    </p>
                  }
                  <p className={sass.price}>
                    {productItem.price} {productItem.currencyId}
                  </p>
                  {
                    productItem.vendor &&
                    <p className={sass.brand}>Бренд: {productItem.vendor}</p>
                  }
                  <p className={sass.productDescription}>{productItem?.description_ua || productItem?.description}</p>
                  <div className={sass.productCardSizes}>
                    {
                      productItem.param[2] &&
                      <>
                        <p>Виберіть розмір:</p>
                        {
                          productItem.param[2].text?.split('|').map(el => (
                            <button type="radio" name="sizes" value={el} key={el}>
                              {el}
                            </button>
                          ))
                        }
                      </>
                    }
                </div>
                <div className={sass.productCardPurchaseOptions}>
                  <div className={sass.productCardQuantityOptions}>
                    <label htmlFor="quantity">Кількість</label>
                    <div className={sass.quantityWrapper}>
                      <button
                        name="decrement"
                        onClick={changeQuantity(-1)}
                        className={sass.decrement}
                        type="button">-</button>
                          <p className={sass.productQuantity}>
                            {
                              currentProduct === undefined
                                ? quantityProduct
                                : currentProduct.quantityProduct
                            }
                          </p>
                        <button
                          name="increment"
                          onClick={changeQuantity(1)}
                          className={sass.increment}
                          type="button">+</button>
                    </div>
                  </div>
                  <button className={sass.productAdd} onClick={addToBasket} type="button">Додати до кошику</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      }
    </>
  )
}