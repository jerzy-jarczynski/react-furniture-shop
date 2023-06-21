import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => {
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
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
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
