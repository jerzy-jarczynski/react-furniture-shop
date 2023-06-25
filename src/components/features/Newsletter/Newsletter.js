import React from 'react';
import styles from './Newsletter.module.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Newsletter = action => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (email) {
      //console.log('Email added to newsletter');
    }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <p className={styles.title}>Newsletter:</p>
        <div className={styles.mailBox}>
          <form onSubmit={e => validate(handleSubmit(e))}>
            <div className={styles.formWrapper}>
              <div className='form-group '>
                <label className={styles.iconWrapper}>
                  <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                </label>
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='Enter your email address'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email && (
                  <small className='d-block form-text text-danger mt-2'>
                    Invalid email.
                  </small>
                )}
              </div>
              <Button type='submit' variant='outline' className={styles.sendButton}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
