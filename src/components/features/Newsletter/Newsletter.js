import React from 'react';
import styles from './Newsletter.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    //console.log('Email added to newsletter');
    setEmail('');
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const allowedCharacters = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return (
    <div className={styles.root}>
      <div className='container'>
        <p className={styles.title}>Newsletter:</p>
        <div className={styles.mailBox}>
          <form onSubmit={validate(handleSubmit)}>
            <div className={styles.formWrapper}>
              <div className='form-group '>
                <label className={styles.iconWrapper}>
                  <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                </label>
                <input
                  {...register('email', { required: true, pattern: allowedCharacters })}
                  type='email'
                  id='email'
                  className='form-control'
                  placeholder='Enter your email address'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email?.type === 'required' && (
                  <small className={styles.invalidEmail}>
                    The email phrase cannot be empty
                  </small>
                )}
                {errors.email?.type === 'pattern' && (
                  <small className={styles.invalidEmail}>
                    The email phrase contains invalid characters
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
