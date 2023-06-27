import React from 'react';
import styles from './Newsletter.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Button from '../../common/Button/Button';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
//import { useForm } from 'react-hook-form';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = event => {
    //console.log('Email added to newsletter');
    event.preventDefault();

    if (email.trim() === '') {
      setEmailError('The email phrase cannot be empty');
      return;
    }

    const allowedCharacters = /^[a-zA-Z0-9\s]+$/;
    if (!allowedCharacters.test(email)) {
      setEmailError('The email phrase contains invalid characters');
      return;
    }
    setEmail('');
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <p className={styles.title}>Newsletter:</p>
        <div className={styles.mailBox}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formWrapper}>
              <div className='form-group '>
                <label className={styles.iconWrapper}>
                  <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                </label>
                <input
                  type='email'
                  id='email'
                  className='form-control'
                  placeholder='Enter your email address'
                  onChange={event => setEmail(event.target.value)}
                  value={email}
                />
                {emailError && (
                  <small className={styles.invalidEmail}>{emailError}</small>
                )}
              </div>
              <button type='submit' variant='outline' className={styles.sendButton}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
