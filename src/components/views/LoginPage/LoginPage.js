import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';
import styles from '../../layout/TopBar/TopBar.module.scss';
import Button from '../../common/Button/Button';

const LoginPage = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-right ${styles.topMenu}`}>
            <Button>
              Logout <FontAwesomeIcon className={styles.icon} icon={faUserMinus} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
