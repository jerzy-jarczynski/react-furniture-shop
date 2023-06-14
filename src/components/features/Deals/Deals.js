import React from 'react';
import styles from './Deals.module.scss';

const Deals = () => {
  return (
    <div className={styles.boxes}>
      <div className={styles.leftBox}>
        <p>x</p>
      </div>
      <div className={styles.rightBoxes}>
        <div className={styles.box}>
          <p>x</p>
        </div>
        <div className={styles.divide}></div>
        <div className={styles.box}>
          <p>x</p>
        </div>
      </div>
    </div>
  );
};

export default Deals;
