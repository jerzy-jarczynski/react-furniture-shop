import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Feedback.module.scss';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Feedback = ({ text, author, description }) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faQuoteRight} />
      </div>
      <div>{text}</div>
      <div className='container'>
        <div className={'row ' + styles.author}>
          <div>
            <img
              className={styles.image}
              alt={author}
              src={`${process.env.PUBLIC_URL}/images/users/${author}.jpg`}
            />
          </div>
          <div className={styles.authorName}>
            <p>
              <b>{author}</b>
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Feedback.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Feedback;
