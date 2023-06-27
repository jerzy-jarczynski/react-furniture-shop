import React from 'react';
import styles from './Newsletter.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Button from '../../common/Button/Button';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
//import { useForm } from 'react-hook-form';

import { async } from 'q';

const Newsletter = () => {
  const mailchimp = require('@mailchimp/mailchimp_marketing');

  mailchimp.setConfig({
    apiKey: '99ed69ae75719ff1a7384d3e46e7050a-us10',
    server: 'us10',
  });
  async function callPing() {
    const response = await mailchimp.ping.get();
    console.log(response);
  }
  callPing();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = event => {
    //console.log('Email added to newsletter');
    event.preventDefault();

    if (email.trim() === '') {
      setEmailError('The email phrase cannot be empty');
      return;
    }

    const allowedCharacters = /^[a-zA-Z0-9@.\s]+$/;
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
              <button
                type='submit'
                aria-label='searchButton'
                variant='outline'
                className={styles.sendButton}
              >
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
