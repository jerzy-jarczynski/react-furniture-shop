import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../../layout/TopBar/TopBar.module.scss';
import LoginModal from '../../common/LoginModal/LoginModal';
import Button from '../../common/Button/Button';
const Login = props => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const toggleModal = useCallback(() => {
    setLoginModalOpen(prevState => !prevState);
  }, []);

  return (
    <div>
      <div>
        <Button onClick={() => setLoginModalOpen(true)}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
        </Button>
      </div>
      <LoginModal
        {...props}
        modalOpen={loginModalOpen}
        closeModal={() => setLoginModalOpen(false)}
        toggleModal={toggleModal}
      />
    </div>
  );
};
export default Login;
