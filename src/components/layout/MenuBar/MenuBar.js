import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchResult = searchParams.get('s')?.toLowerCase() || '';

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
                <a href='/' className={!searchResult ? styles.active : ''}>
                  {t('menubar.navLinks.home')}
                </a>
              </li>
              <li>
                <a
                  href='#/category?s=furniture'
                  className={searchResult === 'furniture' ? styles.active : ''}
                >
                  {t('menubar.navLinks.furniture')}
                </a>
              </li>
              <li>
                <a
                  href='#/category?s=chair'
                  className={searchResult === 'chair' ? styles.active : ''}
                >
                  {t('menubar.navLinks.chair')}
                </a>
              </li>
              <li>
                <a
                  href='#/category?s=table'
                  className={searchResult === 'table' ? styles.active : ''}
                >
                  {t('menubar.navLinks.table')}
                </a>
              </li>
              <li>
                <a
                  href='#/category?s=sofa'
                  className={searchResult === 'sofa' ? styles.active : ''}
                >
                  {t('menubar.navLinks.sofa')}
                </a>
              </li>
              <li>
                <a
                  href='#/category?s=bedroom'
                  className={searchResult === 'bedroom' ? styles.active : ''}
                >
                  {t('menubar.navLinks.bedroom')}
                </a>
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
