import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStar as farStar } from '@fortawesome/free-solid-svg-icons';

import styles from './RatingStars.module.scss';

const RatingStars = ({ rating }) => {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#'>
          {i <= rating ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number,
};

export default RatingStars;
