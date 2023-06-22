import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ children }) => {
  const { t } = useTranslation();

  return (
    <footer className={styles.root}>
      <div className={styles.footerMenu}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-3'>
              <div className={styles.menuWrapper}>
                <h6>
                  {/* Information */}
                  {t('footer.informationFirst.title')}
                </h6>
                <ul>
                  <li>
                    <a href='#'>
                      {/* About us */}
                      {t('footer.informationFirst.about')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* Policy */}
                      {t('footer.informationFirst.policy')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* Conditions */}
                      {t('footer.informationFirst.conditions')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* Online support */}
                      {t('footer.informationFirst.support')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-3'>
              <div className={styles.menuWrapper}>
                <h6>
                  {/* My account */}
                  {t('footer.account.title')}
                </h6>
                <ul>
                  <li>
                    <a href='#'>
                      {/* Login */}
                      {t('footer.account.login')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* My cart */}
                      {t('footer.account.cart')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* Wishlist */}
                      {t('footer.account.wishlist')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* Checkout */}
                      {t('footer.account.checkout')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-3'>
              <div className={styles.menuWrapper}>
                <h6>
                  {/* Information */}
                  {t('footer.informationSecond.title')}
                </h6>
                <ul>
                  <li>
                    <a href='#'>
                      {/* Specials */}
                      {t('footer.informationSecond.specials')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* New products */}
                      {t('footer.informationSecond.new')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* Best Sellers */}
                      {t('footer.informationSecond.best')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* Out Stores */}
                      {t('footer.informationSecond.out')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-3'>
              <div className={styles.menuWrapper}>
                <h6>
                  {/* Orders */}
                  {t('footer.orders.title')}
                </h6>
                <ul>
                  <li>
                    <a href='#'>
                      {/* Payment options */}
                      {t('footer.orders.payment')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* Shipping and delivery */}
                      {t('footer.orders.shippingDelivery')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* Returns */}
                      {t('footer.orders.returns')}
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* Shipping */}
                      {t('footer.orders.shipping')}
                    </a>
                  </li>
                </ul>
              </div>
              <img src='./images/cards.png' alt='Supported credit cards' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-12 col-lg-4 text-md-center text-left '></div>
            <div className={'col-md-6 col-lg-4 text-center ' + styles.copyright}>
              <p>©Copyright 2016 Bazar | All Rights Reserved</p>
            </div>
            <div className={'col-md-6 col-lg-4 text-right ' + styles.socialMedia}>
              <ul>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
