import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sass from './ProductDeatails.module.scss';

import { useParams } from "react-router-dom";
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getProductCard } from 'services/getProductCard';

import underwearData from '../../data/underwear';
import bagsData from "../../data/bags";
const { yml_catalog: { shop: { offers: { underwear } } } } = underwearData;
const { yml_catalog: { shop: { offers: { bags } } } } = bagsData;

const productCardOptions = {
  underwear,
  bags,
}

export const ProductDeatails = () => {
  const { product, productId } = useParams();
  const productItem = getProductCard(product, productId, productCardOptions);
  console.log(productItem);

  return (
    productItem &&
    <main className={sass.productDetails}>
      <div className="container">
        <section className={sass.productCard}>
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
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                  >
                  {
                    productItem.picture.map(imgUrl => <SwiperSlide
                      key={imgUrl}>
                      <img width={500} className={sass.productImage} src={imgUrl} alt="" />
                    </SwiperSlide>)
                  }
                  </Swiper>
                  : <img width={500} src={productItem.picture} alt="" />
              }
                        <div className={sass.productCardDescription}>
              <p>
                {productItem.oldprice} {productItem.currencyId}
              </p>
              <p>
                {productItem.price} {productItem.currencyId}
              </p>
              {
                productItem.vendor &&
                <p>Бренд: {productItem.vendor}</p>
              }
              <p>{productItem.description_ua}</p>
              <div className={sass.productCardSizes}>
                {
                  productItem.param[2] &&
                  <>
                    <p>Виберіть розмір</p>
                    {
                      productItem.param[2].text.split('|').map(el => (
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
                  <div>
                    <button type="button">-</button>
                    <input type="text" name="quantity" />
                    <button type="button">+</button>
                  </div>
                </div>
                <button type="button">Додати до кошику</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
