import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductSearch.module.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useForm } from 'react-hook-form';

const ProductSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState('Select a category');
  const [activeSearch, setActiveSearch] = useState('');

  const allCategories = useSelector(getAll);
  const history = useHistory();

  const clickHandler = categoryName => {
    setSelectedCategory(categoryName);
  };
  const handleSubmit = () => {
    if (activeSearch === '') {
      alert('Wyszukiwanie nie może być puste');
      return;
    }
    const searchQuery = encodeURIComponent(activeSearch);
    history.push(`/search/${searchQuery}`);
    setActiveSearch('');
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  const allowedCharacters = /^[a-zA-Z0-9\s]+$/;

  return (
    <form action='' className={styles.root} onSubmit={validate(handleSubmit)}>
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
        <input
          {...register('search', { required: true, pattern: allowedCharacters })}
          placeholder='Search products...'
          type='text'
          value={activeSearch}
          onChange={event => setActiveSearch(event.target.value)}
        />
        {errors.search?.type === 'required' && (
          <small className={styles.invalidSearch}>
            Wyszukiwana fraza nie może być pusta
          </small>
        )}
        {errors.search?.type === 'pattern' && (
          <small className={styles.invalidSearch}>
            Wyszukiwana fraza zawiera niepoprawne znaki
          </small>
        )}
        <button type='submit'>
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
