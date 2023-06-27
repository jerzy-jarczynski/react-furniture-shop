import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactDom from 'react-dom'; //Importing ReactDom
import styles from './LoginModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginModal = ({ modalOpen, toggleModal }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const getUser = () => {
    const user = localStorage.getItem('user');
    return user !== null ? JSON.parse(user) : null;
  };

  const [user, setUser] = useState(getUser());

  const onLogin = user => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const onLogout = () => {
    setUser(null);
    localStorage.removeItem('user', null);
  };

  const ref = useRef(null);
  const closeModal = useCallback(
    ({ target }) => {
      if (ref && ref.current && !ref.current.contains(target)) {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    document.addEventListener('click', closeModal, { capture: true });

    return () => {
      document.removeEventListener('click', closeModal, { capture: true });
    };
  }, [closeModal]);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

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
    user ? (
      <Button onClick={onLogout} user={user}>
        Logout <FontAwesomeIcon className={styles.icon} icon={faUserMinus} />
      </Button>
    ) : (
      <div className={styles.modal} ref={ref}>
        <div className={styles.LoginModalContainer}>
          <form className='col-15 col-md-10 col-lg-12'>
            <div className={styles.quitButton}>
              <Button onClick={() => closeModal(false)}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
            </div>
            <h3 className='text-center'>Sign in to Bazar</h3>
            <input
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
              className='form-control my-3'
              type='text'
              aria-label='Email field'
              name='email'
              value={formData.email}
              placeholder='Username*'
              onChange={onChangeEmail}
            ></input>
            <input
              {...register('password', {
                required: true,
                minLength: 8,
                pattern: /(?=.[0-9])+\D/,
              })}
              className='form-control my-3'
              type={inputType}
              aria-label='Password field'
              name='password'
              value={formData.password}
              placeholder='Password*'
              onChange={onChangePassword}
            ></input>
            {errors.email && <p className='text-danger'>Incorrect email!</p>}
            {!errors.email && errors.password && (
              <p className='text-danger'>Incorrect password!</p>
            )}
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
                <Link onClick={() => closeModal(false)}>&lt;Back</Link>
              </div>
              <div className='col text-right'>
                <Button variant='main' type='submit' onClick={validate(onLogin)}>
                  Sign in
                </Button>
              </div>
            </div>
            <div>
              <Link to='/register'>New to Bazar? Create an account&gt;</Link>
            </div>
          </form>
        </div>
      </div>
    ),

    document.getElementById('modal') //Assign the root div to render to
  );
};

export default LoginModal;
