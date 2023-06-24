import React from 'react';
import styles from './Deals.module.scss';
import { useSelector } from 'react-redux';
import { getAllDeals } from '../../../redux/dealsRedux';
import { useTranslation } from 'react-i18next';

const Deals = () => {
  const { t } = useTranslation();

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
          <h3>{t(left.placeholder1)}</h3>
          <h1>{t(left.placeholder2)}</h1>
          <p>{left.placeholder3}</p>
        </div>
      </div>
      <div className={styles.rightBoxes}>
        <div className={styles.box}>
          <img src={rightUp.source} alt='Right Upper Deal Img' className={styles.Img} />
          <div className={styles.descriptionRightUp}>
            <h3>{t(rightUp.placeholder1)}</h3>
            <h5>{t(rightUp.placeholder2)}</h5>
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
            <h2>{t(rightBottom.placeholder1)}</h2>
            <h4>{t(rightBottom.placeholder2)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
