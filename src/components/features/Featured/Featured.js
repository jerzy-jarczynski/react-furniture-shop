import React from 'react';
import PropTypes from 'prop-types';

import styles from './Featured.module.scss';
import { useSelector } from 'react-redux';
import { getFeatured } from '../../../redux/productsRedux';
import FeaturedProduct from '../../common/FeaturedProduct/FeaturedProduct';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.scss';

const Featured = () => {
  const featuredProducts = useSelector(getFeatured);
  const [activePage, setActivePage] = useState(0);
  const [visible, setVisible] = useState(true);
  const time = 250;
  const intervalRef = useRef(null); // Store the interval reference

  const intervalFunc = newPage =>
    setInterval(() => {
      setVisible(false);
      if (newPage === 3) newPage = 0;
      setTimeout(() => setActivePage(newPage++, time));
      setTimeout(() => setVisible(true, time * 2));
    }, 1000);

  useEffect(() => {
    intervalRef.current = intervalFunc(activePage); // Start intervalFunc on component mount
    return () => clearInterval(intervalRef.current); // Clear interval on component unmount
  }, [activePage]);

  const handlePageChange = newPage => {
    setVisible(false);
    //setTimeout(() => setActivePage(newPage, time));
    //setTimeout(() => setVisible(true, time * 2));
    clearInterval(intervalRef.current); // Stop the interval

    setTimeout(() => {
      intervalFunc(newPage); // Restart intervalFunc after 10 seconds
    }, 3000);
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
            <div
              id='hotDeals'
              className={styles.productsWrapper + ' ' + (!visible && styles.fade)}
            >
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
          </div>
          <div className='col-8'>
            <div className='carouselContainer'>
              <Carousel
                fade
                interval={null}
                indicators={false}
                prevLabel={false}
                nextLabel={false}
                prevIcon={
                  <Button variant='small'>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  </Button>
                }
                nextIcon={
                  <Button variant='small'>
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </Button>
                }
              >
                <Carousel.Item>
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
                  </div>
                </Carousel.Item>
                <Carousel.Item>
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
                  </div>
                </Carousel.Item>
                <Carousel.Item>
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
                  </div>
                </Carousel.Item>
              </Carousel>
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
