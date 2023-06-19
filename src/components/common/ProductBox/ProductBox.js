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

const ProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  id,
  stars,
  compare,
  isFavorite,
  userRating,
}) => {
  const [favoriteValue, setFavoriteValue] = useState(isFavorite);
  const dispatch = useDispatch();

  const toggleFavoriteValue = e => {
    e.preventDefault();
    setFavoriteValue(!isFavorite);
    dispatch(toggleFavorite(id));
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img
          className={styles.image}
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/products/${name}.jpeg`}
        />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
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
          <Button variant='outline' className={compare && styles.compare}>
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
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  isFavorite: PropTypes.bool,
  id: PropTypes.string,
  userRating: PropTypes.number,
};

export default ProductBox;
