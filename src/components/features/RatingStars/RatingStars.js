import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import styles from './RatingStars.module.scss';

const RatingStars = ({ rating, user }) => {
  const [starsCount, setStarsCount] = useState(0);
  const [userRating, setUserRating] = useState(false);

  useEffect(() => {
    if (user) {
      setStarsCount(user);
      setUserRating(true);
    } else {
      setStarsCount(rating);
      setUserRating(false);
    }
  }, [user, rating]);

  const clickHandler = (event, num) => {
    event.preventDefault();

    if (userRating) {
      if (num === starsCount) {
        setUserRating(false);
        setStarsCount(rating);
      } else {
        setStarsCount(num);
      }
    } else {
      setStarsCount(num);
      setUserRating(true);
    }
  };

  return (
    <div
      className={`${styles.rating} ${styles[`rating${starsCount}`]} ${
        userRating ? styles.userRating : ''
      }`}
    >
      {[5, 4, 3, 2, 1].map(i => (
        <a key={i} href='#' className={styles.star} onClick={e => clickHandler(e, i)}>
          <span className={styles.starFull}>
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          </span>
          <span className={styles.starEmpty}>
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          </span>
        </a>
      ))}
    </div>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number,
  user: PropTypes.number,
};

export default RatingStars;
