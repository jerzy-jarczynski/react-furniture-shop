import React, { useState } from 'react';
import ReactDom from 'react-dom'; //Importing ReactDom
import styles from './LoginModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginModal = ({ modalOpen, closeModal }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const onClick = () => {
    console.log('onClick', onClick);
    console.log('email:', formData.email);
    console.log('password:', formData.password);
  };

  const onChangeEmail = e => {
    setFormData({ ...formData, email: e.target.value });
  };

  const onChangePassword = e => {
    setFormData({ ...formData, password: e.target.value });
  };

  const [inputType, setInputType] = useState('password');

  const handleShowPassword = checked => {
    checked ? setInputType('text') : setInputType('password');
  };

  if (!modalOpen) return null;

  return ReactDom.createPortal(
    //Implementing portal
    <div className={styles.modal}>
      <div className={styles.LoginModalContainer}>
        <form className='col-15 col-md-10 col-lg-12'>
          <div className={styles.quitButton}>
            <Button onClick={() => closeModal(false)}>
              <FontAwesomeIcon icon={faUser} />
            </Button>
          </div>
          <h3 className='text-center'>Sign in to Bazar</h3>
          <input
            className='form-control my-3'
            type='text'
            aria-label='Email field'
            name='email'
            value={formData.email}
            placeholder='Username*'
            onChange={onChangeEmail}
          ></input>
          <input
            className='form-control my-3'
            type={inputType}
            aria-label='Password field'
            name='password'
            value={formData.password}
            placeholder='Password*'
            onChange={onChangePassword}
          ></input>
          <div className='row my-3'>
            <div className=' col text-left '>
              <div className='form-check form-switch '>
                <input
                  className='form-check-input'
                  type='checkbox'
                  role='switch'
                  id='switchShowPassword'
                  onChange={e => handleShowPassword(e.target.checked)}
                ></input>
                <label className='form-check-label' htmlFor='switchShowPassword'>
                  Show password
                </label>
              </div>
            </div>
            <div>
              <a href='#'>Forgot password?</a>
            </div>
          </div>
          <div className='form-check text-left'>
            <input className='form-check-input ' type='checkbox'></input>
            <label className='form-check-label'>Remember me</label>
          </div>
          <div className='row my-4 align-items-center'>
            <div className='col text-left'>
              <Link onClick={closeModal} to='/'>
                &lt;Back
              </Link>
            </div>
            <div className='col text-right'>
              <Button variant='main' type='submit' onClick={onClick}>
                Sign in
              </Button>
            </div>
          </div>
          <div>
            <Link to='/register'>New to Bazar? Create an account&gt;</Link>
          </div>
        </form>
      </div>
    </div>,

    document.getElementById('modal') //Assign the root div to render to
  );
};

export default LoginModal;
