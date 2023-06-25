import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../../layout/TopBar/TopBar.module.scss';

import LoginModal from '../../common/LoginModal/LoginModal';
import Button from '../../common/Button/Button';
const Login = props => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

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
      />
    </div>
  );
};
export default Login;
