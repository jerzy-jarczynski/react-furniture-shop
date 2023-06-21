import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductSearch.module.scss';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useForm } from 'react-hook-form';
import { getAllSearch } from '../../../redux/searchRedux';

const ProductSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState('Select a category');
  const [activeSearch, setActiveSearch] = useState('');
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [shouldHideSearch, setShouldHideSearch] = useState(false);

  const allCategories = useSelector(getAll);
  const allSearch = useSelector(getAllSearch);
  const history = useHistory();

  console.log('allSearch: ', allSearch);
  console.log('allCat: ', allCategories);
  const clickHandler = categoryName => {
    setSelectedCategory(categoryName);
  };
  const handleSubmit = () => {
    const searchQuery = encodeURIComponent(activeSearch);
    history.push(`/search/${searchQuery}`);
    setActiveSearch('');
  };
  const handleInputFocus = () => {
    setIsInputFocus(true);
  };
  const handleInputBlur = () => {
    if (!shouldHideSearch) {
      setTimeout(() => {
        setIsInputFocus(false);
      }, 100);
    }
  };
  const handleClick = () => {
    setIsInputFocus(false);
    setShouldHideSearch(true);
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
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {isInputFocus && (
          <div className={styles.dropdownSearch}>
            {allSearch.map(search => (
              <Link
                key={search.id}
                to={`/search/${search.searchContent}`}
                onClick={handleClick}
              >
                {search.searchContent}
              </Link>
            ))}
          </div>
        )}
        {errors.search?.type === 'required' && (
          <small className={styles.invalidSearch}>
            The search phrase cannot be empty
          </small>
        )}
        {errors.search?.type === 'pattern' && (
          <small className={styles.invalidSearch}>
            The search phrase contains invalid characters
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
