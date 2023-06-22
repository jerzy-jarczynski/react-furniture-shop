import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className={'col ' + styles.search}>
            <ProductSearch />
          </div>
          <div className={'col-auto ' + styles.menu}>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
              <span onClick={toggleMenu} className={styles.xmark}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              <li>
                <a href='#' className={styles.active}>
                  {t('menubar.navLinks.home')}
                </a>
              </li>
              <li>
                <a href='#'>{t('menubar.navLinks.furniture')}</a>
              </li>
              <li>
                <a href='#'>{t('menubar.navLinks.chair')}</a>
              </li>
              <li>
                <a href='#'>{t('menubar.navLinks.table')}</a>
              </li>
              <li>
                <a href='#'>{t('menubar.navLinks.sofa')}</a>
              </li>
              <li>
                <a href='#'>{t('menubar.navLinks.bedroom')}</a>
              </li>
              <li>
                <a href='#'>{t('menubar.navLinks.blog')}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
