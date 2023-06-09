import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FeatureBox.module.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const FeatureBox = ({ active, icon, children }) => (
  <div className={styles.root}>
    {icon && (
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </div>
    )}
    <div className={styles.content}>
      <Link to={'#'} className={styles.link}>
        {children}
      </Link>
    </div>
  </div>
);

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
};

export default FeatureBox;
