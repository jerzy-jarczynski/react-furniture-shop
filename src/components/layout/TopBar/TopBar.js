import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import Login from '../../views/Login/Login';

const TopBar = () => {
  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(
    t('topbar.language.english')
  );

  const clickHandler = (language, prefix) => {
    i18n.changeLanguage(prefix);
    setSelectedLanguage(t(language));
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-left ${styles.topOptions}`}>
            <ul>
              <li>
                <a href='#'>
                  {t('topbar.currency')}
                  <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li className={styles.language}>
                <a href='#' className={styles.selected}>
                  {selectedLanguage}
                  <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
                <ul className={styles.dropdown}>
                  <li onClick={() => clickHandler('topbar.language.english', 'en')}>
                    {t('topbar.language.english')}
                  </li>
                  <li onClick={() => clickHandler('topbar.language.polish', 'pl')}>
                    {t('topbar.language.polish')}
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  {t('topbar.help')}
                  <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
            </ul>
          </div>
          <div id='modal' className={`col text-right ${styles.topMenu}`}>
            <ul>
              <li>
                <Login />
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />{' '}
                  {t('topbar.register')}
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// TopBar.propTypes = {};

export default TopBar;
