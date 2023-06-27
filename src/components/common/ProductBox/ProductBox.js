import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { toggleFavorite } from '../../../redux/productsRedux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import RatingStars from '../../features/RatingStars/RatingStars';
import { addProduct } from '../../../redux/cartRedux';
import { useTranslation } from 'react-i18next';

const ProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  id,
  stars,
  action,
  isInCompare,
  isMaxCompareReached,
  userRating,
  isFavorite,
  compare,
  source,
  amount,
}) => {
  const { t } = useTranslation();
  const [favoriteValue, setFavoriteValue] = useState(isFavorite);
  const dispatch = useDispatch();

  const toggleFavoriteValue = e => {
    e.preventDefault();
    setFavoriteValue(!isFavorite);
    dispatch(toggleFavorite(id));
  };

  const handleAddToCartClick = e => {
    e.preventDefault();
    localStorage.setItem('myCart', JSON.stringify({ id, name, price, source }));
    dispatch(addProduct({ id, name, price, source, amount }));
  };
  return (
    <div className={`${styles.root} ${isInCompare ? styles.activeOutline : ''}`}>
      <div className={styles.root}></div>
      <div className={styles.photo}>
        <img
          className={styles.image}
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/products/${name}.jpeg`}
          rel='preload'
          fetchpriority='high'
        />
        {promo && <div className={styles.sale}>{t(promo)}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>{t('newFurniture.quickView')}</Button>
          <Button variant='small' onClick={handleAddToCartClick}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>{' '}
            {t('newFurniture.cart')}
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <RatingStars rating={stars} user={userRating} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={e => toggleFavoriteValue(e)}
            className={favoriteValue ? styles.isFavorite : undefined}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            onClick={action}
            className={`${compare} ${isInCompare ? styles.clicked : ''} ${
              isMaxCompareReached && !isInCompare ? styles.disabled : ''
            }`}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        {oldPrice && <div className={styles.oldPrice}>$ {oldPrice}</div>}
        <div className={styles.price}>
          <Button variant='small'>$ {price}</Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  action: PropTypes.func,
  isInCompare: PropTypes.bool,
  isMaxCompareReached: PropTypes.bool,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  isFavorite: PropTypes.bool,
  userRating: PropTypes.number,
  source: PropTypes.string,
  amount: PropTypes.number,
};

export default ProductBox;
