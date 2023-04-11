import underwear from '../../data/underwear';
import sass from './Card.module.scss';
import { nanoid } from 'nanoid';

const {
  yml_catalog: {
    shop: {
      offers: { underwearOffer },
    },
  },
} = underwear;
const productItem = underwearOffer[0];

const Card = () => {
  console.log(productItem);

  return (
    <div className="container">
      <section className={sass.productCard}>
        <h2 className={sass.productCardTitle}>{productItem.name_ua}</h2>
        <div className={sass.productCardThumb}>
          <img
            src={productItem.picture[0]}
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
              Виберіть розмір
              {productItem.param[2].text.split('|').map(el => (
                <button type="radio" name="sizes" value={el} key={nanoid()}>
                  {el}
                </button>
              ))}
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

export default Card;
