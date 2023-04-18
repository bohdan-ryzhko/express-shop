import sass from './Card.module.scss';
import { useParams } from "react-router-dom";

import { getProductCard } from 'services/getProductCard';

import underwearData from '../../data/underwear';
import bagsData from "../../data/bags";
const { yml_catalog: { shop: { offers: { underwear } } } } = underwearData;
const { yml_catalog: { shop: { offers: { bags } } } } = bagsData;

const productCardOptions = {
  underwear,
  bags,
}

export const Card = () => {
  const { product, productId } = useParams();
  const productItem = getProductCard(product, productId, productCardOptions);

  return (
    productItem &&
    <div className="container">
      <section className={sass.productCard}>
        <h2 className={sass.productCardTitle}>{productItem.name_ua}</h2>
        <div className={sass.productCardThumb}>
          <img
            src={
              Array.isArray(productItem.pictire)
                ? productItem.picture[0]
                : productItem.picture
            }
            alt={productItem.name_ua}
            width={680}
            height={540}
          />
          <div className={sass.productCardDescription}>
            <p>
              {productItem.oldprice} {productItem.currencyId}
            </p>
            <p>
              {productItem.price} {productItem.currencyId}
            </p>
            <p>Бренд: {productItem.vendor}</p>
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
  );
};