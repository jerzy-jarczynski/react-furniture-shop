import React from 'react';
import PropTypes from 'prop-types';

import styles from './Featured.module.scss';
import { useSelector } from 'react-redux';
import { getFeatured } from '../../../redux/productsRedux';
import FeaturedProduct from '../../common/FeaturedProduct/FeaturedProduct';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Featured = () => {
  const featuredProducts = useSelector(getFeatured);
  const [activePage, setActivePage] = useState(0);

  const handlePageChange = newPage => {
    setActivePage(newPage);
  };
  const dots = [];
  for (let i = 0; i < 3; i++) {
    dots.push(
      <li>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Hot deals</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            {featuredProducts
              .slice(activePage * 1, (activePage + 1) * 1)
              .map(product => (
                <FeaturedProduct
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  stars={product.stars}
                  oldPrice={product.oldPrice}
                />
              ))}
          </div>
          <div className='col-8'>
            <div className={styles.promo}>
              <img src='images/featured-promo.jpg' alt='Discounted product' />
              <div className={styles.content}>
                <p>
                  INDOOR <span>FURNITURE</span>
                </p>
                <p>SAVE UP TO 50% OF ALL FURNITURE</p>
                <Button variant='outline' className='btn-light'>
                  SHOP NOW
                </Button>
              </div>
              <div className={styles.buttons}>
                <Button variant='small'>
                  <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                </Button>
                <Button variant='small'>
                  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Featured.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.number,
};

export default Featured;
