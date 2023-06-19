import React from 'react';
import styles from './Deals.module.scss';
import { useSelector } from 'react-redux';
import { getAllDeals } from '../../../redux/dealsRedux';

const Deals = () => {
  const deals = useSelector(state => getAllDeals(state));

  const left = deals.find(deal => deal.id === 1);
  const rightUp = deals.find(deal => deal.id === 2);
  const rightBottom = deals.find(deal => deal.id === 3);

  return (
    <div className={styles.boxes}>
      <div className={styles.leftBox}>
        <img src={left.source} alt='Left Deal Img' className={styles.Img} />
        <div className={styles.overlay}></div>
        <div className={styles.descriptionLeft}>
          <h3>{left.placeholder1}</h3>
          <h1>{left.placeholder2}</h1>
          <p>{left.placeholder3}</p>
        </div>
      </div>
      <div className={styles.rightBoxes}>
        <div className={styles.box}>
          <img src={rightUp.source} alt='Right Upper Deal Img' className={styles.Img} />
          <div className={styles.descriptionRightUp}>
            <h3>{rightUp.placeholder1}</h3>
            <h5>{rightUp.placeholder2}</h5>
            <h2>{rightUp.placeholder3}</h2>
          </div>
        </div>
        <div className={styles.divide}></div>
        <div className={styles.box}>
          <img
            src={rightBottom.source}
            alt='Right Bottom Deal Img'
            className={styles.Img}
          />
          <div className={styles.descriptionRightBottom}>
            <h2>{rightBottom.placeholder1}</h2>
            <h4>{rightBottom.placeholder2}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
