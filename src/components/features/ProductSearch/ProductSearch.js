import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState('Select a category');

  const allCategories = useSelector(getAll);

  const clickHandler = categoryName => {
    setSelectedCategory(categoryName);
  };

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <span className={styles.selected}>{selectedCategory}</span>
        <ul className={styles.dropdown}>
          {allCategories.map(category => (
            <li key={category.id} onClick={() => clickHandler(category.name)}>
              {category.name}
            </li>
          ))}
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
