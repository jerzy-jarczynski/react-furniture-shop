import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-6 col-lg'>
            <FeatureBox icon={faTruck} active>
              <h5>{t('features.shipping.title')}</h5>
              <p>{t('features.shipping.subtitle')}</p>
            </FeatureBox>
          </div>
          <div className='col-6 col-lg'>
            <FeatureBox icon={faHeadphones}>
              <h5>{t('features.customer.title')}</h5>
              <p>{t('features.customer.subtitle')}</p>
            </FeatureBox>
          </div>
          <div className='col-6 col-lg'>
            <FeatureBox icon={faReplyAll}>
              <h5>{t('features.guarantee.title')}</h5>
              <p>{t('features.guarantee.subtitle')}</p>
            </FeatureBox>
          </div>
          <div className='col-6 col-lg'>
            <FeatureBox icon={faBullhorn}>
              <h5>{t('features.member.title')}</h5>
              <p>{t('features.member.subtitle')}</p>
            </FeatureBox>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
