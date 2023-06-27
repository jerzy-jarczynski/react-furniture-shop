import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductSearch.module.scss';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { addSearch, getAllSearch, removeSearch } from '../../../redux/searchRedux';

const ProductSearch = () => {
  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState(t('menubar.select'));
  const [activeSearch, setActiveSearch] = useState('');
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [shouldHideSearch, setShouldHideSearch] = useState(false);
  const [searchError, setSearchError] = useState('');

  const allCategories = useSelector(getAllCategories);
  const allSearch = useSelector(getAllSearch);
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = categoryName => {
    setSelectedCategory(categoryName);
  };
  const handleFormSubmit = event => {
    event.preventDefault();

    if (activeSearch.trim() === '') {
      setSearchError('The search phrase cannot be empty');
      return;
    }

    const allowedCharacters = /^[a-zA-Z0-9\s]+$/;
    if (!allowedCharacters.test(activeSearch)) {
      setSearchError('The search phrase contains invalid characters');
      return;
    }

    if (allSearch.length === 5) {
      dispatch(removeSearch(allSearch[4]));
      setIsInputFocus(false);
    }

    const searchQuery = encodeURIComponent(activeSearch);
    history.push(`/search?s=${searchQuery}`);
    dispatch(addSearch({ searchContent: activeSearch }));
    setActiveSearch('');
    setSearchError('');
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
    setShouldHideSearch(false);
  };

  return (
    <form action='' className={styles.root} onSubmit={handleFormSubmit}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <span className={styles.selected}>{selectedCategory}</span>
        <ul className={styles.dropdown}>
          {allCategories.map(category => (
            <li key={category.id} onClick={() => clickHandler(category.name)}>
              <Link to={`/category/${category.name}`}>
                {t(category.translationKey)}
              </Link>
            </li>
          ))}
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input
          placeholder={t('menubar.search')}
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
                to={`#/search?s=${search.searchContent}`}
                onClick={handleClick}
              >
                {search.searchContent}
              </Link>
            ))}
          </div>
        )}
        {searchError && <small className={styles.invalidSearch}>{searchError}</small>}
        <button type='submit' aria-label='searchButton'>
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
