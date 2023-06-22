import React from 'react';
import styles from './GallerySlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faShoppingBasket,
  faExchangeAlt,
  faEye,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import clsx from 'clsx';

const GallerySlider = () => {
  const topSellers = useSelector(getAll);

  return (
    <div className={styles.root}>
      <div className={'row no-gutters ' + styles.categories}>
        <div className={'col'}>
          <a href=''>Featured</a>
        </div>
        <div className='col'>
          <a href='' className={styles.active}>
            Top seller
          </a>
        </div>
        <div className='col'>
          <a href=''>Sale off</a>
        </div>
        <div className='col'>
          <a href=''>Top rated</a>
        </div>
      </div>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}images/products/chair-1.jpeg)`,
          backgroundSize: 'cover',
        }}
      >
        <div className={clsx(styles.buttons, styles.tooltip)}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>Add to favorite</span>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>Add to compare</span>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>Quick view</span>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>Add to cart</span>
        </div>
        <div className={styles.badge}>
          <div className={styles.price}>
            <h4>$99.00</h4>
            <h6>$159.00</h6>
          </div>
          <div className={styles.nameBadge}>
            <h5>Aenean Ru Bristique</h5>
            <div>
              {[1, 2, 3, 4, 5].map(i => (
                <span key={i} href='#'>
                  {i <= 2 ? (
                    <FontAwesomeIcon className={styles.stars} icon={faStar}>
                      {i} stars
                    </FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon className={styles.stars} icon={farStar}>
                      {i} stars
                    </FontAwesomeIcon>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={'row no-gutters ' + styles.sliderList}>
        <div className={'col-auto ' + styles.sliderArrow}>
          {' '}
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </div>
        {topSellers.slice(0, 6).map(item => (
          <div
            className={'col ' + styles.product}
            key={item.id}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL
              }/images/products/chair-${item.id.substr(item.id.length - 1)}.jpeg)`,
              backgroundSize: 'cover',
            }}
          ></div>
        ))}
        <div className={'col-auto ' + styles.sliderArrow}>
          {' '}
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
