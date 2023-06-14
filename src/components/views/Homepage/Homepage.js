import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../layout/Brands/Brands';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
